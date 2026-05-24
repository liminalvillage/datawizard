---
title: Living Governance Resolutions
type: governance-document
status: active
version: '1.1'
priority: high
maturity: working
created: 2026-05-16
updated: 2026-05-24
tags:
  - governance
  - ReGenerativa
  - living-resolution
  - network-passport
  - eldership
---

# Living Governance Resolutions

*The register of living governance resolutions the constellation explicitly defers to:
the numbers and thresholds the agreements deliberately do not fix in their own text but
require to be "defined by the Association's governance body and published as a living
governance resolution" (A8 Cl 2.2, A8 Cl 4.2, GT-3A.3). This document is internal
governance, not a contract. It operates under the Association's governance powers and
the General Terms. Each resolution is revised by Board / governing-body decision and the
change recorded in [[0.3 Decision Log]]. Source of these initial entries:
[[Constellation Viability Review - 2026-05-16]] (OQ1, OQ2) and
[[Digital Infrastructure Gap Review - 2026-05-16]] (OQ7, OQ9), resolved 2026-05-16 in
[[0.5 Open Questions]].*

---

## How to read this document

Each resolution carries an ID (LGR-n), the clause it serves, the figure or rule, its
basis, its review cadence, and a **status**:

- **Provisional** — a deliberately conservative working figure, set so the network can
  operate and generate the data the final figure needs. The owner / governing body may
  override any provisional figure at any time; doing so is a Decision Log entry, not an
  agreement amendment.
- **Ratified** — confirmed by the governing body; still revisable, but now the network's
  settled position.

LGR-1 was **Ratified** by the vault owner on 2026-05-16. **LGR-2 (Unified Fund
allocation parameters)** is **Provisional** (framework) as of 2026-05-22, with
specific figures awaiting Board ratification. **LGR-3** has been withdrawn; **LGR-4**
remains a **Provisional** scope-bounding resolution. Ratified figures remain revisable
by a Decision Log entry, never an agreement amendment.

---

## LGR-1 — Elder eligibility period (Agreement 8, Clause 2.2)

**Serves.** A8 Cl 2.2: an Elder "must hold, or have held, at least one other agreement
in the constellation for a minimum period defined by the Association's governance body
and published as a living governance resolution."

**Resolution (Ratified).** In addition to the long and substantial contribution record
required by A8 Cl 2.1, a candidate for Eldership must hold, or have held, at least one
other constellation agreement **in good standing for a minimum of five (5) years**,
whether continuous or cumulative across roles.

**Founding-cohort waiver.** To allow the first Elder Council to constitute during the
network's early years, the Association's governing body may, by published resolution,
waive the period down to a minimum of **three (3) years** for contributors who were
active before **1 January 2027**. The waiver is bounded to the founding cohort; it does
not lower the steady-state bar and lapses once the first Council is constituted.

**Basis.** Five years signals sustained, multi-season, cross-cycle contribution -
someone who has contributed across contexts and stayed. The founding-cohort waiver
removes the structural risk that the
Elder Council - the constellation's dissolution backstop (GT-13.5) and amendment-
integrity check - cannot exist for the network's first decade, without diluting the
steady-state standard.

**Review.** Reviewed by the governing body at least every two (2) years against real
contribution-history data; revisable by Decision Log entry.

**Citation.** A8 Cl 2.2 cites this resolution by ID and date (applied 2026-05-16).

**Status.** Ratified - 2026-05-16 (owner). Founding-cohort waiver included.

---

## LGR-2 — Unified Fund allocation parameters (GT-4.6)

**Serves.** GT-4.6: per-holon parameters (NRC rate within 3–10%, cost-coverage target,
discretionary ceiling, shape stiffness) are set by Board resolution (for the
Association holon and network-wide defaults) and by Stewards within their mandate (for
their own holon), held as Living Governance Resolutions. Also serves Agreement 8 §4.2
(Council Operating target) and §5.4(e) (Mission Allocation).

**Resolution (Provisional - framework).** Every holon runs the same shape per GT-4.4
(NRC out → cost-coverage → Steward discretionary → upward overflow). What differs per
holon is the parameter values. Specific figures are deferred to Board ratification;
the following framework applies:

- **Association-holon cost-coverage target** (per GT-4.4(b), Association-holon row):
  - `K_a` - Association legal-entity operating costs (administration, Article 18 CTS
    insurance, fiscal-hosting platform fees, network-level structural costs), set
    by Board.
- **Hub / Project / Venture cost-coverage target** (per GT-4.4(b)):
  - `C` - set per holon at Steward appointment, recorded in the holon's mandate
    document (Hub DNA / Project Sheet / Venture Sheet); includes Steward
    activity-cost reimbursement under A3 §8–§9 and GT-12.
- **Elder Council cost-coverage target** (per GT-4.4(b), Elder Council row):
  - `O_e` - Elder Council Operating target (governance operating costs: convening,
    deliberation, documentation), set by Board in consultation with the Council.
- **Discretionary ceiling** (per GT-4.4(c)):
  - `D` - per-holon discretionary deployment ceiling, recommended value `α·C` where
    `α` is the shape stiffness (default 1). The Association holon's `D_a` and per-Hub
    `D` are set by Board / Stewards respectively. The Elder Council's discretionary
    bucket is uncapped (allocator of last resort under A8).
- **Shape stiffness** (per GT-4.6):
  - `α` - recommended value 1, shared across scales; may be split into `α_assoc` and
    `α_holon` if scale-specific stiffness is preferred by the Board.
- **Delegated-authority ceiling** (per GT-4.5(c)):
  - Single-signature ceiling - EUR amount per transaction, set by Board;
  - Supermajority threshold for Council Allocation - EUR amount triggering
    full-Council supermajority, set by Board.

**Basis.** The Unified Fund's self-similar allocation shape (GT-4.4) requires
parameters to operate. Setting these as Living Governance Resolutions allows them to
evolve without amending the agreements. Specific figures are deferred to Board
ratification, informed by initial operational data and integral-regeneration
projections. The Council target `O_e` is set with the Council itself to honour its A8
mandate.

**Review.** Reviewed by the Board at least annually alongside the *bilancio sociale*;
revisable by Decision Log entry at any time.

**Citation.** GT-4.6 and the operative clauses (GT-4.3, GT-4.4, GT-4.5) cite this
resolution. Agreement 8 §4.2 and §5.4(e) cite this resolution for the Council
Operating target.

**Status.** Provisional (framework) - 2026-05-22. Specific figures awaiting Board
ratification.

---

## LGR-4 — GT-3.1 infrastructure: minimal v1 scope (bounds the commitment)

**Serves.** GT-3.1 commits the Association to maintain, beyond the Contribution Ledger,
(a) a resource-allocation system, (b) a mutual-credit system, and (c) territorial
mapping (H3). GT-3.2 frames these as the network's "cognitive glue". All three are
named as committed infrastructure but were wholly unspecified, creating an unbounded
obligation (OQ9).

**Resolution.** Until each system enters build with a full specification, its committed
scope is bounded to the following v1 definitions. Anything beyond v1 (notably the
GT-3.2 "autonomous agents coordinate plans and allocate resources" language) is
aspirational direction, **not** a present obligation.

- **Resource-allocation system — v1.** A shared, network-readable register of shared
  spaces, tools, and finances with request and grant status. Out of scope for v1:
  automated optimisation, autonomous allocation agents, predictive scheduling.
- **Mutual-credit system — v1.** A recorded multilateral credit balance between
  participants enabling deferred reciprocal exchange, reconcilable toward zero
  network-wide. Out of scope for v1: convertibility to fiat, interest, external
  clearing, negative-balance enforcement.
- **Territorial mapping (H3) — v1.** Visualisation of hubs and bioregions on H3
  hexagonal cells. (The codebase already stores the H3 cell in settings.) Out of scope
  for v1: agent-driven or predictive allocation over the map.

**Recommendation flagged, not executed.** Consider amending GT-3.1 from "maintains" to
"is developing" at the next Constellation Integrity Review (A8-1 §5.2) so the General
Terms describe a roadmap, not a present-tense obligation. This is a GT change and ripples
across all agreements — flagged for explicit human review, not applied here.

**Review.** Each system's v1 scope is replaced by a full specification when it enters
build, recorded in the Decision Log. See [[Digital Infrastructure Gap Review - 2026-05-16]]
build step 6.

**Status.** Provisional (scope-bounding) — 2026-05-16.

---

*Resolutions are revised by governing-body / Board decision recorded in
[[0.3 Decision Log]]. This document is the single source of truth for the figures the
agreements defer to it; agreements cite resolutions by ID and date.*
