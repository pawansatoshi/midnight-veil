# Veil — Privacy-Preserving Access Proofs

Veil is a Midnight-native privacy product for proving eligibility without exposing the underlying personal data.

## Hackathon target

Primary target: Midnight / Brainwave 2026 Midnight Track. The track requires a full-stack application using Midnight meaningfully, a smart contract deployed on Midnight Preview or Preprod, a working demonstration, and clear documentation.

## Product thesis

Most eligibility workflows ask for the data behind an answer. Veil flips that model: keep the sensitive profile private and publish only the minimum verifiable outcome.

## Core demo

1. Connect a Midnight wallet.
2. Create a private eligibility profile locally.
3. Choose a proof policy such as age, income, residency, or risk threshold.
4. Generate a privacy-preserving proof.
5. Publish only the verification result / commitment.
6. Let a verifier inspect proof status without receiving the underlying profile.
7. Revoke the proof when it is no longer valid.

## Repository structure

- `app/` — responsive product UI
- `contracts/` — Compact smart-contract source
- `docs/` — product, architecture, privacy and verification documentation
- `.github/workflows/` — CI

## Current status

The product foundation and privacy-first UX are implemented. The Compact contract is included as the canonical on-chain boundary. Network deployment and generated Compact artifacts require the current Midnight toolchain, wallet, proof server and a funded Preview/Preprod account; these are intentionally not fabricated in source control.

## Development

The UI is a dependency-light Vite application. Install Node.js 22+, then:

```bash
npm install
npm run dev
npm run build
npm run test
```

For Midnight contract work, use the current Compact toolchain documented by Midnight and regenerate managed artifacts before attempting a network deployment.

## Security principles

- Never store raw identity/profile data on-chain.
- Never place wallet seeds or secrets in frontend code.
- Treat proofs and commitments as scoped credentials, not permanent identity identifiers.
- Keep sensitive profile state local/private.
- Make disclosure explicit and minimal.

## Verification status

No production deployment or on-chain contract address is claimed until it has been independently verified on the target Midnight network.
