# VideoChat18

Starter frontend for an adults-only video-chat service.

## Run locally

```bash
npm install
npm run dev
```

## Current status

- Russian-language onboarding screen.
- Local photo selection and preview (the image is not uploaded anywhere).
- No matchmaking, video transport, accounts, or age verification provider is connected.
- The continue button remains disabled by design.

## Required before any real launch

A photo upload or face-age estimate alone is not reliable proof that a person is 18+. Integrate a reputable age-assurance provider with liveness / anti-spoofing and a clear pass/fail result before granting access. Do not store raw face images unless strictly necessary; document purpose, retention, deletion, security, and consent. Add human review and an appeal path for uncertain results.

Also implement server-side access enforcement, reporting/blocking, active moderation, rate limits, privacy and safety controls, and jurisdiction-specific legal review. Never trust a client-side age flag.

This repository is a UI prototype, not a production-ready adult service.
