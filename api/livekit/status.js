export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const url = process.env.LIVEKIT_URL || ''
  const apiKey = process.env.LIVEKIT_API_KEY || ''
  const apiSecret = process.env.LIVEKIT_API_SECRET || ''
  const validUrl = /^wss:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(url)
  const configured = validUrl && apiKey.length > 0 && apiSecret.length > 0

  // Report configuration state only. Never return credentials or issue tokens here.
  return res.status(configured ? 200 : 503).json({
    configured,
    reason: configured ? 'CONFIGURED' : 'LIVEKIT_ENV_INCOMPLETE'
  })
}
