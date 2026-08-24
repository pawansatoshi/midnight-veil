# Veil — Product Strategy

## Product thesis

Veil is a reusable privacy-credential layer for proving eligibility without repeatedly exposing the underlying personal data.

The product is not a generic ZK demo. Its core job is to let a person keep a private profile while satisfying narrowly scoped verification requests from services.

## The real-world problem

Eligibility workflows commonly demand more personal information than the verifier actually needs. A service may only need to know that someone is over 18, resides in an allowed jurisdiction, or exceeds an income threshold, but conventional verification often exposes the underlying document or exact attribute.

Veil changes the interaction from:

`show the data -> trust the data -> store the data`

to:

`keep the data private -> prove the policy -> disclose the minimum result`

## Product surface

### User

1. Private Credential Vault
2. Proof Policy Requests
3. Proof Generation
4. Proof History
5. Expiry / Revocation
6. Consent and disclosure controls
7. Wallet / network status

### Verifier

1. Create a verification request
2. Define policy requirements
3. Receive a proof/claim
4. Verify public status
5. See only permitted claim metadata
6. Handle expiry/revocation

## Example policies

- Age >= 18
- Income >= $50,000
- Residency = permitted jurisdiction
- Multiple predicates where supported by the circuit design

The initial release should prioritize a small number of demonstrably working policies rather than a large catalogue of superficial policies.

## Killer demo

A verifier requests `income >= $50,000`.

The user clicks **Prove**.

The private income remains private.

Veil generates a real Midnight-backed proof.

The verifier receives:

`Verified: income requirement satisfied`

and does not receive the exact income.

The demo then shows the verified Midnight transaction/contract state and a revocation or expiry path.

## Why Midnight is essential

Midnight's Compact model is specifically designed for privacy-preserving smart contracts with private local state and public ledger state. Compact circuits generate ZK proofs that enforce the contract conditions while shielding private inputs. Midnight.js provides the TypeScript client layer and Lace provides wallet/DApp interaction. These are core dependencies of the product, not decorative integrations. citeturn0search2turn0search5

## Differentiation

Veil differentiates through a complete workflow rather than a single proof:

`private credential -> policy request -> proof -> minimal disclosure -> verifier -> expiry/revocation`

The strongest product framing is reusable privacy credentials, not simply "age verification."

## Scope discipline

Do not attempt to become a universal identity provider in the first release. Build the smallest complete workflow that demonstrates reusable privacy-preserving eligibility with a real Midnight contract and a credible verifier experience.
