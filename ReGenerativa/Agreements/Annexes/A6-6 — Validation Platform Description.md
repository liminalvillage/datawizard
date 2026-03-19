---
title: A6-6 — Validation Platform Description
type: annex
annex_ref: A6-6
parent_agreement: Agreement 6 — Partnership
created: '2026-03-17'
updated: '2026-03-17'
status: template
tags:
  - annex
  - ReGenerativa
  - partnership
  - digital-infrastructure
  - contribution-ledger
---
*Annex 6 to the [[Agreement 6 — Partnership|Partnership Agreement]]. Describes the technical architecture of the Contribution Ledger and validation platform referenced throughout the Agreement and the General Terms (GT-3). Forms an integral part of the Agreement. This document reflects the current state of the platform — it is a living document to be updated as the architecture evolves.*

*Note: The Contribution Ledger is under active development. Until the full platform is operational, interim tracking methods (shared spreadsheets, signed records) may be used per mutual agreement of the Partners. This Annex describes the target architecture.*

---

## 1. Purpose

The Contribution Ledger is the digital infrastructure that enables the Partnership Framework to function as a transparent, decentralised, contribution-based system. It serves three functions:

1. **Recording** — capturing contributions (hours, milestones, assets, funding) as they occur
2. **Validating** — confirming that contributions meet agreed criteria before they count toward distribution
3. **Calculating** — computing each Partner's dynamic share of Net Project Revenue based on cumulative validated contributions

It is the technical expression of the holonic principle: each Partner is autonomous in logging their own contributions, but each contribution is subject to peer validation before becoming economically relevant — ensuring coherence and preventing unilateral manipulation.

---

## 2. Core Components

### 2.1 Contribution Ledger (On-Chain Records)

**Technology:** [e.g. Ethereum / Polygon / Hyperledger Fabric / other — specify when decided]

**What is stored on-chain:**
- Pseudonymised Partner identifier (not name or personal data)
- Project code
- Contribution type
- Quantity (hours / milestone ID / value units)
- Timestamp of logging
- Validation status (pending / validated / disputed / rejected)
- Validator pseudonymised identifier

**What is NOT stored on-chain:**
- Personal data (names, addresses, contact details) — these remain off-chain per GDPR and GT-5
- Financial amounts (to avoid disclosure of commercially sensitive pricing)
- Client identities

**GDPR compliance:**
- On-chain identifiers are pseudonymised. Mapping to real identities is held off-chain by the Association as data controller (GT-5.2)
- Right to erasure: addressed through cryptographic unlinking per EDPB guidance (GT-3.4)
- Right to rectification: implemented through off-chain correction records

### 2.2 Validation Interface

**Access:** Partners access the platform via authenticated web interface (or mobile app when available)

**Validation workflow:**
1. Partner A logs a contribution (type, quantity, Project code, supporting evidence if required)
2. System notifies assigned validators (per Project Sheet validation rules)
3. Validators review and approve / request clarification / reject within [e.g. 7 days]
4. Upon validation threshold being met, contribution status changes to "Validated"
5. Validated contributions are written to the on-chain ledger

**Dispute workflow:** If a contribution is contested, the system flags it for Partner discussion → two-thirds majority resolution → GT-7 if unresolved

### 2.3 Distribution Calculator

The platform computes each Partner's current share in real time:

```
Partner Share (%) = Partner's Total Validated Contributions (€ equivalent)
                    ─────────────────────────────────────────────────────
                    Total Validated Contributions of All Partners (€ equivalent)
```

Contributions are converted to a common unit (€ equivalent) using the rates in [[A6-5 — Reference Hourly Rates]] or the milestone values in the Project Sheet.

Distribution amounts are calculated by applying Partner shares to Net Project Revenue (after cost waterfall).

### 2.4 Mutual Credit Module (Future)

When operational, the platform will support a mutual credit layer enabling Partners to exchange value within the network without immediate monetary settlement, per GT-3.1. This module is in design phase.

### 2.5 Territorial Mapping (Future)

H3 hexagonal indexing for visualising bioregional assets, hub locations, and ecological conditions. Integration timeline: [TBD].

---

## 3. Interim Arrangements (Until Platform Is Operational)

Until the full platform is live, contributions are tracked using:

☐ **Shared spreadsheet** — maintained by the coordination role, accessible to all Partners. Location: [URL / shared drive]
☐ **Signed contribution records** — each contribution logged and countersigned by at least one other Partner
☐ **Meeting minutes** — contributions and validations confirmed in regular Partner meetings and recorded in minutes

Interim records shall be migrated to the platform upon launch.

---

## 4. Governance of the Platform

- Platform development decisions require simple majority of Partners
- Changes to the validation algorithm or distribution formula require a two-thirds majority and an amendment to this Annex
- The Association acts as data controller for off-chain personal data
- Partners may request an audit of their own contribution records at any time

---

## 5. Evolution of This Document

As the platform is built and deployed, this Annex will be updated to reflect:
- Chosen blockchain / DLT technology
- Smart contract addresses (where applicable)
- API documentation
- Security audit results
- GDPR impact assessment outcomes

Updates require simple majority approval and recording in the Amendment Register of the [[A6-1 — Partner Register]].

---

## Signatures

This Annex forms an integral part of the Partnership Agreement.

**Partner 1:** _________________________  Date: _______

**Partner 2:** _________________________  Date: _______

**Partner 3:** _________________________  Date: _______
