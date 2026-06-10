---
title: Membership as Stewardship and the Common Reservoir - 2026-05-30
type: strategy
status: proposal
priority: high
maturity: working
created: 2026-05-30
updated: 2026-06-02
tags:
  - strategy
  - fund
  - governance
  - proposal
  - ReGenerativa
---

# Membership as Stewardship and the Common Reservoir

*Proposal only. Nothing in the vault changes until decided, and no agreement or GT clause is edited until the F1 legal/fiscal review gate is cleared. This note develops one question to its conclusion and records the design and drafting approach the dialogue converged on. It carries forward the same `tanh` shape, the same hard rails, and the same F1 posture worked out earlier in the design process, now unified into a single self-similar model — one loop applied at every level.*

---

## The question

What happens to the constellation if **membership = stewardship** - if every member holds a mandate to steward a project or hub, and there are many stewards per holon?

Pulled all the way through, the answer is not a small edit to two agreements. It is a different way of being a member, and it asks for a way of running each holon's money that is alive in time. This note sets out that model, judges whether it makes sense, and proposes how to land it in language everyone can understand.

---

## The whole idea, in plain English

Today Membership (A2) is the gateway and Stewardship (A3) is a separate, scarcer role held by some members. The proposal dissolves that line into a **gradient**: stewardship is simply the high-contribution region of membership. The more you tend a place, the more say you hold over how its discretionary money is directed - up to a real cap, never as personal income, and never as a vote in the Association.

A hub is run by several co-stewards. Together they hold a *delega di spesa* (delegated spending authority) over the hub's discretionary envelope, **split in proportion to contribution** as each holon tracks it internally. Each hub then runs as a small self-regulating organism: it heals its own shortfalls first, shares its lasting surplus upward, and is caught by the network when it genuinely cannot cover itself. When a hub stays in trouble, a clear, measured clause lets the network re-tune it, and only as a last resort change who stewards it.

The Elder Council sits at the centre as a **common reservoir**: healthy hubs feed it, struggling hubs draw from it, and what remains funds its **Mission Allocation** - the uncapped, mission-directed spending that builds shared infrastructure across hubs.

---

## The model

### 1. Membership = stewardship, as a gradient

Allocation authority is a continuous function of contribution. Low contribution means near-zero allocation power (in practice, "just a member"); high contribution means a meaningful share (in practice, "a steward"). There is no binary line to cross. A hub is run by N co-stewards holding a collective *delega* split proportional to contribution.

Three separations keep this honest:

1. **Political-equal vs economic-weighted.** Governance of the Association stays one member, one vote. Only the *administration* of delegated resources inside holons is contribution-weighted.
2. **Lifetime-cumulative vs active.** The lifetime contribution record drives access (sliding-scale pricing, the Network Passport). A faster-moving, recent measure drives allocation authority, so long-past contribution does not ossify into permanent power.
3. **Network-portable vs hub-local.** Access is portable across the whole network. Allocation authority is local: you direct money where you have actually tended.

### 2. The hub as a homeostat over lunations

Track one number per hub: `B`, its carried cost-coverage balance, rolled across lunations. `B > 0` is banked reservoir; `B < 0` is carried shortfall. Each lunation settles in priority order:

1. **NRC off the top** to the Association (network metabolism), per GT-4.4(a).
2. **Cost-coverage** - heal the place first.
3. **Discretionary** - the co-stewards' envelope, contribution-weighted.
4. **Overflow** - what remains rises to the Elder Council.

When `B < 0`, the discretionary envelope is **throttled in proportion to how deep the shortfall is** (not switched hard off), and the shortfall is **spread forward** across coming lunations rather than clawed back in one painful month.

### 3. One curve, three knobs

The whole hub is a single `tanh` saturation - the same curve already used in the Unified Fund note - now applied to the carried balance `B`:

- **`C`** - the cost-coverage target (where the curve centres).
- **`alpha`** - a single, symmetric stiffness. It does triple duty: how sharply surplus saturates, how steeply discretion throttles on a shortfall, and how fast a shortfall is worked off. The "recovery pace" is not a separate parameter; it is `alpha` seen in the time domain.
- **`n`** - the hard band edge. This is the one thing a `tanh` does not provide (it only approaches its target asymptotically), so it is overlaid as a clamp.

### 4. The band [ -nC , +nC ] and its two saturations

Inside the band the hub is sovereign. At the edges it saturates into the network:

- **Top edge ( +nC ): give.** Surplus overflows to the Elder Council. Because saturation is soft, overflow begins gradually before the edge - there is no "park just below the line" exploit.
- **Bottom edge ( -nC ): absorb.** The network covers the shortfall so the place does not die, and this is what trips the governance clause.

### 5. The governance clause - rule-based, graduated, complete

Crossing `-nC` is a **measured** event, not a judgement of character. That is its great virtue: it makes intervention in a stewardship - normally the most toxic act in any commons - contestable against a number rather than a person. The levers, gentlest first:

1. **Raise `C`** - "we under-funded you." Generous; requires deliberate judgement.
2. **Reduce `n`** - "we over-trusted you." Strict; can be a reflex.
3. **Adjust `alpha`** - change the recovery temperament.
4. **Recompose, then remove** the stewards - last resort.

These levers are exactly the full parameter set of the curve (re-centre `C`, re-stiffen `alpha`, re-bound `n`): nothing else about the shape is tunable, so the toolkit is complete by construction. One asymmetry runs through all of it: **tightening can be automatic; loosening must be deliberate**, so generosity cannot be gamed. Behavioural shortfalls (overspending) heal themselves through the inner throttle and never reach the clause; only structural shortfalls (lost revenue) sink to `-nC` and engage it. The band edge is therefore also the diagnostic boundary between "can self-heal" and "needs help."

### 6. Sovereignty as a graded, earned, retractable variable

Autonomy peels back one ring at a time as `B` sinks, and is re-earned in reverse as it recovers:

- `B < 0` - lose discretionary spend (the homeostat).
- `B <= -nC` - lose control of your own setpoints (`C`, `alpha`, `n` pass to the network).
- persistent despite re-tuning - lose the role.

And `n` itself widens with track record: a new hub is held closely, a hub that proves stable earns a wider band and lighter oversight.

### 7. The Elder Council as common reservoir

The upper band feeds the very pool the lower band draws from. Healthy hubs overflow upward; struggling hubs are absorbed from the same pool; whatever is left builds across-hub infrastructure. Feeding the Council is, in effect, paying the premium on the insurance that catches you when you fall - self-interested generosity, not charity. This reaches the goal an earlier tithe idea aimed at, but by **incentive rather than tax**. The Council is itself a holon running the same shape: it honours absorb-claims (its cost-coverage) before its **Mission Allocation** (its uncapped discretionary, which builds shared infrastructure across hubs), and it is terminal.

### 8. Three non-overlapping returns on feeding up

- **Mutual insurance** - your overflow funds the `-nC` pool that catches you. (Selected.)
- **Earned autonomy** - reliable overflow widens your `n`. (Selected.)
- **Recognition (resolved)** - rewards the *choice* to restrain (voluntary, early feed-up, not the forced overflow at the edge), measured as *proportional restraint* (capped, so wealth cannot buy standing), recorded in the Passport as network-level contribution on the lifetime-cumulative/access reading. It raises **standing** - access priority and the Eldership-eligibility clock - but confers **no allocation voice and no governance vote**. Distributed among co-stewards by their local share, and self-balancing: starving your own place to farm standing drops your local contribution, which is what distributes the credit. *(Originally proposed as "network-tier standing" - a voice in Council allocation - but that collided with the Council's elder-based composition; resolved 2026-06-01 as recognition only. See "Resolved seam" below.)*

### 9. A worked example (one holon, one lunation)

Concretely, take a hub that records €5,000 of activity in a lunation, with cost target `C = €3,000`, NRC at 5%, and band edge `n = 3` (so the sovereign zone is ±€9,000):

1. **NRC off the top** - €250 leaves for the network. €4,750 remains.
2. **Cover `C`** - €3,000 heals the place. €1,750 surplus remains.
3. **Allocation right within the band** - the co-stewards direct the €1,750 by the hub's own value system. As long as the carried balance `B` sits inside ±€9,000, the hub is sovereign over this spend.
4. **Overflow past the band** - nothing this period, since `B` is well inside the band. In a sustained rich run, once `B` would climb past +€9,000 the excess rises to the Elder Council / common reservoir; in a sustained lean run, once `B` sinks past -€9,000 the same reservoir covers the shortfall.

The Elder Council runs this identical loop one level up - cover its own operating cost, then spend the rest as uncapped Mission Allocation - and is terminal. (Well inside the band the `tanh` curve is effectively linear, so the split reads as a simple priority waterfall; the curve's saturation only bites near the edges ±nC.)

---

## Does it make sense

**Internally, yes, and continuously.** It is the self-similar allocation principle already committed to (the GT-4 unification) run two levels deeper: the same `tanh` now governs the per-period split, the cross-period band, and the Council. Its strongest property is legitimacy-through-measurement.

**The legal joint holds, by structure not by drafting trick.** A2 and CTS Art. 23 require the Association to be governed democratically, with equal treatment of members. That is preserved: **one member, one vote at the Association.** Holons are delegated units; contribution-weighting is administration of delegated resources, which a democratically governed APS-ETS may delegate with differential internal authority (a treasurer lawfully holds more spending authority than a member without breaching equality). The statute already commits the network to tracking **contribution and needs** - and the homeostat is exactly a contribution-and-needs reconciliation engine: contribution is the give/top edge, needs is the absorb/bottom edge. The model fulfils a commitment the statute already makes rather than inventing a new one. One light requirement follows: the delegation framework that lets holons self-track must itself be adopted by the Assembly.

**A useful separability.** The dynamics (homeostat, band, give/draw reservoir) and the franchise (contribution-weighted *delega*) are independent. The dynamics are legally safe and independently valuable; the weighting is the contested part. The first can be adopted without the second.

---

## Honest flags

- **F1 - legal/fiscal review is the hard gate.** As in the Unified Fund note, no GT or agreement clause is edited until the Association's legal/fiscal advisor has framed the flows. Particular attention: that every place the model differentiates members is *administration of delegated resources*, never governance or voting; and that no flow is personal income.
- **Operability and legibility.** This is a sophisticated control system. The risk is that it is mathematically elegant and socially unintelligible. The drafting approach below is the mitigation: members consent to understandable guarantees, not to equations.
- **Maturity and scale.** The apparatus assumes hubs with real surplus/shortfall dynamics. It is overkill for a near-zero-cash volunteer hub. Phase it in by hub maturity; treat it as a target architecture.
- **The ledger as a power instrument.** Making contribution drive allocation (not only access) raises the stakes on contribution measurement. Decentralising it (each holon tracks value internally; the network Passport stays for access) keeps the high-stakes judgement at holon scale rather than in one global scoreboard, but it remains a real operational burden that needs insulation and an appeal path.
- **Resolved seam - the Elder Council (2026-06-01).** The "network-tier standing" return was the one unresolved design point: giving heavy reservoir-feeders a *voice in Council allocation* collided with the Council's honorific, elder-based composition (qualify by long contribution, nomination, Transition Rite). Resolved as **recognition only**: feeding up is recorded in the Passport as network-level contribution on the lifetime-cumulative/access reading - raising access standing and the Eldership-eligibility clock (LGR-1) - but conferring **no allocation voice and no Council seat**. Generosity is seen and remembered, never enfranchised; the one-member-one-vote Assembly and the elder Council are both untouched. Implemented in GT-4.8(d), LGR-5 §E, and A8 §4.2A.

---

## How to put it in the contract

The drafting question - fix the model, or stay flexible; be clear, or be specific - is a false choice once the layers are separated. The principle:

> The contract guarantees the **properties**. A revisable Resolution specifies the **mechanism** that delivers them. Members consent to promises they can understand, not to equations.

**Three layers:**

1. **Constellation / GTC (constitutional).** The principles, the member guarantees, and the requirement that an Allocation Model exists and honours the rails. Names the model's *character* in plain words (medium depth) so members grasp what they enter, but keeps the math out.
2. **Living Governance Resolution (association policy).** The actual homeostat - `tanh`, band, clause, and parameters (`C`, `alpha`, `n`, lunation cadence, upward-return rates). Adopted and revised by the Assembly, one member, one vote. This is "the model agreed upon at the association level."
3. **Holon-internal.** Each holon's own value-tracking method, within the frame.

**Illustrative GTC clause (sketch only; final framing awaits F1):**

> **GT-X - Resource allocation.**
> (1) The Association keeps a single Fund. Resources within and between holons are allocated by the **Allocation Model** adopted by the Assembly and recorded as a Living Governance Resolution.
> (2) No Allocation Model may suspend these guarantees:
> (a) **need first** - real operating needs are met before any discretionary allocation;
> (b) **subsidiarity** - within mandate and ceiling, the holon decides, with no higher pre-approval of in-scope spend;
> (c) **two-part purpose** - every allocation serves both the holon's mandate and integral regeneration;
> (d) **no self-dealing, no personal income** - no allocator allocates to their own benefit; no flow is a profit distribution;
> (e) **mutual aid** - a holon in genuine shortfall is supported by the network; a holon in lasting surplus contributes to it;
> (f) **the floor holds** - the access-floor guarantees (GT-3A.8) are never reduced by any Model;
> (g) **transparency** - every flow is recorded and consolidated in the bilancio sociale.
> (2-bis) The Model is a need-first, mutual-aid allocation that meets a holon's genuine shortfall and shares its lasting surplus across the network.
> (3) Each holon determines, within this frame, how it tracks value-aligned contribution internally and directs its discretionary envelope.
> (4) Governance of the Association remains one member, one vote. The Model governs the administration of delegated resources, not the governance rights of members.
> (5) The current Model and its revision procedure are set out in the relevant Resolution; every member is entitled to it in plain language.

Clause (2) is what members actually consent to: seven plain promises. Clause (2-bis) gives them the shape in a sentence. Clause (4) is the legal anchor restated in one line. Clause (5)'s plain-language entitlement is what makes the sophistication legitimate - the math may live in the Resolution, but a member can always demand it in words.

---

## Document map (if and when adopted, behind F1)

- **This Strategy note** - the design of record. (Done.)
- **GTC GT-4** - extend: GT-4.3 *delega* becomes plural and contribution-weighted; GT-4.4 gains lunation settlement, the `B` balance, the band, the soft-`tanh` throttle, and the give/draw framing; GT-4.5 rails gain the graduated clause and the tighten-auto / loosen-deliberate asymmetry; GT-4.6 already delegates `alpha` and per-holon parameters, extend it to the holon value-tracking method. Add the GT-X allocation clause.
- **A2 Membership** - light touch: one member, one vote untouched; reframe "gift time guided by the Hub Steward" toward peer/self-guided; point to the Model for administration.
- **A3 Stewardship** - fused into A2 as the high-contribution expression, or rewritten plural ("a weighted constellation of faces").
- **GT-3A / Network Passport** - split lifetime-cumulative (access) from active (authority), and portable (access) from hub-local (authority); reconcile "no tiers" by ranking administration only, never access or dignity.
- **A8 / Elder Council Charter** - add the common-reservoir and infrastructure role; resolve or explicitly defer the network-tier-standing seam.
- **Living Governance Resolutions** - home for the Model and its parameters.
- **Decision Log** - one entry.

---

## Decision needed

1. **Adopt the layered approach** - guarantees in the constellation, the Model in a Resolution, value-tracking in the holon - at **medium depth** (guarantees plus character named in the contract, math in the Resolution)?
2. **Adopt the homeostat as the first Allocation Model** under that frame, or hold it as one candidate among others?
3. **Decide the franchise question separately** - adopt the dynamics now (legally safe), and treat contribution-weighted *delega* as a later, F1-reviewed step?
4. **Resolve or defer the Elder Council seam.**
5. **Authorise F1** before any GT or agreement edit.
