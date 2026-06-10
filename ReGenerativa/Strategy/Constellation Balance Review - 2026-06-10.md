---
title: Constellation Balance Review - 2026-06-10
type: strategy
status: active
priority: high
maturity: working
created: 2026-06-10
updated: 2026-06-10
tags:
  - strategy
  - balance-review
  - F1
  - ReGenerativa
---

# Constellation Balance Review

*A full in-depth review of the constellation (reviewed against GT v3.19, A1 v3.8, A2 v3.8, A3 v3.12, A4 v3.6, A5 v3.3, A6 v3.3, A7 v1.8, A8 v1.8, key annexes and companion docs as of 2026-06-10) focused on **balance between the parties**: where the contract architecture leaves one class exposed, over-protected, or without a remedy. Complements [[F1 Pre-Review - Fiscal Notes - 2026-06-10]] (fiscal exposure) - this review is contractual/relational. Companion deliverable: [[Constellation FAQ - Concerns by Agreement - 2026-06-10]], since rewritten as a plain-language signer's guide answering each class's concerns from the post-fix text.*

> **STATUS - APPLIED.** All three fix chunks derived from this review were applied on 2026-06-10 with owner approval (clause text shown in chat first): GT → v3.20, A1 → v3.9, A2 → v3.9, A3 → v3.13, A4 → v3.7 (§5A renumbered: old 5A.3 → 5A.2, old 5A.4 → 5A.3), A5 → v3.4, A6 → v3.4, A7 → v1.9, A8 → v1.9; annexes A2-1, A5-1, A6-3 v1.2, A7-1 v1.2; LGR v1.9 (new LGR-7); Operational Procedures v1.7; Cheatsheet key-numbers synced. Every new clause is marked* (Pending F1)*. The gap descriptions below are retained as the analysis of record; each "fix direction" was implemented as described unless noted. Items X5, X7, A2-G2, A3-G3, A5 network-side, A8-G3 required no edit (resolved by design or by other fixes).*

**Severity key.** **High** = could materially harm a class or be exploited; fix before signature. **Medium** = real but bounded; fix in next drafting pass. **Low** = polish, clarity, or transitional.

---

## 1. Cross-cutting gaps

### X1. The internal remedy body does not exist yet - High (transitional)

Nearly every soft-power check routes to the Elder Council: access-rule review (GT-7.2, Op Proc I.3), internal mediation (GT-7.2), Covenant Signals, Constellation Integrity Review (A8 §5.4(b)), allocation challenge (A8-1 §5.5.7). Until the first Elders exist (5-year bar, 3-year founding waiver per LGR-1), all of this falls to "the Collegio dei Probiviri (if elected)" - which may also not exist. Concretely: **GT and agreement amendments made before the Council is constituted receive no integrity review at all**, and a participant disputing the access rule has no internal forum.

*Fix direction:* a transitional clause (GT-7.2 or LGR) naming an interim review mechanism (e.g. a three-member panel drawn from stewards not party to the dispute) until the Council is constituted.

### X2. Membership exclusion is a backdoor around every role protection - High

A2 §7.4: termination for serious cause suspends eligibility for **all** downstream agreements immediately - "their conditions of validity are no longer met." A Steward holds 30/90-day notice and GT-4.8(b) review-not-removal protections under A3 §16; a Venture Member holds A7 §11 process. All of it can be bypassed by excluding the person as a Member. The fair-procedure and Assembly-appeal rights of A2 §7.3 mitigate, but the asymmetry is structural: the cheapest path to remove anyone from any role is the membership gate.

*Fix direction:* a sentence in A2 §7.4 (or GT-11.4) that where exclusion would terminate a downstream role, the downstream agreement's notice/termination protections still govern the *role wind-down* (handover, notice period, record) even though eligibility is suspended.

### X3. No general conflict-of-interest rule for stacked roles - Medium

GT-11.4 encourages stacking (Member + Steward + Mentor + Owner + Board...), and the rails handle allocator self-dealing (GT-4.5(c)(d); A8-1 §4.5). But there is no general duty to **disclose** multi-role conflicts: an Owner-Steward reports asset damage to themselves (A1 §3.5 / A3 §10.1); a Mentor-Steward consults themselves on the discernment place (A4 §4.5(g)); a Board member who is also a Partner votes on the NRC rate that their Project pays.

*Fix direction:* one GT clause (natural home: GT-11) - any person holding multiple roles discloses the stack where the roles interact, and steps out of confirming/approving their own acts in another role.

### X4. Self-judged immediate termination under GT-6A.1 - Medium

Either party may terminate "with immediate effect" for serious cause, judged by themselves; the other side's only recourse is after-the-fact dispute resolution (GT-7), whose internal limb is X1. For relationship-heavy roles (Steward in residence, Mentor mid-programme), immediate self-judged termination is a heavy unilateral weapon. Already flagged for F1; the balance point is that GT-6A.1 allows individual agreements to "substitute a staged process (suspension and cure) where the relationship warrants one" - but only A7 actually has one (§11.1-11.2).

*Fix direction:* add suspension-and-cure as the default for A3 (resident stewards) and A4 (mid-programme), keeping immediate effect for danger/safety causes only.

### X5. Steward soft-power concentration - Medium

The same steward: confirms Validated Contributions (GT-1.8), sets the hub's Reckoning weights (A1-5), applies the sliding scale and the no-turn-away floor (GT-3A.3/3A.8), and is consulted on the discernment place (A4 §4.5(g)). For a participant, one person largely controls their standing at that hub. Checks exist - GT-3A.9 sensing circle, GT-7.2 review (see X1), seasonal Reckoning revision logged in the Decision Log - but they are all soft, and the review forum is transitional.

*Fix direction:* none structural needed if X1 is fixed; consider requiring a second confirmer for contribution entries above a size threshold.

### X6. Language-prevalence ambiguity (GT-8.3) - Medium

"English drafting; Italian certified translation prevails before Italian courts if produced and signed." Produced by whom, signed by whom? As drafted, a party could commission a translation after a dispute arises and have it prevail. Every class signing the English text is exposed.

*Fix direction:* require the Italian translation to be agreed and signed by **both** parties at (or after) execution to gain prevalence.

### X7. Pending-F1 density on the economic engine - Low (process)

GT-4.3, 4.3A, 4.4A, 4.6, 4.8 and every dependent clause are *(Pending F1)*, yet the agreements read as operative. Anyone signing today is signing an economic engine whose parameters (LGR-2/LGR-5) are provisional. This is a known, managed state - flagged here only because the FAQ must answer it honestly: nothing in the Fund machinery is settled until F1 and Board ratification.

---

## 2. Agreement 1 - Ownership (the Owner, and those who live by the Asset)

### A1-G1. The wear boundary between §3.8 and §4.2 is a dispute seam - High

§4.2 puts "wear and tear beyond ordinary use" on the **Owner** (extraordinary maintenance). §3.8 puts "wear resulting from intensive use by its members, participants, and visitors" on the **Association**. A roof worn out two decades early by hosting 40 retreats a year is *both*. The two clauses point at each other and the annexes (A1-3 §B/C, A1-6) allocate process, not cost.

*Fix direction:* a tie-breaker sentence: wear attributable to the intensity of network use beyond the use profile in Annex 1/Annex 2 follows §3.8; structural aging and defects follow §4.2; doubt resolved by the joint inspection record.

### A1-G2. Community investment is unprotected against a 90-day exit - Medium

The Owner can terminate by notice (§6.1, 90 days, no penalty); approved permanent improvements become the Owner's property with **no compensation** (§3.4, §6.4) except what Annex 4 separately agrees. A community that spent three years restoring a farmhouse can lose place and improvements in one season, with the steward and members holding nothing. This is the comodato bargain - but the constellation should be honest that the protection is reputational/relational, not legal, unless Annex 4 is actually filled in.

*Fix direction:* make Annex 4 mandatory whenever cumulative network investment exceeds a threshold, with an amortisation schedule (unamortised value repaid or notice extended pro rata).

### A1-G3. Steward continuity protected on transfer, not on termination - Medium

§6.3 builds a careful protective bridge when the Owner *sells* (notice chain, 30-day assumption window, steward notice rights). When the Owner simply *terminates* under §6.1, nothing speaks to the Steward at all - A3 continues formally but loses its object. The resident steward of X4/A3-G1 is the exposed person.

*Fix direction:* one sentence in §6.1: on termination by notice, the Association honours the Steward's A3 §16.1 notice period, and the steward-notification mechanics of §6.3 apply mutatis mutandis.

### A1-G4. Owner-side liability residue - Medium (F1 item)

The §3.6 indemnity covers claims "arising from the Association's use." Under Italian law the Owner retains building-ruin liability (Art. 2053 c.c.) and the Owner is named additional insured only "where possible" (§3.3). An Owner lending a structurally old farmhouse carries a real personal-liability tail the agreement softens but does not close.

*Fix direction:* make naming the Owner as additional insured mandatory for real property (not "where possible"), and add proof-of-insurance on an annual push basis rather than "upon request."

### Network-side (about the Owner class)

§2.4 lets the Owner run commercial activities at the Asset outside reserved periods - the boundary with Hub DNA coherence is held only by "do not conflict with the Asset's condition, the Association's schedule, or applicable law." Acceptable; the Hub DNA covenant does not bind the Owner's own commercial guests. **Low** - name it in Annex 2 when the use profile makes it live.

---

## 3. Agreement 2 - Membership (the Member)

### A2-G1. Exclusion backdoor - High

See X2. The Member-specific residue: suspension under §7.1 for "a serious allegation of misconduct awaiting verification" has **no time limit** - a member could sit suspended indefinitely while "verification" never concludes. §7.3's fair procedure applies, but a deadline is missing.

*Fix direction:* suspension pending verification lapses after a stated period (e.g. 60 days) unless the Board converts it to an exclusion procedure under §7.3.

### A2-G2. §4.6 shared responsibility - adequately fenced - resolved, keep an eye

The clause does the balancing itself: "voluntary and proportionate," GT-2.4 no-personal-liability. The remaining risk is social (pressure to chip in), not legal. No change needed; the FAQ answers it plainly.

### A2-G3. Insurance scope is narrower than members may assume - Low

§6.2: outside official volunteer activities the Member is not covered. A member on a contribution-based *stay* (not a volunteer task) is in the gap between A2 §6.1 and the hub's A1 §3.3 third-party cover. Not a drafting defect - an expectations defect.

*Fix direction:* one line in A2-1 Member Onboarding stating what is and is not covered during stays.

---

## 4. Agreement 3 - Stewardship (the Steward)

### A3-G1. Resident-steward housing precarity - High

§12.1/GT-11.5: accommodation is "functional, revocable and conditional"; §16.1 notice is 30 days (90 after 12 months); GT-6A termination is immediate. A live-in steward has deliberately *less* protection than a tenant - that is the design (no tenancy) - but the constellation gives them nothing in exchange on the housing axis: no minimum relocation window distinct from role notice, no hardship bridge (the Elder Council hardship path in §9.3 covers expenses, not housing).

*Fix direction:* a housing-specific sentence in §16.3: where the Steward resides at the Hub, vacating follows a stated humane window (e.g. the full §16.1 notice even on cause-termination, safety cases excepted), and the Association assists in finding interim accommodation within the network.

### A3-G2. Reimbursement is structurally subordinated with no timeline - Medium

§9.3 is good design (reimbursements rank as cost-coverage, ahead of discretionary) - but if the holon's bucket is empty, the Steward's remedy is to "seek top-up" or "request" Elder Council allocation. No deadline, no obligation on the Association to actually make the Steward whole. The unpaid volunteer carrying €400 of fuel receipts is the network's most exposed creditor.

*Fix direction:* valid, pre-approved reimbursements become an Association obligation payable within a stated period (e.g. 60 days) regardless of holon liquidity, recovered by the Association from the holon's future cost-coverage.

### A3-G3. Removal protections - now solid - resolved

GT-4.8(b) (measured balance initiates review, never executes removal; relational conversation first; A3 §16 protections) plus §5A.2 close the homeostat-removal seam reviewed on 2026-06-06/10. Carried here only so the FAQ can answer the concern with confidence.

### Network-side (about the Steward class)

Financial-handling limits (§7), confidentiality (§13), cause list (§16.2) are adequate. The soft-power concentration is X5.

---

## 5. Agreement 4 - Mentorship (the Mentor)

### A4-G1. No payment deadline for the Mentor's share - High

§5.1 routes all money through the Association; §5.3 pays the Mentor "after costs" per the Annex formula - with **no payment timeline anywhere** (A4, A4-1, Op Proc Section C all silent). A6 §10.2 and A7 §7.3 both promise distribution within 30 days; the Mentor - the only class whose livelihood is directly at stake in a Programme - has no equivalent. The Mentor is also paid last in the §5.2 waterfall, which is fine *if* timing is bounded.

*Fix direction:* mirror A6/A7: Mentor share paid within 30 days of Programme completion and accounting reconciliation; record in §5.3 (or A4-1).

### A4-G2. Cancellation remedies are asymmetric - Medium

§10.2 arms the Association against the Mentor's unjustified withdrawal (withhold reimbursements, recover direct costs). Nothing arms the Mentor against the Association's unjustified cancellation - design time, preparation, forgone bookings are uncompensated unless a Programme Annex happens to say otherwise. §7.1's venue-failure path ends in "rescheduled or cancelled... without penalty to either Party," which makes the Mentor's prep a dead loss even when the failure is on the Association's side.

*Fix direction:* a reciprocal sentence in §10: where the Association cancels without justification (not force majeure, not under-subscription per the Annex threshold), the Mentor is reimbursed documented preparation costs up to a capped figure set in the Programme Annex.

### A4-G3. NRC base contradiction on the Resource-cost band - Medium (F1 interaction)

§4.1 closing line: NRC "is deducted at source from each band's revenue." GT-4.4(a) levies NRC on **Net Revenue** (GT-1.9: after direct costs). A Resource-cost slot is priced at direct delivery cost only, so its net revenue is zero - on the GT base it owes nothing, on the §4.1 wording it owes NRC, which either under-funds delivery or forces a margin into the "cost" price. The fiscal pre-review (Item 2) requires cost to be demonstrably cost; the §4.1 wording undermines exactly that.

*Fix direction:* amend §4.1's last line to "deducted per GT-4.4(a) from each band's Net Revenue" - making explicit the Resource-cost band carries none.

### A4-G4. "Same territory" non-compete is undefined - Medium

§11A.1: no independent replication "at a competing location within the same territory" for 12 months. Territory is undefined (the comune? the region? Italy?). An unbounded restraint on a professional's livelihood is both unfair to the Mentor and weakly enforceable.

*Fix direction:* define territory in the Programme Annex per Programme (default: the province of the host hub).

### A4-G5. §5A numbering gap - Low (defect)

§5A jumps 5A.1 → 5A.3; there is no §5A.2. Either renumber or restore the lost clause (history suggests a publication-update clause was merged into 5A.3).

### Network-side (about the Mentor class)

Safeguarding (§8), no independent payment collection (§5.1), gift-economy floor (§1.3A, GT-3A.8) are adequate. The minimum-one-resource-cost-place default protects the network's side of the gift bargain.

---

## 6. Agreement 5 - Sponsorship (the Supporter)

### A5-G1. No reversion path when an earmarked purpose fails - Medium

§3.3: if the destination becomes impossible, the Association "shall consult the Supporter and seek a good-faith reallocation." If the Supporter disagrees, the funds stay with the Association anyway - there is no return-of-unused-funds option in the body (§11.3 defers to "as agreed in Annex 1," but A5-1's default is silent). For a milestone-based or purpose-restricted gift this is the Supporter's main worry.

*Fix direction:* default rule in §3.3 or A5-1: unused restricted funds are, at the Supporter's election, reallocated by agreement or returned, where return is fiscally permissible for the gift's classification.

### A5-G2. Transparency obligation is soft - Low

§6.1 "reasonable transparency... regarding allocation and use" plus the annual bilancio sociale. A large earmarked gift gets no stated reporting cadence. Acceptable for small gifts; for large ones the Annex should set a cadence.

*Fix direction:* A5-1 field: reporting cadence for contributions above a threshold.

### Network-side (about the Supporter class)

The capture risk (a dominant Supporter steering the network through earmarks) is structurally answered: acceptance required (§3.2), no governance/control (§5, §7.3, §12.1), money firewalled out of access (GT-3A.4A). Residual influence is social, not contractual. **Resolved by design** - the FAQ states it.

---

## 7. Agreement 6 - Partnership (the Partner)

### A6-G1. The Association is not a party but is the NRC creditor - Medium (F1 item)

A6 is signed only by Partners; the Association appears as beneficiary of the NRC (§10A) and source of the incorporated GT. If a Vehicle Entity fails to remit, the Association's standing is a third-party-beneficiary claim under a contract it never signed. Italian law (Art. 1411 c.c., contract in favour of a third party) probably carries it, but it should be deliberate, not accidental.

*Fix direction:* either the Association co-signs A6 (limited to §10A + GT incorporation), or §10A expressly states it is a stipulation in favour of the Association under Art. 1411 c.c. with direct enforcement right. F1 should confirm.

### A6-G2. Minority Partner: the same two-thirds that denies validation can exclude - High

Validation disputes resolve by two-thirds majority (§8.3); exclusion needs the same two-thirds (§13.2). A majority bloc can under-validate a Partner's contributions (shrinking their share) and then exclude them for "repeated non-performance" their own validation refusals created. The dispute path is external mediation (GT-7.3) and court - expensive and slow for what is structurally a books-and-records dispute. §8.1's duty to "actively surface" under-logged work and §9.3's ex-ante relational slice mitigate the starvation pattern but not the bloc pattern.

*Fix direction:* validation disputes above a value threshold go to a neutral reviewer (a non-participating Partner, or the Elder Council mediation panel even though inter-entity) before the two-thirds vote is final; an excluded Partner's §16.3 accrued rights expressly include contributions logged but not yet validated, to be resolved by the same path.

### A6-G3. Exit valuation of in-progress work - Low

§16.3 preserves rights "attributable to Validated Contributions made prior to exit" - work logged but unvalidated at exit is in limbo (see A6-G2 fix). One clause settles it.

### Network-side (about the Partner class)

Mission-alignment check at activation (§6.1 "no net harm"), GT-2 incorporation, uniform NRC (fiscal armour per the fiscal pre-review Item 4) are adequate.

---

## 8. Agreement 7 - Intrapreneurship (the Venture Members)

### A7-G1. Emergence consent can be withheld indefinitely - High

§10.2: Emergence "must be agreed in writing by the Association. Neither Party can force Emergence on the other." There are no criteria for refusal, no duty to give reasons (contrast activation, §3.2, which requires written reasons), and no review path. A Phase 3 venture that the Association declines to release stays bound to the 40% network-capacity floor **forever** (§13.2 allows indefinite Phase 3). The venture's only exit is dissolution (§11.3) - destroying the thing they built.

*Fix direction:* mirror §3.2: refusal of Emergence requires written reasons against stated criteria (NRC compliance, obligations settled, demand signal served), refreshed at each annual Phase 3 review; persistent refusal without reasons becomes referable to mediation (GT-7).

### A7-G2. "Capacity" floors have no measurement method - High

The Network-First floors (100%/70%/40%) bind **capacity, not revenue** (§6.3) - but nothing defines how capacity is measured (hours? FTE? engagements?). Phase Reviews (A7-2) and breach calls (§11.1 "materially breaches the Network-First Ruleset") hang on an unmeasurable number. This is the likeliest future dispute in the whole agreement.

*Fix direction:* the Venture Sheet (A7-1) must declare the capacity metric at activation (e.g. member-hours per lunation), and §6.3 points to it.

### A7-G3. Suspension is broad and unheard - Medium

§11.1 lets the Association suspend ecosystem support for, inter alia, conduct "creating legal or reputational risk" - a wide, self-judged ground - with no obligation to hear the Venture first, and 60 days from suspension to termination (§11.2). For a venture that is 100% network-dependent in Phase 1, suspension *is* the sanction. Contrast GT-4.8(b), which guarantees a relational conversation before intervening in a struggling holon.

*Fix direction:* import the GT-4.8(b) pattern: before suspension (immediate safety cases excepted), the Association states the breach in writing and hears the Venture Members; suspension notice states the cure required.

### A7-G4. Phase 1 insurance is unstated - Low

Venture Members working in Phase 1 are covered as members/volunteers (A2 §6) for volunteer activity - but Phase 1 venture work building a quasi-commercial service sits awkwardly in "official volunteer activities" (A2 §6.2). Worth one line in the Venture Sheet.

### Network-side (about the Venture class)

Perpetual NRC (A7-3 §2), IP licence survival (§9.5), recovery of incubation value (A7-3 §6) protect the commons well - arguably the network is the *over*-protected side of A7; the gaps above are all on the venture side. The perpetual, undilutable NRC with no hardship/wind-down provision will also surface in every future acquisition negotiation an Emerged Entity enters; that is a deliberate design choice, but F1 should confirm enforceability of the bylaws-encoding mechanism (A7-3 §2.3).

---

## 9. Agreement 8 - Eldership (the Elder, and everyone an Elder affects)

### A8-G1. Eldership is irrevocable even for serious misconduct - High

§8.4: no termination for cause; "the network does not revoke Eldership." Misconduct is left to GT-7 dispute resolution and the courts. Meanwhile §4.1 hospitality is unconditional: a hub facing an Elder credibly accused of abuse **cannot decline** without consulting the Association and proposing an alternative arrangement - i.e. it must re-home, not refuse, the person. The Emeritus mechanism (§8.5) handles inactivity, not harm. The class this gap exposes is not the Elder - it is every participant at every hub. The reverence is the design; an emergency brake is missing.

*Fix direction:* without touching permanence of *recognition*: a safeguarding-suspension clause - on a credible safety allegation, hospitality and Council participation suspend pending the GT-7 process (mirroring A2 §7.1), with the Elder's record and recognition untouched. Honour stays permanent; access to people does not.

### A8-G2. Hospitality cost is uncapped and falls on individual hubs - Medium

§4.1 hospitality is absorbed hub-by-hub as capacity allows ("genuine capacity" is the only limiter; GT-3A.8's foregone-revenue logic applies). With a handful of Elders this is trivial; with thirty Elders and a popular hub it is a real operating cost no bucket funds (the Council's Operating bucket covers governance, not hospitality - §4.2(a), A8-1 §5.5.2).

*Fix direction:* LGR parameter: above a stated nights-per-lunation level at one hub, Elder hospitality cost is reimbursable from the Council's Allocation bucket as mission spending.

### A8-G3. Council accountability is answer-only - Low (accepted design)

The allocation challenge (§5.5.7) obliges a public answer, never suspends an allocation, and escalates only to a Covenant Signal the Council itself issues. Counterweights: hard rails (GT-4.5), two-thirds quorum on allocation decisions, bilancio sociale, the Voice for the Land role. This is a deliberate trust-the-elders design; recorded here so the FAQ can answer it honestly rather than as a defect to fix.

### Elder-side concerns - resolved

The Elder's own position is the strongest in the constellation: permanent, survives dissolution (GT-13.6), fee waived, only obligation is annual presence (§6.1). The Emeritus transition is reversible and not a sanction (§8.5). No Elder-side gaps found.

---

## 10. Drafting defects (non-balance, fix in next pass)

| # | Where | Defect |
|---|---|---|
| D1 | GT-3.3 | Typo: "conribution tracking" → "contribution tracking" |
| D2 | A4 §5A | Numbering jumps 5A.1 → 5A.3; no §5A.2 |
| D3 | A4 §4.1 | NRC base wording vs GT-4.4(a) (see A4-G3) |
| D4 | GT-3.1 | "up to the association discretion" → "at the Association's discretion"; also lowercase "association" |
| D5 | A1 §3.9 | Plain hyphen used as dash mid-sentence ("re-tune the activation plan - adjusting") - style only, consistent with safe-characters rule, no action unless standardising |

---

## 11. Priority order for the next drafting pass *(all items below applied 2026-06-10 - see STATUS note at top)*

1. **X2 / A2-G1** - exclusion backdoor + suspension time limit (one clause each).
2. **A8-G1** - safeguarding suspension for Elders (protects participants).
3. **A4-G1** - Mentor payment deadline (one sentence).
4. **A7-G1 + A7-G2** - Emergence refusal criteria + capacity metric (one clause + one Venture Sheet field).
5. **A1-G1 + A1-G3** - wear tie-breaker + steward continuity on termination.
6. **A3-G1 + A3-G2** - resident-steward housing window + reimbursement deadline.
7. **A6-G2** - neutral validation review above threshold.
8. **X1** - interim review mechanism until the Council exists.
9. Remaining Mediums/Lows and §10 defects.

All changes touch *(Pending F1)* territory or should themselves be marked *(Pending F1)*; GT edits additionally require explicit owner review per project rule (0.0 §9).

---

*Written 2026-06-10 as part of the constellation balance review session. Companion: [[Constellation FAQ - Concerns by Agreement - 2026-06-10]].*
