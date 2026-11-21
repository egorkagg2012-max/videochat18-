export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Fail closed until a real age-assurance provider is configured,
  // verified server-side, and tested. Never accept a client age flag.
  return res.status(503).json({
    available: false,
    accessGranted: false,
    reason: 'AGE_ASSURANCE_NOT_CONFIGURED'
  })
}
