# VideoChat18

Starter frontend for a proposed adults-only video-chat service.

## Run locally

```bash
npm install
npm run dev
```

## Current status

- Russian-language 18+ onboarding / access-gate screen.
- No face photos, identity documents, or biometric data are collected by this prototype.
- Registration and matchmaking are intentionally unavailable.
- A Vercel serverless status endpoint reports age assurance as unavailable and denies access by default.
- No accounts, matchmaking, video transport, age-assurance provider, or moderation backend is connected.

## Required before any real launch

1. Integrate a reputable age-assurance provider. Use server-verified results, liveness / anti-spoofing, and a clear fail-closed policy. A selfie or face-age estimate alone is not proof of age.
2. Enforce access on the server. Never trust a client-side age flag or a browser-only check.
3. Minimize sensitive data. Avoid retaining raw face images or identity documents unless strictly necessary; define purpose, retention, deletion, security, and consent.
4. Provide clear, revocable consent before calls, plus block/report controls, active moderation, abuse response, and rate limits.
5. Add privacy notices, secure authentication, incident handling, and jurisdiction-specific legal review.
6. Keep all video and matching features disabled until age assurance and safety controls have been independently tested.

See [SAFETY.md](./SAFETY.md) for the release-blocking age assurance, consent, moderation, and privacy checklist.\n\nThis repository is a UI prototype, not a production-ready adult service.
