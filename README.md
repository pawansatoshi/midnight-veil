# Veil — Privacy-Preserving Credentials

Veil is a Midnight-native privacy-credential product for proving eligibility without repeatedly exposing the underlying personal data.

## Product thesis

Most eligibility workflows ask for the data behind an answer. Veil flips that model: a verifier asks for a precise claim, the user proves it from private credentials, and the verifier receives only the minimum permitted result.

> **Prove the claim. Keep the data.**

## Complete product journey

`Verifier request → Private credential → Policy → Private computation → ZK proof → Midnight verification → Minimal disclosure → Reuse → Expiry / revocation`

The repository is being built as a complete product, not a landing page or visual-only demo.

## Hackathon target

Primary target: Brainwave 2026 — Midnight Track. The published track requires a full-stack application using the Midnight ecosystem meaningfully, a smart contract deployed on Midnight Preview or PreProd, a working demonstration, and clear documentation. Verify the current Devpost deadline and rules immediately before submission.

## Product surfaces

### User / prover
- Private credential profile
- Eligibility policy selection
- Proof preparation
- Proof status
- Expiry / revocation state
- Privacy explanation

### Verifier
- Create a precise verification request
- Request only the required predicate
- Inspect verification status
- See minimal permitted claim metadata
- Distinguish valid / expired / revoked / unknown

### Midnight layer
- Compact smart contract
- Private inputs and public state separation
- ZK proof generation
- Wallet/DApp integration
- Preview/PreProd deployment
- Real transaction and state verification

## Current implementation status

The repository currently contains the product foundation, responsive UI, verifier workflow foundation, Compact contract boundary, roadmap, architecture and CI/test scaffolding.

**Important:** the current browser UI does not claim a fake Midnight wallet connection, fake ZK proof, fake transaction, or fake on-chain verification. Local proof references are explicitly labeled as previews until the real Midnight toolchain is connected.

Real network deployment, generated Compact artifacts, wallet integration and on-chain verification remain engineering gates, not claims of completion.

## Repository structure

- `app/` — responsive product UI and verifier workflow
- `contracts/` — Compact smart-contract source
- `docs/` — architecture, roadmap and verification checklist
- `.github/workflows/` — CI

## Development

The UI is a dependency-light Vite application. Install Node.js 22+, then:

```bash
npm install
npm run dev
npm run build
npm test
```

For Midnight contract work, use the current official compatibility matrix and documentation, compile the Compact source, generate managed artifacts, and integrate the generated contract/prover/verifier interfaces before attempting network deployment.

## Security principles

- Never store raw identity/profile data on-chain.
- Never place wallet seeds or secrets in frontend code.
- Treat proofs and commitments as scoped credentials rather than permanent identity identifiers.
- Keep sensitive profile state local/private.
- Make disclosure explicit and minimal.
- Never represent simulated blockchain state as real state.

## Verification status

No contract address, transaction hash, network deployment, ZK proof or wallet connection is claimed as real until independently verified on the target Midnight network.

## Completion standard

Veil is GREEN only when the complete user + verifier journey works with real Midnight integration and the applicable security, accessibility, responsive, performance, CI, deployment and clean-room verification gates pass.
