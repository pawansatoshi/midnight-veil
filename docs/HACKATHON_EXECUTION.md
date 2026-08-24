# Hackathon execution gates

## Current target

Primary target currently tracked: Brainwave 2026 – Midnight Track.

The published Devpost page lists a deadline of Aug 27, 2026 at 7:00am IST and evaluates Innovation & Creativity (25%), Technical Implementation (25%), Impact & Problem Solving (20%), User Experience & Design (15%), Scalability & Feasibility (10%), and Presentation & Demo (5%). It also states that projects without functional Midnight integration may not qualify. Verify the live rules immediately before submission. citeturn0search1

## Winner-oriented priorities

1. Real Midnight integration
2. Clear privacy problem and differentiated product
3. Complete end-to-end user + verifier journey
4. Working Compact/ZK proof flow
5. Strong, reproducible demo
6. Polished responsive UX
7. Evidence-backed deployment and verification
8. Concise technical explanation

## Mandatory technical gates

- Use the current compatible Compact release, not a stale version.
- Compile the contract with the current Compact toolchain.
- Generate the actual managed artifacts required by the current SDK.
- Integrate the current Midnight.js packages.
- Integrate the supported Lace wallet/DApp connector.
- Run the compatible proof server.
- Deploy to the target supported Midnight environment.
- Execute a real proof transaction.
- Independently verify resulting state.
- Never present a local/browser-generated random commitment as a ZK proof.

Midnight's current developer guidance identifies Compact, Midnight.js, wallet/DApp connector SDKs and a local proof server as the core development tooling. Current package versions must be taken from the live compatibility matrix rather than copied from an old tutorial. citeturn0search5turn0search3

## Privacy gates

- Raw private profile data must remain private.
- Public ledger state must contain only intentionally disclosed information and commitments/status required by the product.
- Disclosure must be explicit.
- Do not leak witness/private state through public ledger declarations.
- Verify the circuit's public/private boundary.
- Test negative cases and policy failures.
- Add expiry/revocation where implemented.

Midnight's current documentation describes private data entering through witness functions, remaining on the user's device, and reaching the chain through proofs/commitments; the compiler is designed to prevent unintended witness disclosure. citeturn0search5turn0search2

## Product completeness gate

The submission is not complete if it only contains:
- landing page
- dashboard mockup
- fake proof animation
- static blockchain address
- simulated wallet connection
- hardcoded verification result

Required end-to-end journey:

`verifier request -> user private profile -> policy selection -> real proof -> real transaction/state -> verifier validation -> minimal disclosure -> expiry/revocation`

## Judge demo

Target demo sequence:

1. Introduce the privacy problem in one sentence.
2. Show verifier requesting a specific predicate.
3. Show user's private profile without exposing it.
4. Generate the real proof.
5. Show successful verification.
6. Show what the verifier cannot see.
7. Show Midnight transaction/contract evidence.
8. Show revocation/expiry.
9. Explain why the same architecture can support multiple eligibility policies.

Keep the demo deterministic and short. Do not depend on exploratory navigation during judging.

## Final submission evidence

Before submission capture and verify:
- repository URL
- exact final commit SHA
- build result
- tests
- Compact compilation result
- contract address
- target network
- transaction hash(es)
- proof verification result
- wallet connection evidence
- deployed application URL
- mobile screenshots/video
- README setup instructions
- architecture diagram
- privacy model
- demo video if required

No evidence may be fabricated.
