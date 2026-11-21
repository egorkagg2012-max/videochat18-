import test from 'node:test'
import assert from 'node:assert/strict'
import handler from '../api/age-verification/status.js'

function mockResponse() {
  return {
    statusCode: 200,
    headers: {},
    body: undefined,
    setHeader(name, value) { this.headers[name.toLowerCase()] = value },
    status(code) {
      this.statusCode = code
      return this
    },
    json(value) {
      this.body = value
      return this
    }
  }
}

test('GET status fails closed until age assurance is configured', () => {
  const req = { method: 'GET' }
  const res = mockResponse()

  handler(req, res)

  assert.equal(res.statusCode, 503)
  assert.equal(res.headers['cache-control'], 'no-store, max-age=0')
  assert.equal(res.body.available, false)
  assert.equal(res.body.accessGranted, false)
  assert.equal(res.body.reason, 'AGE_ASSURANCE_NOT_CONFIGURED')
})

test('non-GET methods are rejected', () => {
  const req = { method: 'POST' }
  const res = mockResponse()

  handler(req, res)

  assert.equal(res.statusCode, 405)
  assert.equal(res.headers.allow, 'GET')
  assert.deepEqual(res.body, { error: 'Method not allowed' })
})
