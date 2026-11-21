// Server-only policy helper. Callers must load every argument from trusted,
// authenticated server-side storage; never pass request-body age or consent flags.
function hasValidAgeAssurance(record, now) {
  if (!record || record.status !== 'verified') return false
  if (typeof record.provider !== 'string' || !record.provider) return false
  if (typeof record.subjectId !== 'string' || !record.subjectId) return false
  if (!Number.isFinite(Date.parse(record.verifiedAt))) return false
  if (!Number.isFinite(Date.parse(record.expiresAt))) return false
  return Date.parse(record.expiresAt) > now
}

function hasCurrentConsent(record, sessionId) {
  return Boolean(
    record &&
    record.accepted === true &&
    record.sessionId === sessionId &&
    typeof record.policyVersion === 'string' &&
    record.policyVersion.length > 0 &&
    Number.isFinite(Date.parse(record.recordedAt))
  )
}

/**
 * Evaluate whether a one-to-one call may be created.
 * This function does not authenticate users, verify provider signatures, persist
 * consent, or create calls. Those must happen in trusted server-side services.
 */
export function evaluateCallAccess({
  sessionId,
  firstAgeAssurance,
  secondAgeAssurance,
  firstConsent,
  secondConsent,
  moderationReady,
  now = Date.now()
}) {
  if (!sessionId || typeof sessionId !== 'string') {
    return { allowed: false, reason: 'INVALID_SESSION' }
  }
  if (!hasValidAgeAssurance(firstAgeAssurance, now) ||
      !hasValidAgeAssurance(secondAgeAssurance, now)) {
    return { allowed: false, reason: 'BOTH_PARTICIPANTS_MUST_BE_VERIFIED_18_PLUS' }
  }
  if (!hasCurrentConsent(firstConsent, sessionId) ||
      !hasCurrentConsent(secondConsent, sessionId)) {
    return { allowed: false, reason: 'BOTH_PARTICIPANTS_MUST_CONSENT' }
  }
  if (moderationReady !== true) {
    return { allowed: false, reason: 'SAFETY_OPERATIONS_UNAVAILABLE' }
  }
  return { allowed: true, reason: 'ELIGIBLE' }
}
