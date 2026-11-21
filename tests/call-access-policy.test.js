import test from 'node:test'
import assert from 'node:assert/strict'
import { evaluateCallAccess } from '../api/_lib/call-access-policy.js'

const now = Date.parse('2026-11-21T12:00:00.000Z')
const age = {
  status: 'verified',
  provider: 'approved-provider',
  subjectId: 'opaque-subject',
  verifiedAt: '2026-11-20T12:00:00.000Z',
  expiresAt: '2026-12-20T12:00:00.000Z'
}
const consent = {
  accepted: true,
  sessionId: 'session-123',
  policyVersion: '2026-11',
  recordedAt: '2026-11-21T11:59:00.000Z'
}
const eligible = {
  sessionId: 'session-123',
  firstAgeAssurance: age,
  secondAgeAssurance: age,
  firstConsent: consent,
  secondConsent: consent,
  moderationReady: true,
  now
}

test('allows only when both participants have current age assurance and consent', () => {
  assert.deepEqual(evaluateCallAccess(eligible), { allowed: true, reason: 'ELIGIBLE' })
})

test('denies if either participant lacks provider-verified age assurance', () => {
  assert.equal(evaluateCallAccess({ ...eligible, secondAgeAssurance: null }).allowed, false)
})

test('denies expired age assurance', () => {
  const expired = { ...age, expiresAt: '2026-11-20T12:00:00.000Z' }
  assert.equal(evaluateCallAccess({ ...eligible, firstAgeAssurance: expired }).reason,
    'BOTH_PARTICIPANTS_MUST_BE_VERIFIED_18_PLUS')
})

test('denies consent for a different session', () => {
  const stale = { ...consent, sessionId: 'another-session' }
  assert.equal(evaluateCallAccess({ ...eligible, secondConsent: stale }).reason,
    'BOTH_PARTICIPANTS_MUST_CONSENT')
})

test('denies when safety operations are unavailable', () => {
  assert.equal(evaluateCallAccess({ ...eligible, moderationReady: false }).reason,
    'SAFETY_OPERATIONS_UNAVAILABLE')
})

test('denies missing session identifiers', () => {
  assert.equal(evaluateCallAccess({ ...eligible, sessionId: '' }).reason, 'INVALID_SESSION')
})
