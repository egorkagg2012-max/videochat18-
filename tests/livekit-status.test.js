import test from 'node:test'
import assert from 'node:assert/strict'
import handler from '../api/livekit/status.js'

function mockResponse() {
  return {
    statusCode: 200,
    headers: {},
    body: undefined,
    setHeader(name, value) { this.headers[name.toLowerCase()] = value },
    status(code) { this.statusCode = code; return this },
    json(value) { this.body = value; return this }
  }
}

const envKeys = ['LIVEKIT_URL', 'LIVEKIT_API_KEY', 'LIVEKIT_API_SECRET']
const originalEnv = Object.fromEntries(envKeys.map(key => [key, process.env[key]]))

function restoreEnv() {
  for (const key of envKeys) {
    if (originalEnv[key] === undefined) delete process.env[key]
    else process.env[key] = originalEnv[key]
  }
}

test('reports configured without exposing credentials', () => {
  process.env.LIVEKIT_URL = 'wss://example.livekit.cloud'
  process.env.LIVEKIT_API_KEY = 'test-key'
  process.env.LIVEKIT_API_SECRET = 'test-secret'
  const res = mockResponse()

  handler({ method: 'GET' }, res)

  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.body, { configured: true, reason: 'CONFIGURED' })
  assert.equal(JSON.stringify(res.body).includes('test-secret'), false)
  restoreEnv()
})

test('fails closed when a credential is missing or URL is invalid', () => {
  process.env.LIVEKIT_URL = 'https://example.livekit.cloud'
  process.env.LIVEKIT_API_KEY = 'test-key'
  process.env.LIVEKIT_API_SECRET = ''
  const res = mockResponse()

  handler({ method: 'GET' }, res)

  assert.equal(res.statusCode, 503)
  assert.deepEqual(res.body, { configured: false, reason: 'LIVEKIT_ENV_INCOMPLETE' })
  restoreEnv()
})

test('rejects non-GET methods', () => {
  const res = mockResponse()
  handler({ method: 'POST' }, res)
  assert.equal(res.statusCode, 405)
  assert.equal(res.headers.allow, 'GET')
})
