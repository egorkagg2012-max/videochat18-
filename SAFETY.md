# Safety and consent requirements

This is a launch-blocking checklist, not a claim that these controls are already implemented.

## Non-negotiable access rules

- Deny access by default. No client-side checkbox, date of birth, selfie, or editable browser state can grant adult access.
- Require an age-assurance provider that returns a verifiable server-side result, with liveness / anti-spoofing and a documented fallback for uncertain cases.
- Do not expose matching, messaging, or live video routes until the server has verified the account's age status.
- Re-check provider webhooks: verify signatures, timestamps, replay protection, account binding, and provider transaction IDs.
- Store the minimum result needed (for example, verified / not verified, provider reference, and expiry); avoid storing raw face images or identity documents.

## Consent and user control

- Make every call opt-in. Show a clear description of the call before joining.
- Require affirmative consent from both participants before a call connects; either person can end it immediately.
- No recording, screenshots, redistribution, coercion, threats, or sharing another person's identifying information.
- Provide visible leave, block, and report controls throughout every call.
- Blocking must prevent future matching and contact between the accounts.
- Reports need a staffed review process, evidence-handling rules, escalation, and an appeal path. Do not promise a report button until reports reach a monitored queue.

## Moderation and privacy

- Publish plain-language Terms, Privacy Notice, retention/deletion schedule, and contact details before collecting account data.
- Use abuse rate limits, bot protection, incident response, and moderator escalation.
- Define prohibited conduct and enforce it consistently. Never allow anyone under 18 to use the service.
- Complete a jurisdiction-specific legal and privacy review before launch. The operator must confirm applicable age-assurance, privacy, consumer, and online-safety obligations.

## Release gates

A production launch is blocked until all of the following are tested end to end:
1. Age assurance passes, fails, expires, and handles provider outages safely.
2. A verified account can consent to a call; an unverified account cannot reach any call or matching endpoint.
3. Either participant can leave; block and report actions work and are monitored.
4. Data deletion, retention, security logging, and incident response are verified.
5. Independent security and moderation readiness reviews are complete.

Current state: prototype only. Age assurance, accounts, matching, video, consent enforcement, block/report, and moderation are not connected.
