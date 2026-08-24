# Veil roadmap

## Phase 1 — Product foundation
- Product identity: Veil
- Positioning: prove eligibility, not identity
- Full responsive workspace
- Policy selection
- Private profile model
- Proof result and local audit trail

## Phase 2 — Midnight integration
- Pin compatible Compact toolchain version from the current Midnight compatibility matrix.
- Compile `contracts/veil.compact`.
- Generate managed artifacts.
- Add Midnight.js providers and wallet connector.
- Add Lace connection and network status.
- Add proof generation and transaction submission.
- Add Preview/Preprod contract deployment.

## Phase 3 — Verifier experience
- Create scoped verification links/claims.
- Verify commitment status from public chain data.
- Show only permitted claim metadata.
- Add expiration and revocation.

## Phase 4 — Security and quality
- Contract unit tests.
- Browser flow tests.
- Mobile responsive verification at narrow widths.
- Accessibility review.
- Dependency and secret scanning.
- Error/retry/offline states.
- Live smoke test.

## Phase 5 — Hackathon delivery
- Reproducible README.
- Verified contract/network evidence.
- Demo path under two minutes.
- Judge-facing explanation of why Midnight is essential.
- Final clean-room verification.

## Acceptance criteria

A release is not GREEN until the applicable requirements are backed by evidence. In particular, a Midnight submission must demonstrate meaningful Midnight use, a working full-stack application, and a contract deployment on Preview or Preprod as required by the selected track.
