# Veil architecture

## Product

Veil is a privacy-preserving eligibility layer. A user keeps a sensitive profile private and produces a scoped proof for a verifier.

### Core flow

`private profile → policy → Compact circuit → ZK proof → commitment + claim → verifier`

The verifier should receive only the minimum information needed to make the decision.

## Trust boundaries

### Private
- age / income / residency attributes
- local private state
- wallet secrets
- proof-generation inputs

### Public
- proof/claim commitment
- verification status
- non-sensitive policy metadata
- contract address and network metadata

Raw profile data must never be written to the public ledger.

## On-chain boundary

`contracts/veil.compact` contains the intended Compact circuits for age, income and residency policies plus revocation. It is the canonical privacy boundary. Generated managed artifacts must be produced with the current Midnight Compact toolchain before deployment.

## Frontend

The current UI is dependency-light and intentionally works as a product shell while the generated Midnight bindings and Lace connector are wired to a target network. The UI never pretends that its browser-generated commitment is a network-confirmed proof.

## Network integration plan

1. Compile the Compact contract using the current compatible Midnight toolchain.
2. Generate managed contract/prover/verifier artifacts.
3. Connect the application to Midnight.js and the supported Lace DApp connector.
4. Run a proof server using the network-compatible release.
5. Deploy to Midnight Preview or Preprod.
6. Record the verified contract address and network in runtime configuration.
7. Execute a real proof and revocation transaction.
8. Verify the resulting public state independently.

## Why Midnight

Midnight's model supports private data processing while exposing a verifiable result. That is the core product requirement, not an ornamental blockchain integration.
