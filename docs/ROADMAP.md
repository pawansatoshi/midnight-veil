# Veil — Complete Product Roadmap

## Product North Star

Veil is a reusable privacy-credential and verification layer: a person proves a specific eligibility claim without repeatedly exposing the underlying personal data.

Core promise:

> Prove the claim. Keep the data.

## Winning product journey

`Verifier request → Private credential profile → Policy selection → Private computation → ZK proof → Midnight verification → Minimal disclosure → Reusable credential → Expiry / revocation`

The product must work as a complete user + verifier workflow, not as a landing page or visual demo.

---

# Phase 0 — Research, Rules & Feasibility

### Objectives
- Verify the current Midnight ecosystem, tooling and compatibility matrix.
- Verify the exact active hackathon/track rules, deadline and eligibility before submission.
- Map judging criteria to product requirements.
- Validate that every critical Midnight claim is supported by current official documentation.
- Identify $0/free-tier requirements, card requirements and required external accounts.

### Acceptance criteria
- Current official Midnight documentation checked.
- Current hackathon rules checked.
- No stale toolchain version treated as authoritative.
- Unknown requirements explicitly marked UNKNOWN.

**Status: COMPLETE for research baseline; re-check immediately before final submission.**

---

# Phase 1 — Product Foundation

### Objectives
Build the complete core product experience and distinctive identity.

### Delivered / required
- Product identity: Veil
- Positioning: prove eligibility, not identity
- Privacy-first product narrative
- Responsive application shell
- Private credential/profile concept
- Policy selection
- Age policy
- Income policy
- Residency policy
- Proof result UX
- Local activity trail
- Privacy/security explanation

### Acceptance criteria
A first-time user understands the value and can navigate the primary proof journey without developer assistance.

**Status: FOUNDATION COMPLETE.**

---

# Phase 2 — Private Credential Vault

### Objective
Turn Veil from a one-off proof screen into a reusable privacy credential product.

### Build
- Private credential profile
- Credential attributes stored locally/private
- Credential creation/update flow
- Attribute validation
- Credential versioning where needed
- Explicit disclosure controls
- Credential status
- Secure local persistence
- Clear separation between private inputs and public outputs

### Acceptance criteria
Sensitive attributes are never written to the public ledger and the UI clearly communicates what remains private.

**Status: IN PROGRESS.**

---

# Phase 3 — Verifier Request Marketplace / Inbox

### Objective
Create the second half of the product: the verifier can request a precise claim instead of requesting the user's raw documents.

### Build
- Verifier workspace
- Create verification request
- Policy builder
- Age/income/residency predicates
- Multi-condition policy where technically appropriate
- Request identifier
- Request status
- User-facing pending request
- Accept / reject disclosure request
- Verification result
- Minimal disclosure display

### Acceptance criteria
A verifier can request `income >= threshold` or another supported policy and the user can approve a proof without exposing the underlying value.

**Status: NOT YET IMPLEMENTED.**

---

# Phase 4 — Real Midnight / Compact Integration

### Objective
Replace all simulated/local proof behavior with actual Midnight functionality.

### Required stack
- Current compatible Compact compiler/language
- Generated Compact managed artifacts
- Current Midnight.js packages
- Supported DApp/wallet connector
- Lace wallet
- Proof generation infrastructure
- Midnight Preview or PreProd
- Blockchain/indexer access as required by the current SDK

### Build
1. Pin the current compatible versions from official Midnight documentation.
2. Compile `contracts/veil.compact`.
3. Fix compiler/type/circuit errors using root-cause analysis.
4. Generate managed contract/prover/verifier artifacts.
5. Integrate generated artifacts into the application.
6. Add real wallet connection.
7. Add real network detection.
8. Add proof generation.
9. Add transaction construction/submission.
10. Add confirmation state.
11. Read actual public contract state.
12. Independently verify a transaction.

### Hard rule
No fake proof, fake transaction hash, fake contract address, fake wallet connection or simulated blockchain state may be represented as real.

### Acceptance criteria
- Contract compiles with the current supported toolchain.
- Real proof is generated.
- Real transaction reaches supported Midnight network.
- Contract state can be independently read.
- Evidence identifies network, contract and transaction.

**Status: BLOCKED ON EXECUTION ENVIRONMENT / TOOLCHAIN ACCESS; source boundary exists.**

---

# Phase 5 — Real Verification & Reusable Proofs

### Objective
Make the proof useful after generation.

### Build
- Verifier reads actual public state.
- Scoped proof/claim identifier.
- Verification status.
- Proof metadata minimization.
- Expiration.
- Revocation.
- Revoked proof cannot be presented as valid.
- Clear valid/expired/revoked/unknown states.

### Acceptance criteria
A verifier can independently determine whether a proof is currently valid without obtaining the user's private profile.

**Status: NOT YET IMPLEMENTED.**

---

# Phase 6 — Security & Privacy Hardening

### Build
- Private/public state review
- Authorization review
- Proof replay considerations
- Subject binding
- Commitment uniqueness
- Expiry/revocation semantics
- Input validation
- XSS/injection review
- Dependency vulnerability scan
- Secret scan
- Environment-variable review
- Client-side secret review
- Contract negative tests
- Privacy leakage review
- Error information leakage review
- Safe local persistence

### Acceptance criteria
No known critical privacy or security defect remains; negative tests demonstrate that invalid policies cannot produce valid claims.

**Status: NOT YET COMPLETE.**

---

# Phase 7 — Complete UX / Responsive / Accessibility

### Build
- Full user workflow
- Full verifier workflow
- Onboarding
- Loading states
- Empty states
- Success states
- Validation errors
- Network errors
- Retry
- Unauthorized state
- Expired proof
- Revoked proof
- Offline/degraded state where applicable
- Keyboard navigation
- Focus management
- Accessible names
- Contrast
- Screen-reader semantics
- Reduced motion
- Touch targets
- 320/360/375/390/412/430px checks
- Tablet checks
- Desktop checks
- No unintended horizontal overflow

### Hard rule
A mobile CSS overflow or unusable mobile workflow is a blocking defect.

**Status: FOUNDATION COMPLETE; FULL QA NOT YET COMPLETE.**

---

# Phase 8 — Performance / Reliability / Observability

### Build
- Production build optimization
- Asset optimization
- Bundle review
- API/proof latency review
- Loading performance
- Core Web Vitals where applicable
- Runtime error visibility
- Health checks
- Failure diagnostics
- Retry/backoff where appropriate
- Graceful dependency failure

### Acceptance criteria
Critical user flow remains usable under expected latency/failure conditions and production failures are diagnosable.

**Status: NOT YET COMPLETE.**

---

# Phase 9 — CI / Testing / Regression

### Build
- Unit tests
- Contract tests
- Integration tests
- Browser/E2E tests
- Negative tests
- Privacy tests
- Mobile responsive tests
- Accessibility checks
- Build/type/lint checks
- Dependency/security checks
- Secret scanning
- CI verification against final commit

### Acceptance criteria
The final relevant commit is the commit actually tested by CI, and failures are fixed rather than suppressed.

**Status: FOUNDATION STARTED; FULL SUITE NOT COMPLETE.**

---

# Phase 10 — Deployment & Live Verification

### Build
- Deploy frontend
- Deploy required backend/proof infrastructure
- Deploy Compact contract to required Midnight network
- Configure network metadata
- Verify deployment
- Verify runtime configuration
- Verify critical routes
- Verify wallet connection
- Verify proof flow
- Verify verifier flow
- Verify actual transaction
- Verify actual contract state

### Acceptance criteria
`Repository HEAD = pushed commit = CI commit = deployed commit` and live user journey works.

**Status: NOT YET COMPLETE.**

---

# Phase 11 — Winner-Level Demo & Judge Optimization

### Demo narrative
1. Show the real-world problem.
2. Show the sensitive data that normally must be exposed.
3. Create a verifier request.
4. Show the user approving a precise claim.
5. Generate the real ZK proof.
6. Show Midnight transaction/state evidence.
7. Show verifier result.
8. Demonstrate that the underlying data remains hidden.
9. Demonstrate expiry/revocation.
10. Explain why Midnight is essential.

### Judge optimization
Weight effort toward the active track's judging criteria:
- Innovation & Creativity
- Technical Implementation
- Impact & Problem Solving
- UX & Design
- Scalability & Feasibility
- Presentation & Demo

### Acceptance criteria
The complete core demo is reliable, understandable within approximately two minutes, and backed by real evidence.

**Status: NOT YET COMPLETE.**

---

# Phase 12 — Submission & Clean-Room Verification

### Build
- Final README
- Setup instructions
- Architecture documentation
- Privacy model
- Contract/network evidence
- Demo URL
- Repository URL
- Final commit SHA
- Deployment evidence
- Screenshots/video where required
- Hackathon submission copy
- License/attribution review
- Originality review
- Fresh-environment setup test
- Fresh-user product test
- Final regression test

### Final gate
Every major claim must map to evidence:

`CLAIM → ACTUAL RESULT → SOURCE/EVIDENCE → FINAL COMMIT → STATUS`

**Status: NOT YET COMPLETE.**

---

# Product Completeness Gate

Veil is NOT complete until this journey works:

`Verifier Request → User Profile → Policy → Private Computation → Real ZK Proof → Midnight Transaction → Independent Verification → Minimal Disclosure → Reuse → Expiry/Revocation`

A polished landing page, UI shell, local commitment or mock proof does not satisfy this gate.

# GREEN Definition

GREEN requires all applicable conditions to be verified:

- Complete product journey
- Real Midnight integration
- Real Compact compilation
- Real ZK proof
- Real supported-network transaction
- Real contract state verification
- Verifier workflow
- Expiry/revocation
- Security checks
- Privacy leakage review
- Tests
- CI
- Deployment
- Live smoke test
- Mobile QA
- Accessibility review
- Performance review
- Documentation
- Final clean-room verification
- No blocking regression

If any applicable condition is RED, Veil is NOT GREEN.
