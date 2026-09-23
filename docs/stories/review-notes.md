# Review notes on the work stories

Comments and suggestions on `Unifying_Payment_UI_Across_Walmart.com.docx.md` and
`Bringing_WIC_Benefits_Online.docx.md`. Nothing here has been applied to the story
docs or to the site — the pages were built from the docs as written. These are
editorial observations for you to accept, reject, or park.

Ordered roughly by how much each one would change a reader's impression.

---

## 1. Facts to reconcile or confirm before this is public

**Four surfaces or six?** The Walmart story says the Wallet component "replaced four
separate payment form implementations" across Checkout, Walmart+ Membership, Buy Now,
and Subscriptions. `lib/data.ts` (the home-page impact card) says the reusable
components were "used across Checkout, Walmart+, Pharmacy, Cart, Account, and
Subscriptions." Both can be true — replaced four, adopted by six — but as written the
site states two different scopes on two different pages. Worth picking one framing.

**Claims a hiring manager may probe.** These are the strongest statements in the two
docs, and the ones most likely to be asked about in an interview:

- "passed PCI audit without blocker findings"
- "supported millions of daily checkouts"
- "one of the first implementations of its kind for a major retailer" (this one is in
  the *old* `/work` page copy, not in the WIC doc — see §5)

Each is a good claim if you can stand behind it and are comfortable stating it publicly
given the confidentiality line both docs carry. Flagging because the docs assert
non-proprietary framing and then make outcome claims that are specific enough to be
checked.

**Attribution.** WIC handles this well: "backend benefit processing and state program
decisions remained with their respective teams and stakeholders." The Walmart doc has
nothing equivalent, and it sits next to "Led information-security submissions for PCI
compliance across web and mobile" followed by an audit result. One sentence bounding
what was yours versus the payments org's would make the whole doc read as more
credible, not less.

## 2. The numbers are missing, and they're the thing that sells this

Across ~4,000 words there are two quantities: "four" and "millions of daily checkouts."
Everything else is directional — "reduced duplication," "made later payment-method work
more reusable," "reduced the impact of transient verification failures." A staff-level
case study is where numbers belong. Candidates, if you have or can reconstruct them:

- How long a new payment method took to add before vs. after the shared component
- Number of surfaces migrated, and over what period
- Lines/files/components deleted at migration
- Transient verification failure rate before vs. after retry handling
- Accessibility defects found pre-release vs. in production
- WIC: which state(s), pilot volume, how many states followed

If a number can't be shared, an ordinal still beats an adjective — "cut a multi-sprint
integration to a configuration change" says more than "made later work more reusable."

## 3. Both docs read as the same template

Identical section skeletons, identical "At a glance" row sets, three numbered
"Decision N" blocks each, and two "What I learned" sections that use nearly the same
rhetorical move ("I would preserve X … I would also explore stronger contract testing").
Read back to back — which is exactly what the `/work` index invites — the shape is very
visible, and templated structure reads as generated.

Cheapest fixes, in order:

1. Vary the "What I learned" endings. Both currently end on contract testing.
2. Drop or consolidate the **Confidentiality** row. It appears in both tables with
   near-identical wording, and on a portfolio it reads defensively. A single line in the
   `/work` intro would cover both stories.
3. Let one story have four decisions and the other two, if that's what's true. Three and
   three is a tell.

## 4. Language that's costing you specificity

A sample of phrases that occupy space without adding information:

| Phrase | Problem |
| --- | --- |
| "accommodate meaningful differences without turning into a collection of one-off conditions" | Two abstractions describing an idea you could show with one example |
| "coordinates verification through the established payment service boundary" | This is the most technically interesting step in the flow and it says nothing |
| "supported rollout and production monitoring using operational telemetry" | You mean Splunk dashboards and alerts — say so |
| "The work crossed product boundaries, so the technical design alone was not enough" | True of all frontend platform work |
| "resisting abstractions that hide meaningful policy differences" | Keep this one. It's the best line in either doc |

The Walmart workflow table is where this matters most. Stage 3 abstracts away bounded
retries, idempotency, and the retryable-vs-terminal error distinction — the part that
demonstrates payments judgment. Naming the mechanism at whatever level you're free to
name it would materially strengthen the doc.

## 5. Things the docs lost that the old `/work` page had

The previous inline copy had details the ChatGPT drafts dropped. Since the inline copy
is now gone, these are gone from the site:

- **"one of the first implementations of its kind for a major retailer"** (WIC) — the
  single most differentiating sentence in the old copy.
- **"transportation barriers or mobility challenges"** framing — the WIC doc has a
  longer version, so this survived.
- **Badge list drift.** The old Walmart badges included *A/B Experimentation* and
  *PCI DSS*; the doc's technology row omits both, so the site no longer shows them. The
  WIC badges gained *GraphQL* and lost *Cross-Team Collaboration*. Tech
  badges now come from `lib/stories.ts` → `technologies`; edit there.

## 6. Per-story notes

### Unifying Payment UI Across Walmart.com

- The lede says "replaced separate payment form implementations." Put the number there —
  "replaced four separate implementations" — rather than holding it for the outcome.
- Side-panel vs. embedded layouts are introduced as a constraint and then never resolved.
  Did both ship? In which surfaces?
- Decision 2's title, "Render fields from payment context," is vaguer than its body.
  Something like "Detect the card type and render only the fields it needs" matches what
  you actually did.
- Migration mechanics are absent. Feature flags? Shadow traffic? Surface-by-surface
  rollout with a kill switch? "Without requiring a single high-risk cutover" states the
  goal, not the method — and the method is the interesting part for a platform role.

### Bringing WIC Benefits Online

- Decision 1 is the strongest passage in either doc — eligibility explained where the
  customer decides, not at the payment step.
- The reader never sees the UI. One concrete detail ("each eligible line item carries a
  text label reading *WIC eligible*, not a colored dot") would make the accessibility
  argument land instead of assert.
- The accessibility section lists good practices with no evidence. The Walmart doc names
  Mock Service Worker and Splunk; this one says "automated frontend testing." Name the
  tools — jest-axe, eslint-plugin-jsx-a11y, screen readers actually tested with.
- Outcome has no scale at all: no state, no date, no volume, no count of the "subsequent
  state rollouts" it says it enabled.
- "Program and validation messages written to explain status and next action" — did you
  write that copy, or partner with UX content? Reads as yours; make sure that's intended.

## 7. The thing that would most raise credibility

Neither story contains a setback. No assumption that broke, no rollback, no rule from a
state agency that invalidated a model mid-build, no performance regression caught in
canary. Both read as plans that executed. Real payments work at this scale does not go
that way, and experienced reviewers know it.

One honest complication per story — what surprised you, what you had to undo, what you'd
have caught earlier — would do more for these than any amount of additional polish.
The "What I learned" sections are the natural home for it and currently use that space
for forward-looking tooling wishes instead.

## 8. Site-level follow-ups (not built)

- **Sequoia/Siemens** currently renders as a card on `/work` marked *Story in progress*,
  with no page behind it. It needs a doc or it should come off the index.
- **On-this-page nav.** The story pages are long (nine sections). A sticky table of
  contents on `lg` and up would help; skipped for now to keep the first pass simple.
- **Per-story OG images.** `app/opengraph-image.tsx` covers the site; story links shared
  to LinkedIn will all show the same card.
- **A metrics strip** under the story lede — three numbers in large type — would be the
  single highest-impact visual addition, once §2 has answers.
