---
title: Living Governance Resolutions
type: governance-document
status: active
version: '1.6'
priority: high
maturity: working
created: 2026-05-16
updated: 2026-06-01
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
the General Terms. Each resolution is revised by Board / governing-body decision,
recorded in the Association's internal Decision Log. Initial entries derive from the
2026-05-16 viability and digital-infrastructure reviews (internal vault records).*

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
specific figures awaiting Board ratification. **LGR-3** and **LGR-4** have been
withdrawn (their IDs are retired and not reused). **LGR-5 (Allocation Model:
settlement, band, and returns)** is **Provisional** and **Pending F1** as of
2026-05-30. Ratified figures remain revisable by a Decision Log entry, never an
agreement amendment.

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

- **Network NRC Rate** (per GT-4.4(a)):
  - `r_NRC` - the single uniform rate, within 3–10%, applied to all active holons at
    source. Set by Board. Absent a Board-ratified figure, the rate is 5%. Note: this
    is the rate for active operations; post-Emergence entities (A7-3 §2) carry their
    own perpetual rate set at the moment of Emergence and locked thereafter.
- **Association-holon cost-coverage target** (per GT-4.4(b), Association-holon row):
  - `K_a` - Association legal-entity operating costs (administration, Article 18 CTS
    insurance, fiscal-hosting platform fees, network-level structural costs), set
    by Board.
- **Asset / Project / Venture cost-coverage target** (per GT-4.4(b)):
  - `C` - set per holon at Steward appointment, recorded in the holon's mandate
    document (Asset DNA — the Permitted Use annex A1-2, or the fuller Hub DNA A1-5
    for a place / Project Sheet / Venture Sheet); includes Steward
    activity-cost reimbursement under A3 §8–§9 and GT-12.
- **Elder Council cost-coverage target** (per GT-4.4(b), Elder Council row):
  - `O_e` - Elder Council Operating target (governance operating costs: convening,
    deliberation, documentation), set by Board in consultation with the Council.
- **Discretionary ceiling** (per GT-4.4(c)):
  - `D` - per-holon discretionary deployment ceiling, recommended value `α·C` where
    `α` is the shape stiffness (default 1). The Association holon's `D_a` and per-Asset
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

## LGR-5 — Allocation Model: settlement, band, and returns (GT-4.6, GT-4.4A, GT-4.8)

**Serves.** GT-4.6 (the Allocation Model and its parameters), GT-4.4A (settlement over
time — the living balance), and GT-4.8 (mutual aid and graduated intervention). Extends
LGR-2: where LGR-2 sets the static shape parameters, LGR-5 sets how the shape settles
over time and how holons give to and draw from the mutual-aid reservoir. Also supports
the contribution-weighted division of a holon's discretionary envelope under GT-4.3 and
the two Passport readings under GT-3A / Agreement 2 §2.6–§2.7.

**Resolution (Provisional - Pending F1).** The parameters below are deliberately
conservative working figures, set so the network can operate and generate the data the
final figures need. All are revisable by Decision Log entry. Final framings await the
F1 legal/fiscal review gate.

**A. Settlement cadence.**
- `T_cycle` - one **lunation** (the lunar month, ~29.53 days) is the settlement cycle.
  The shape of GT-4.4 is settled once per lunation.
- `W_cost` - the cost-coverage baseline `C` (LGR-2) is assessed on a **trailing
  multi-lunation average** (provisional: 3 lunations) rather than a single cycle, to
  damp lumpy revenue and seasonal cost. Settlement happens each lunation; the baseline
  it settles against moves slowly.

**B. The curve and the carried balance.**
- The saturating curve and stiffness `α` are those of LGR-2 (default `α = 1`); LGR-5
  adds no new curve, only applies it across time.
- `B` - the holon's **carried cost-coverage balance**, rolled from cycle to cycle.
  `B > 0` is banked reservoir; `B < 0` is carried shortfall.
- **Heal first / throttle (GT-4.4A(a)–(b)).** Each cycle, cost-coverage is met before
  any discretionary allocation; an uncovered shortfall is carried in `B` and spread
  across coming cycles. While `B < 0`, the discretionary envelope is scaled down
  smoothly in proportion to the depth of the shortfall (toward zero as `B` approaches
  `−nC`), via the same `tanh` saturation.

**C. Band of tolerance and backstops.**
- `n` - the **band of tolerance**, expressed in lunations-of-cost, so the sovereign
  band is `[−nC, +nC]`. Provisional default **`n = 3`**. Within the band a holon governs
  its own settings; at `+nC` surplus gives upward (GT-4.4A(c)); at `−nC` the holon is
  caught and graduated intervention engages (GT-4.8).
- `n` is **earned**: a new holon starts at the default; a holon that demonstrates
  homeostatic stability over many lunations earns a wider `n` (deliberate decision,
  GT-4.8(c)); a holon that begins oscillating has `n` narrowed (may be automatic,
  GT-4.8(c)).
- `k` - the **downward backstop**: a structural shortfall persisting beyond `k`
  lunations at the floor is absorbed upward by the Association holon under GT-4.8(a),
  so the homeostat never euthanises a hub that simply got unlucky. Provisional default
  **`k = 6`** lunations.

**D. Contribution-weighting of the discretionary envelope (GT-4.3).**
- Where a holon's discretionary envelope is divided among co-Stewards in proportion to
  contribution, the weight uses **active/recent** contribution on a **trailing window**
  (provisional: 6 lunations), not lifetime-cumulative standing. Lifetime-cumulative
  standing governs access only (the two Passport readings, GT-3A / Agreement 2 §2.6).
- Shares are **recomputed each lunation** and held **stable within the cycle**, so a
  commitment made within a cycle is not re-floated mid-cycle.
- This weighting is administration of the delegated envelope only: it confers no
  governance vote and no personal income (GT-4.5(d),(g); Agreement 2 §2.1, §2.7).

**E. Upward-return terms (GT-4.8(d)).**
- A holon's **voluntary, early** upward contribution to the reservoir (feed-up before
  the band would force overflow) earns, in proportion to the share of envelope
  voluntarily forgone (capped, wealth-independent):
  - **Mutual insurance** - first call on the reservoir's support under GT-4.8(a);
  - **Earned autonomy** - a wider band `n` under GT-4.8(b);
  - **Recognition** - the voluntary feed-up is recorded in the contributing Stewards'
    Network Passports (GT-3A) as a network-level contribution, on the
    **lifetime-cumulative** reading that governs access standing (and, in time,
    Eldership eligibility under LGR-1) - never on the active/recent reading that
    governs local allocation authority (§D). Distributed among co-Stewards by their
    local share at the moment of feed-up.
- Forced overflow at `+nC` earns neither insurance nor autonomy nor recognition; only
  the *choice* to restrain is recognised.
- These returns confer **no governance vote, no allocation voice, and no personal
  income**. The "network-tier standing" idea raised in the Holon Homeostat strategy
  note is **resolved as recognition only**: feeding the commons raises a Steward's
  *standing* (access, and the contribution clock toward Eldership), but creates **no new
  allocation voice** anywhere - it does not touch the one-member-one-vote Assembly
  (Agreement 2 §2.1) or the elder-based composition of the Elder Council (Agreement 8 §2).

**Basis.** The lunation gives the network an ecologically apt, evenly spaced settlement
rhythm already used for seasonal coordination. Trailing averages on cost and
contribution keep settlement responsive without whipping the balance on lumpy flows.
The band `n` and backstop `k` give each holon a bounded autonomous zone that is caught
before collapse and contributes before hoarding. Returns reward the *choice* to feed
the commons, not mere revenue, achieving mutual aid by incentive rather than tax.

**Review.** Reviewed by the Board at least annually alongside the *bilancio sociale*,
and after the first full year of lunation-settled operation against real balance data;
revisable by Decision Log entry at any time.

**Citation.** GT-4.6, GT-4.4A, and GT-4.8 cite this resolution by ID and date; GT-4.3
cites it for the contribution-weighting cadence.

**Status.** Provisional - Pending F1 - 2026-05-30. Specific figures (`n`, `k`, trailing
windows) awaiting Board ratification and the F1 review gate.

---

*Resolutions are revised by governing-body / Board decision recorded in the
Association's internal Decision Log. This document is the single source of truth for
the figures the agreements defer to it; agreements cite resolutions by ID and date.*
