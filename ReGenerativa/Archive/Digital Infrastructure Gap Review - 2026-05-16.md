---
title: Digital Infrastructure Gap Review - 2026-05-16
type: review
status: active
priority: high
maturity: working
created: 2026-05-16
updated: 2026-05-16
tags:
  - review
  - infrastructure
  - constellation
  - ReGenerativa
---

# Digital Infrastructure Gap Review - 2026-05-16

*Honest audit of whether the Holons codebase at `../harvest` can actually run what the
Constellation describes. Companion to [[Constellation Viability Review - 2026-05-16]]:
that review audited legal and structural viability of the agreements; this one audits
whether the digital infrastructure can operate them as written. Spec-side gaps surfaced
here are tracked in [[0.5 Open Questions]] OQ7-OQ9. Read-only audit; no code or agreement
text was changed.*

---

## Headline verdict

**The Constellation describes an economic-governance operating system. `../harvest` is a
decentralised group-coordination toolkit.** They share a substrate and overlap at the
edges (tasks, events, basic proposals), but harvest does not implement the spine the
Constellation runs on - and a meaningful fraction of that spine the Constellation itself
has not finished specifying, so part of the gap is spec, not code.

Two qualifiers that change the framing and must not be dropped:

1. **Harvest's substrate is well aligned in spirit.** Holosphere (Nostr + GunDB), an
   REA-shaped event log, H3 cells in settings, one shared core across four UIs - this
   matches the Constellation's "decentralised, portable, survives dissolution,
   territorial" intentions (GT-3A portability, GT-13 dissolution continuity, GT-3.1c
   H3 mapping). The deficit is the **domain layer on top**, not the foundation.
2. **Some missing things must not be built.** The Care Protocol is deliberately
   no-forms / no-minutes; onboarding is explicitly "a conversation on paper, not a
   form"; the Social DNA Framework explicitly states it is *not a scoring rubric or
   ranking system*. Software there would violate the spec's stated intent. An honest
   review cannot count these as harvest deficiencies.

---

## Method

Two parallel read-only sweeps. (1) An engineering capability audit of
`harvest/packages/core/src` (every domain's `index.ts`, main implementation, tests,
cross-checked against `apps/web/src` imports and `docs/ARCHITECTURE.md`), classifying
each capability as production / core-only / test-only / stub. (2) An exhaustive
extraction of every concrete digital or operational mechanism the eight agreements,
their annexes, and the four companion docs require to operate, with clause references.
The two were then mapped against each other; only verified claims are recorded here.

---

## Framing: substrate vs domain layer

Harvest is two layers. The **substrate** - Holosphere identity-aware writes, the REA
event primitive, federation propagation, H3 territorial cells, the shared
core-across-four-UIs architecture - is the right shape for what the Constellation wants
and is largely real. The **domain layer** - the meaning placed on top of those events:
validated contributions, roles, agreements, funds, tiers, governance - is where the
Constellation lives and where harvest is mostly absent or stubbed. The recommendation
that follows is therefore *evolve the substrate, build the domain layer* - not rebuild,
and explicitly not mistake the existing `scoring`, `dna`, or `council` domains for the
Constellation's versions of those ideas (see "False friends").

---

## Findings: requirement to capability to gap

Severity legend: **KEYSTONE** (everything else depends on it) - **CRITICAL** (core of
the Constellation, absent or unusable) - **MAJOR** (substantial mechanism missing) -
**SPEC** (the gap is in the documents, not the code; cannot be built as written).

| # | Constellation requirement (source) | What harvest has | Severity |
|---|---|---|---|
| 1 | Identity, roles, agreement-state, Membership-gateway prerequisite chain (whole architecture; A2 Cl 1.4, GT-11.4) | No authorisation, role, or agreement model in core. `users/membership.ts` confirms there is no membership record - "joining" is just the presence of a profile doc. Web governance casts every vote as the literal string `'current-user'`; creator `'Dashboard User'`. `canWriteToHolon` is key-based and self-described as "UI gating, not security enforcement". | KEYSTONE |
| 2 | Contribution Ledger: record, validate (7-day window, validator role, dispute to two-thirds), calculate validated shares, self-sovereign logging, member-requestable audit, GDPR off-chain mapping + cryptographic unlinking (GT-1.7/1.8, GT-3.1-3.4, A6-4, A6 8-9) | `packages/core/src/rea`: an event log. Append by convention only (`updateStatus` mutates and re-puts), `Math.random` IDs, full-scan in-memory aggregation, no validation workflow, no validator role, no audit API, no integrity guarantee. | CRITICAL (code) + SPEC: DLT choice is a literal blank in A6-4 2.1 |
| 3 | Distribution Calculator + Network Regeneration Fund: share = partner validated / total validated; >=5% NRF; tiered NRC (Phase 2 7% / 5% Sprout+, Phase 3 5%); ring-fenced Elder and Care sub-reserves; 30-day remittance; bilancio sociale aggregation (GT-4, A6 10A, A7 6.2/7.2, A8 4.2, Care Protocol 5) | `calculatePercentageShare` exists in `scoring/` but is wired to nothing. There is **no fund, treasury, allocation, payout, or distribution concept anywhere in core**. `settings.flowManagement` percentages drive only a diagram (`generateFlowVisualization`); no money moves. `expenses` is pairwise debt netting with no settlement execution. | CRITICAL |
| 4 | Network Passport: single portable cumulative cross-role record; four tiers (Seed/Sprout/Tree/Forest); large role x tier perk table (some perks software-enforced: NRC rate, programme pricing); GDPR export, rectification, cryptographic unlinking; 30-day transition summary (GT-1.11, GT-3A, Network Passport doc) | None. No cumulative per-person record (scores are recomputed by full event scan, never persisted), no tiers, no thresholds, no perk gating anywhere in the codebase. | CRITICAL (code) + SPEC: tier thresholds explicitly undefined, OQ7 |
| 5 | Governance: Assembly one-member-one-vote; Partnership/Venture simple and two-thirds majorities; Elder Council quorum, supermajority (two-thirds of all active Elders), Covenant Signal with 30-day mandatory public response, Constellation Integrity Review (30-day silence = no objection), Living Probiviri (60-day opinion), notice periods 48h/7d/none (A6 12-13, A7 4.3, A8-1 3-5) | `packages/core/src/council`: one-person-one-vote with a single-blocker veto, hardcoded `DEFAULT_QUORUM = 5`. No roles, no Elder, no charter, no weighted or eligibility-gated voting, no enactment, no time-bound voting, no proposal categories. The `/[id]/council` route renders a separate AI-ritual UI that does not use core council at all. | MAJOR |
| 6 | Network Demand Register and Demand Signals: publicly visible living record, member-accessible, 30-day publication review, anonymisation, consolidate/retire curation, "long-unaddressed" flag after 6 months, reference codes (NDS-YYYY-NNN) (GT-1.12/1.13, A7 2) | Nothing. No register, no demand signal, no anonymisation pipeline, no curation cadence. | MAJOR |
| 7 | Venture Holon lifecycle state machine: phases with capacity floors (>=70% / >=40% network), per-phase NRC, A7-2 transition reviews with two-thirds Venture-Member vote, activation obligations with 30/60-day clocks, dissolution paths (A7, A7-1/2/3) | Nothing. No venture entity, no phase machine, no capacity tracking, no transition workflow. | MAJOR |
| 8 | Partner Register as "single source of truth for Partner identity and standing"; two-thirds admission/exclusion; Project Sheet activation into the Ledger (A6, A6-1, A6-3) | Nothing. No partner register, no admission workflow. (Loosely adjacent: `users` profile CRUD, but no standing, role, or vote-tally record.) | MAJOR |
| 9 | GT-3.1 committed digital infrastructure: a resource-allocation system, a mutual-credit system, H3 territorial mapping for bioregional visualisation (GT-3.1, GT-3.2, A6-4 2.4) | H3 cell stored in `settings.hex` and used for federation targeting only. No allocation engine. No mutual-credit system (REA `getCurrencyBalance` is pairwise debt, not network mutual credit). | MAJOR (code) + SPEC: all three named but unspecified, "design phase", OQ9 |

No production-grade economic, governance, or impact-accounting capability was found.
The capabilities that *are* production-real (tasks, expenses, calendar, checklists,
shopping, categories, DNA-culture editor, basic proposals) are day-to-day hub
coordination utilities, not the Constellation's economic-governance spine.

---

## What must not be built (manual by design)

Counting these as "harvest is missing X" would overstate the gap and, worse, building
software for them would contradict the specification:

- **Social DNA Framework (six dimensions).** The companion doc explicitly states it is
  "not a certification system, not a scoring rubric, not a ranking system". It is a
  qualitative shared-language assessment practice on a seasonal rhythm. A system that
  algorithmically scores contributions across the six dimensions would violate its
  stated nature, not implement it.
- **Care Protocol.** Deliberately anti-bureaucratic: no forms, no minutes, no names in
  accessible documents, aggregate-only annual reporting. By design it produces no
  software records.
- **Member and Steward onboarding.** Explicitly "not a form, a conversation that
  happens on paper" - narrative markdown documents in a hub folder, intentionally not a
  structured intake system.
- **Hub DNA.** A living place-covenant document, reviewed seasonally, with steward
  discretion. A document, not an app.

The honest line: harvest does not need to do these. It does need to *not* pretend its
existing `scoring` and `dna` domains are these.

---

## False friends (name collisions to flag explicitly)

Three harvest domains share names with Constellation concepts but are different things.
Conflating them is the single most likely way this analysis gets misread:

- **`harvest/scoring` is not Social DNA.** It is a one-dimensional configurable
  weighted sum of activity counts (initiated, completed, hours, appreciation, REA
  collaboration signals). It is genuinely per-user and equation-configurable, but it
  has no dimensions, no tiers, no thresholds, and no land/health/knowledge/economy/
  community/governance classification. It both fails to model Social DNA and would
  contradict it if pointed at it.
- **`harvest/dna` is not Hub DNA or Social DNA.** It is a culture-card editor
  (chromosomes: values / tools / practices) with seed content and no behavioural
  effect - nothing in scoring, council, or tasks reads it. Pure name collision.
- **`harvest/council` is not the Constellation's governance.** It is consensus-toy
  grade (flat vote, single-blocker veto, hardcoded quorum 5) and, in the web UI, runs
  on a fake identity (`'current-user'`).

---

## The spec-side gap

A real fraction of "what is missing" is missing from the documents, not the code. You
cannot build to a blank:

- Network Passport tier thresholds (Seed to Sprout to Tree) are explicitly *not fixed*
  and live in a "living governance resolution" that does not exist (GT-3A.3). Tracked
  as [[0.5 Open Questions]] **OQ7**.
- The Contribution Ledger's blockchain/DLT technology is a literal placeholder in
  A6-4 2.1. Tracked as **OQ8**.
- GT-3.1's resource-allocation system, mutual-credit system, and H3 territorial mapping
  are named as committed infrastructure but wholly unspecified. Tracked as **OQ9**.
- Related blanks already tracked or hygiene: Elder eligibility period (OQ1), Elder Fund
  reserve (OQ2), A8-2 not created (OQ5), Care reserve figure and A6-2 Economics
  Schedule reference rates (all blank; the latter directly gates the Distribution
  Calculator).

So: harvest cannot fully run the Constellation partly because the Constellation is not
yet fully runnable as written. The two reviews compound - sign-readiness blockers in
[[Constellation Viability Review - 2026-05-16]] and the spec gaps above are the same
undefined numbers that also block the software.

---

## What is already aligned (for balance and credibility)

- Holosphere (Nostr + GunDB): decentralised, portable, persists independently of any
  single operator - matches GT-3A portability and GT-13 survives-dissolution.
- REA event shape in `packages/core/src/rea`: the correct primitive for a contribution
  ledger. It needs hardening (append-only, stable signed IDs, audit), not replacing.
- H3 cell in `settings`: a partial down-payment on GT-3.1c territorial mapping.
- One shared core across web / Telegram / text / AI UIs: good fit for the
  multi-context, multi-device access the network implies.
- Federation propagation: a partial network-spanning primitive (one-directional record
  propagation today; network-wide aggregation not yet built).

The foundation is a credible starting substrate. The verdict is not "wrong tool" - it
is "right substrate, domain layer not built".

---

## Path: what would have to be built, in dependency order

Each step depends on the one before it. Nothing downstream is trustworthy without
step 1.

1. **Identity, roles, agreement-state, Membership gateway (KEYSTONE).** Real per-person
   identity; a role/agreement model (which agreements a person holds, in what standing);
   the Membership-as-prerequisite chain enforced. Until this exists, contributions
   cannot be attributed, votes are fake, tiers cannot be assigned, and NRC cannot be
   tied to a venture.
2. **Hardened Contribution Ledger.** Append-only, stable signed IDs, the A6-4
   validation workflow (validator role, 7-day window, dispute to two-thirds), self-
   sovereign logging, an audit API, GDPR off-chain pseudonym mapping and cryptographic
   unlinking. Blocked on **OQ8** (DLT choice) for the on-chain half; the off-chain
   ledger can be built now.
3. **NRF accounting.** Net Revenue computation, tiered NRC deduction, ring-fenced Elder
   and Care sub-reserves, 30-day remittance, bilancio sociale aggregation. Blocked on
   A6-2 reference rates and the Care/Elder reserve figures.
4. **Network Passport engine.** Cumulative cross-role record, tier evaluation (blocked
   on **OQ7** thresholds), role x tier perk gating (software-enforce the computable
   perks: NRC rate, programme pricing; the recognition perks stay manual), GDPR export
   and erasure.
5. **Real governance.** Role-eligible weighted voting, proposal lifecycle with
   enactment, Elder Council (supermajority, Covenant Signal 30-day response,
   Integrity Review 30-day silence-equals-no-objection, Probiviri), the Venture phase
   state machine, the Demand Register (anonymisation, 30-day review, 6-month flag).
6. **GT-3.1 systems.** Resource allocation, mutual credit, H3 mapping - only after
   **OQ9** defines them.

**Recommendation.** Evolve harvest's substrate; build the domain layer on top in this
order. Treat step 1 as a hard gate. Do not rename or repurpose the existing `scoring` /
`dna` / `council` domains into the Constellation's concepts - they model different
things and the collision is a real risk. Resolve OQ7-OQ9 in parallel so the build is
not blocked on blanks when it reaches steps 2-6.
