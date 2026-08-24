# Veil — Implementation & Verification Checklist

Unchecked items are NOT complete. A feature is complete only when implementation and verification evidence exist.

## Product
- [x] Product name: Veil
- [x] Privacy-preserving eligibility thesis
- [x] Age policy UX
- [x] Income policy UX
- [x] Residency policy UX
- [x] Private profile concept
- [x] Proof result UX
- [x] Local activity trail
- [ ] Private credential vault lifecycle
- [ ] Credential update/versioning
- [ ] Verifier workspace
- [ ] Verification request creation
- [ ] User request inbox
- [ ] Request accept/reject
- [ ] Reusable credential/proof lifecycle
- [ ] Expiry
- [ ] Revocation UI
- [ ] Real on-chain revocation
- [ ] Independent verifier

## Midnight integration
- [ ] Verify current official compatibility matrix
- [ ] Pin current compatible Compact version
- [ ] Compile contract
- [ ] Generate managed artifacts
- [ ] Install current Midnight.js packages
- [ ] Configure current supported DApp connector
- [ ] Configure proof-generation infrastructure
- [ ] Connect Lace
- [ ] Detect target network
- [ ] Deploy contract to required Preview/PreProd network
- [ ] Execute real proof transaction
- [ ] Confirm real transaction
- [ ] Read real contract state
- [ ] Independently verify transaction
- [ ] Record verified contract address
- [ ] Record verified network
- [ ] Record verified transaction evidence

## Privacy / security
- [x] No secrets in source
- [x] Privacy boundary documented
- [ ] Subject binding review
- [ ] Commitment uniqueness review
- [ ] Proof replay analysis
- [ ] Expiry semantics review
- [ ] Revocation semantics review
- [ ] Contract negative tests
- [ ] Dependency vulnerability scan
- [ ] Secret scan
- [ ] Authorization review
- [ ] Public/private state review
- [ ] Privacy leakage review
- [ ] Error information leakage review
- [ ] Local persistence security review

## UX / responsive / accessibility
- [x] Responsive foundation
- [x] Narrow mobile breakpoint
- [x] Empty state
- [x] Result state
- [ ] Full onboarding
- [ ] Verifier workflow
- [ ] Loading states
- [ ] Full error/retry states
- [ ] Unauthorized state
- [ ] Expired state
- [ ] Revoked state
- [ ] Offline/degraded state
- [ ] Keyboard accessibility audit
- [ ] Focus management audit
- [ ] Contrast audit
- [ ] Screen-reader semantics audit
- [ ] Reduced-motion review
- [ ] 320px check
- [ ] 360px check
- [ ] 375px check
- [ ] 390px check
- [ ] 412px check
- [ ] 430px check
- [ ] Tablet check
- [ ] Desktop check
- [ ] Horizontal overflow audit
- [ ] Browser compatibility matrix
- [ ] Visual regression

## Performance / reliability
- [ ] Bundle review
- [ ] Asset optimization
- [ ] Initial-load review
- [ ] Proof/API latency review
- [ ] Runtime error visibility
- [ ] Health checks
- [ ] Failure diagnostics
- [ ] Retry/backoff where appropriate
- [ ] Graceful dependency failure

## Testing / CI
- [x] Basic smoke tests
- [ ] Unit tests
- [ ] Compact contract tests
- [ ] Negative contract tests
- [ ] Integration tests
- [ ] Browser/E2E tests
- [ ] Privacy tests
- [ ] Mobile responsive tests
- [ ] Accessibility checks
- [ ] Typecheck
- [ ] Lint
- [ ] Dependency/security checks
- [ ] Secret scanning
- [ ] CI verified against final commit

## Deployment
- [ ] Frontend deployment
- [ ] Backend/proof infrastructure deployment where required
- [ ] Midnight contract deployment
- [ ] Runtime configuration verification
- [ ] Critical route smoke tests
- [ ] Real wallet connection
- [ ] Real proof flow
- [ ] Real verifier flow
- [ ] Real transaction verification
- [ ] Live contract-state verification
- [ ] HEAD/CI/deployed commit consistency

## Hackathon delivery
- [x] README foundation
- [x] Architecture document
- [x] Complete roadmap
- [x] Hackathon execution plan foundation
- [ ] Final architecture documentation
- [ ] Verified contract/network evidence
- [ ] Demo under approximately two minutes
- [ ] Judge-facing Midnight differentiation
- [ ] Fresh-environment reproduction
- [ ] Final demo recording
- [ ] Submission copy
- [ ] Final clean-room verification
- [ ] Final GREEN

## Hard rules

1. Never mark simulated functionality as real.
2. Never invent a contract address or transaction hash.
3. Never claim a deployment without independent evidence.
4. Never suppress tests or security checks to obtain GREEN.
5. A mobile overflow defect is blocking.
6. A privacy leakage defect is blocking.
7. Missing core user journey is blocking.
8. Missing required Midnight integration is blocking.
9. Final GREEN requires evidence, not confidence.
