---
title: Unified Fund - One Account Scaling Ratios - 2026-05-18
type: strategy
status: proposal
priority: high
maturity: working
created: 2026-05-18
updated: 2026-05-22
tags:
  - strategy
  - fund
  - proposal
  - ReGenerativa
---

# Unified Fund - One Account, One Shape

*Proposal only. Nothing in the vault changes until decided. The Unified Fund is the network's single financial account, governed by one mathematical shape applied at two scales: network and holon. All flows serve the Association's purpose of **integral regeneration** (the Association's attività di interesse generale under D.Lgs 117/2017). At every level the allocation follows the same pattern — the happy money story — with the Elder Council holding **allocation rights over a portion of the Association's treasury**, to direct toward mission purposes. No person at any level receives personal income from this proposal: all flows are mission spending, cost reimbursement, or activity expense, fully documented in the bilancio sociale and bounded by the same hard rails. Final clause framings await the Association's legal/fiscal advisor (F1).*

---

## The whole idea, in plain English

The **ReGenerativa Fund is one account.** All economic activity in the network feeds it; all of the network's flows pass through it. It is shared along the **lifecycle of contribution** in service of integral regeneration:

- **Holons** (hubs, projects, ventures) — the autonomous units where the network's work happens.
- **Stewards** — those in active service, treasurers of their holons.
- **Elder Council** — those who have given long-form service through Stewardship and entered A8, holding **allocation rights over a portion of the Association's treasury**, to direct toward mission.

**Members** are served at the holon level via the sliding-scale rule (GT-3A.3): pricing from full down to free based on standing contribution. Their access benefit is foregone revenue at the activity level, not a transfer from the Fund.

Money flows by the same shape at two scales — network and holon — and at every level the allocation follows the same pattern: **cover real operating need first, enable mission-directed allocation within mandate next, route what remains to the Elder Council to direct toward mission.** This is the happy money story. Routine flows are structural per the cascade shape; the Council deliberates within hard rails to direct the treasury portion it holds toward integral-regeneration purposes. No grant applications, no approval cycles for routine flows, no personal income to anyone. All flows are Association mission spending, cost reimbursement of activity expenses, or programme-level investments, fully documented in the *bilancio sociale*.

### What's a holon?

A **holon** is the term for any autonomous sub-project inside the Association: a hub (A1), a Project (A6), a venture (A7). Each holon has its own mission (the mandate), its own steward acting as treasurer, and its own envelope of money. A holon is autonomous within its mandate but feeds and is fed by the wider network — both a whole and a part.

The **Elder Council** (A8 Annex 1) is also a holon — a collective body with a mandate, an envelope, and an internal governance process that allocates as a body. It is structurally a holon but holds a special role: it receives every other holon's surplus and the network's cascade overflow, and **directs that treasury portion toward mission purposes across the Association**. The Association as a whole is the meta-holon. **One shape, two scales.**

### What's the shape?

A smooth saturating curve — the **hyperbolic tangent**, `tanh`. It does two useful things at once:

1. **When there's little money, it shares.** First needs get first money — but not nothing-to-anyone-else.
2. **Once a need is covered, it stops overpaying.** The bucket saturates. Extra money flows on to the next need rather than piling up uselessly.

Think of filling a stack of glasses. Water pours into the first, but the glass has a marked "full" line (its target). When it's nearly full, water spills smoothly into the next. No sudden cliffs — and you never drown a glass that's already full.

### Why this matters

- **Honest about scarcity.** The shape names which needs are covered first when the envelope is lean.
- **One mechanism to learn.** The Board, a steward, and the Elder Council all operate the same shape at different scales.
- **Targets in euros, not percentages.** Real, arguable numbers grounded in projected need for integral regeneration.
- **Allocation rights at every level, within mandate.** The network, the steward, and the Council are all genuine allocators within their scope and within the same hard rails. Subsidiarity is built into the shape.
- **Stewards exercise allocation rights through active service** in their holon — running the activity, directing its discretionary envelope for activity expenses, never as personal pay.
- **Elders, on entering A8, hold allocation rights over a portion of the Association's treasury, not personal income.** Long-form service is recognised by allocation responsibility — the right (and duty) to direct treasury toward mission. The Council does not receive sustenance, pension, or personal welfare from this proposal.
- **Long-form contribution earns allocation responsibility, not personal reward.** Every euro the Council directs flows outward — to holons, projects, stewards, programmes serving integral regeneration (which may include elderly-focused hubs and programmes as mission-aligned uses) — but never inward to elders personally as income.

---

## Money in - automatic at the source

| Source | How it enters | Note |
|---|---|---|
| **Any GT-4 transaction** (Partnership, Intrapreneurship, revenue-generating Mentorship, hub-earned income) | **NRC shaved off-the-top automatically** — 3–10% per GT-4.3, default 5%, rate set per activity in its mandate doc | Structural, not discretionary — no Board decision per transaction |
| **Sponsorship** (A5) | 100% to the Fund | clean inflow |
| **Membership fees** (A2) | Net of Art. 18 CTS insurance only | gross is largely pre-committed |
| **Donations** | 100% to the Fund | |

All inflows land in the one account. No sub-accounts. The Fund's own operating costs (audit, accounting, legal, governance) are paid as ordinary expenses from the Fund balance and reported in the *bilancio sociale*.

---

## The happy money story - the universal allocation pattern

At every level, an envelope of money is allocated through priority buckets, each filling smoothly via the tanh shape and saturating at its real-need target. When one bucket is nearly satisfied, the overflow runs to the next. Beyond the last bucket, **surplus flows to the Elder Council to be directed toward mission** — at the holon level, at the network level, everywhere.

```
Pool       = envelope inflow
Bucket_i   = K_i · tanh(Pool_i / (α·K_i))     → cap = K_i
Pool_{i+1} = Pool_i − Bucket_i
…
Surplus    = whatever remains → Elder Council (treasury portion the Council directs to mission)
```

Targets `K` are euro-denominated projections of real need for integral regeneration. The stiffness `α` controls how strict-priority the cascade is (recommended `α = 1`, shared across scales).

---

## Two scales of allocation

### Scale 1 - The network cascade (Board allocates the Fund)

```
Pool_0    = Fund balance (after real operating expenses)
Holons    = K_h · tanh(Pool_0 / (α·K_h))     → operating support & infrastructure for holons (hubs, projects, ventures)
Pool_1    = Pool_0 − Holons
Stewards  = K_s · tanh(Pool_1 / (α·K_s))     → active steward operating support (activity-cost reimbursement; see F1)
Pool_2    = Pool_1 − Stewards
Council   = Pool_2                             → routed to the Elder Council without cap, for mission-directed allocation per GT-4A.5
```

**Order follows the lifecycle:** the *holons* where stewardship happens, then those *actively practicing* it, then the Elder Council which holds allocation rights over the residual treasury for mission-directed redistribution.

### Scale 2 - The holon waterfall (steward allocates the holon envelope)

For a holon's locally generated revenue `x`:

```
Pool       = (1 − NRC) · x                        ← NRC per GT-4.3 lifts off automatically at source
Place      = C · tanh(Pool / (α·C))               → cap = C  (holon's tenure operating cost target)
Surplus    = Pool − Place
Stewards   = α·C · tanh(Surplus / (α·C))          → cap = α·C  (steward's mandated discretionary envelope for activity expenses)
Excess     = Surplus − Stewards                    → routed to Elder Council
```

The steward is the treasurer of the holon's envelope within the mandate. They have genuine allocation rights below the ceiling, within the two-part purpose test (the holon's mandate AND integral regeneration). The `Stewards` bucket is a discretionary deployment envelope for activity-related expenses within mandate; it is **not** personal remuneration. Personal steward compensation is a separate cost-line per A3 §8 / GT-12, outside this proposal. All surplus above the discretionary cap routes upward to the Council; there is no holon endowment.

### The Elder Council - holding allocation rights over a treasury portion

The Council receives a single combined inflow over which it holds allocation rights — combining all flows routed to it from the network cascade (Scale 1) and the holon waterfalls (Scale 2). The Council allocates this inflow `P` through a simple two-bucket structure: a small `Operating` bucket for its own governance work, and an `Allocation` bucket containing everything else, which the Council directs as mission spending under its A8 mandate:

```
Pool       = P  (combined inflow from cascade + all holon excess)
Operating  = O_e · tanh(Pool / (α·O_e))           → cap = O_e  (Council's own governance operating costs: convening, deliberation, documentation, charter administration — never personal income for elders)
Allocation = Pool − Operating                       → Council-directed mission spending under A8 delegated mandate — to any holon, project, steward, or programme serving integral regeneration. May include elderly-focused hubs and elder-serving programmes as mission-aligned uses within the integral-regeneration mission, but always as mission spending on programmes, never as personal payments to elders or to Council members. Bounded by hard rails; reported in the bilancio sociale.
```

The Council deliberates per its A8 charter and directs `Allocation` flows based on observed need and integral-regeneration priorities. There are no formal grant applications; the Council convenes, deliberates, and directs. Recipients receive a flow under the cascade and the Council's A8 mandate, not a grant under an application process. All flows are mission-bound, documented, and reported in the *bilancio sociale*.

`O_e` (Council operating target) is distinct from and much smaller than `K_e` (the cascade allocation envelope). `K_e` is the annual treasury portion the Council directs; `O_e` is the small slice of that the Council retains for its own governance work. The bulk of `K_e` flows on to `Allocation`.

---

## What the cascade looks like with real numbers

Set `α = 1` and each cascade target `K = €10,000` (so total target across all three saturating cascade buckets = €30,000):

| Fund balance | Holons | Stewards | Council Envelope | Cascade Overflow |
|---|---|---|---|---|
| **€10,000** (33% of total target) | €7,616 | €2,339 | €45 | €0 |
| **€20,000** (67%) | €9,640 | €7,762 | €2,541 | €57 |
| **€30,000** (100%) | €9,951 | €9,644 | €7,786 | €2,619 |
| **€60,000** (200%) | ~€10,000 | ~€10,000 | ~€10,000 | ~€30,000 |

The Council Envelope and Cascade Overflow both flow to the Council, which then directs them via its two-bucket internal waterfall. The Fund needs to be roughly twice the total cascade target to fully fund every bucket and produce meaningful overflow for additional Council-directed allocation. In a lean year, the Council Envelope is small and Overflow zero — honest, not a defect: when the network is poor, the treasury portion the Council can direct is small; when the network thrives, it grows.

---

## Hard rails - the same rules at every level

The same procedural rules apply to every allocator (Board, steward, Elder Council). They are the rails that keep all flows mission-bound and ETS-compliant. The only difference between scales is **how the allocation rights are earned**: stewards earn theirs through active work in their holon; elders earn theirs in recognition of long-form service already given.

- **Subsidiarity.** Within the mandate, under the ceiling, with the cost-coverage bucket secured, the allocator decides. No higher-level pre-approval of in-scope spend.
- **Two-part purpose test.** Every expense must serve (a) the local mandate AND (b) **integral regeneration** (the Association's *attività di interesse generale* under D.Lgs 117/2017).
- **Delegated-authority ceiling** (LGR-tunable). Single-signature up to a published cap; second signature above it, and *always* on the allocator's own payments or reimbursements. For the Elder Council the natural second-signature is another Council member; above the ceiling the full Council deliberates per its A8 charter.
- **Anti-self-dealing.** No allocator at any scale may allocate to their own personal benefit. The Council's `Allocation` bucket cannot fund personal payments to Council members or to any elder; Council members may participate in mission-aligned programmes the Council funds (e.g. activities at an elderly-focused hub), but they participate as members in mission activity, not as recipients of personal income. The Council's `Operating` bucket covers Council governance work only (convening, documentation, infrastructure — never elder income).
- **Reconciliation.** Stewards reconcile at tenure handover; the Elder Council reconciles per its A8 charter. The cost-coverage bucket is intact, no deficit passed forward.
- **Documentation and reporting.** Every flow is recorded against its bucket, every Council allocation decision is minuted, and the whole is consolidated in the *bilancio sociale* — the ETS transparency instrument.
- **Operational autonomy, unitary legal control.** The legal person stays the Association. Holons and the Council are governance/accounting units; the allocator's authority is a *delega di spesa* from the Association.
- **Non-distribution constraint upheld.** No flow at any scale constitutes a distribution of profits to members. All flows are Association mission spending, cost reimbursement of activity expenses, or programme-level investments. No flow is personal income to any natural person — final clause framings are subject to the F1 review gate.

---

## Honest flags (not optional reading)

**F1 — Italian Third Sector law is the hard constraint.** ReGenerativa is an APS-ETS under D.Lgs 117/2017. An ETS cannot distribute profit to members; all flows must be genuinely mission-bound: Association mission spending for the *attività di interesse generale* (here, integral regeneration), or cost reimbursement of activity expenses, or programme-level investments. The three flow types this proposal creates each require careful clause framing:

- **Steward operating support** (the cascade's Stewards bucket and the holon waterfall's Stewards bucket): framed as activity-cost reimbursement / occasional-collaboration compensation per A3 §8 and GT-12. Never salary; the bucket pays for activity expenses, not the steward personally.
- **Council allocation envelope** (the cascade's Council bucket): framed as the treasury portion over which the A8-mandated Council holds allocation rights for the Association's mission. Council members do not receive personal income from this envelope; they exercise allocation rights over it. The Council's own `Operating` bucket covers governance costs only.
- **Council Allocation** (the Council's mission-directed spending of its envelope): framed as Association mission spending under the Council's delegated A8 mandate, allocated to holons / projects / stewards / programmes for integral-regeneration purposes. Elderly-focused hubs and programmes may be funded as one form of mission spending among many; participation in such programmes is participation in mission activity, not personal income.

This proposal does not implement the framings — the architecture itself does not depend on them. **Final clause definitions await the Association's legal/fiscal advisor.** The F1 review gate before any GT or agreement edit is non-negotiable.

**F2 — Membership fees are largely pre-committed.** The €25 covers Art. 18 CTS insurance; only the net surplus is genuinely available to the Fund.

**F3 — The cascade is soft priority, not ring-fenced reservation.** The shape protects priorities by *order*, not by reserved euros. Real trade — name it knowingly.

**F4 — Priority order is itself a governance choice.** The proposed order (Holons → Stewards → Council Envelope → Cascade Overflow to Council) follows the lifecycle of contribution and means **the Council Envelope is small in a lean year.** Honest, not a defect: when the network is poor, the treasury portion the Council can direct is small; when the network thrives, it grows.

**F5 — Concentration.** One account concentrates control and audit in the Board, and the Council's allocation authority concentrates mission-direction responsibility in the elders. Mitigated by published targets, the *bilancio sociale*, the hard rails (ceiling, dual-signature, anti-self-dealing), and the Council's A8 collective-deliberation requirement.

**F6 — Allocation rights are not personal income.** This is the model's strict ETS posture and must hold in every clause:
- The holon `Stewards` bucket is a discretionary deployment envelope for activity expenses within mandate — not personal pay. Personal steward compensation, if any, is a separate cost-line design (A3 §8 / GT-12) outside this proposal.
- The Council `Allocation` bucket is Association mission spending directed by the Council — not personal income to elders. Elders' personal financial needs, if any, are not addressed by this proposal; they would require separate ETS-compliant instruments outside the Unified Fund.

**F7 — Targets need honest projection.** All `K` values (and `O_e`, `C`) are real-need euros grounded in integral-regeneration priorities. Garbage targets in, garbage cascade out.

**F8 — The Council's Allocation is uncapped by design.** This is the Council's A8-mandated allocation role, not an oversight. The hard rails wrap it (purpose test, ceiling, anti-self-dealing, *bilancio sociale* transparency, collective Council deliberation per A8 charter); F1 constrains its definitions. But it is genuinely large allocation responsibility concentrated in a small body. The Association must trust its elders — and the hard rails are what make that trust governance-grade rather than blind.

---

## Implementation work (if adopted)

- **GT-1.10** written to define the Unified Fund, the cascade shape, the two scales, and the Council's allocation-rights mandate.
- **GT-4** unchanged — remains the unifying NRC rule the proposal references.
- **A8 §4.2 + A8 Annex 1 + LGR-2** rewritten to express the Elder Council's role as holder of allocation rights over a treasury portion: receives surplus, runs its own `Operating` + `Allocation` waterfall, directs mission spending under A8 mandate.
- **Care Protocol** dissolved as a standalone doc; its function absorbed by sliding-scale access at the holon level + Council `Allocation` when the Council directs it there; any residual content folds into GT-7.
- **A6 / GT-4 partnership NRC** unchanged.
- **Access Floor** clauses: Tier U (priority window + no-turn-away with spare capacity) lives as a GT-3A subclause; Tier R replaced by holon-level sliding-scale.
- **GT clauses establishing the no-application-process principle**: routine flows are structural per the cascade shape; the Council deliberates as the A8-mandated allocation body; all flows are *bilancio sociale*-documented.
- **Cheatsheet / Constellation Overview / Operational Procedures §J** updated.
- One **Decision Log** entry.
- **Legal review gate (F1)** before any GT edit — non-negotiable.
- **(Tidy at adoption):** the proposal's filename may be renamed for accuracy, with the wikilink in the MOC updated alongside.

---

## Decision needed

1. **Adopt the one-fund, one-shape, two-scale, Council-as-allocation-rights-holder model?**
2. **Provisional figures** (owner/Board, revisable like any LGR):
   - **Network cascade targets**: `K_h` (holons — hubs, projects, ventures), `K_s` (stewards), `K_e` (Elder Council allocation envelope) — projected real-need euros for each, grounded in integral-regeneration priorities.
   - **Priority order** of the cascade (proposed: Holons → Stewards → Council Envelope → Cascade Overflow).
   - **Stiffness `α`** — recommend 1, shared across scales.
   - **Per-holon `C`** — set by the Board at each steward appointment via the holon's mandate doc.
   - **Council `O_e`** — the Elder Council's own governance operating cost target (small; covers convening, documentation, charter administration only — never personal income for elders), distinct from `K_e` (the Council's allocation envelope size).
   - **Delegated-authority ceiling** for stewards and Council — single-signature limit before second signature is required.
3. **Authorise the F1 legal/fiscal review** before any GT/agreement edit. Particular attention to:
   - Council `Allocation` framed as Association mission spending under A8 delegated mandate (not grants-to-members in the bureaucratic sense; not personal income to elders).
   - Steward operating support framed as cost reimbursement / occasional collaboration per A3 §8 + GT-12 (not salary).
   - Anti-self-dealing line at every scale (no allocator funds their own personal benefit; participation in funded programmes is mission participation, not income).
   - Confirmation that elder personal financial needs, if any, are outside this proposal's scope and would require separate ETS-compliant instruments.
