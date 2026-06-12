# Gather &amp; Co Kitchen &amp; Bath — Design System

A warm, established, high-craft design system for **Gather &amp; Co Kitchen &amp; Bath**, a premium family-owned home-remodeling company serving Greater Waco, TX (est. 1998). The brand voice is *artisan homebuilder meets approachable local expert* — trustworthy, residential, editorial, and hand-crafted, never templated or corporate.

> **Tagline:** "Crafting Kitchens, Beautifying Baths, Creating Connections."
> **Promise:** "Transforming Houses Into Homes."

---

## Company &amp; Product Context

Gather &amp; Co is a remodeling company built on the craftsmanship of the **Faulkenbery Family**. Services span the whole home, inside and out:

- **Bathrooms** — full remodels, showers, baths, bath conversions
- **Kitchens** — full kitchen remodels
- **Outdoor living** — pergolas, patio covers, screen rooms, sunrooms, outdoor spaces
- **Aging in place** — accessibility-focused remodels (walk-in baths, grab bars, zero-threshold showers)

The primary digital product is the **marketing website** (lead generation via "Get Free Quote" forms, service pages, reviews/testimonials, FAQ). This system is built to produce on-brand web pages, landing pages, service cards, review modules, quote forms, and printed/branded collateral.

### Sources reviewed

- `uploads/gather-co-logo.png` — a full screenshot of the live Gather &amp; Co website homepage (header, navigation, hero "Transforming Houses Into Homes", and the "Get Free Quote!" form). The brand logo was cropped from it into `assets/logo-on-teal.png`. The screenshot is the source of truth for the real color usage (deep teal header, sage-green CTA, white hero serif), navigation structure, and the lead-capture pattern.

No codebase or Figma file was provided. Visual decisions below are anchored to the screenshot + the written brand brief; where the brief and the live site diverge (e.g. typeface), the brief's *intent* wins and the divergence is flagged.

---

## Index / Manifest

**Foundations**
- `styles.css` — root entry; consumers link only this. Imports the four token files below.
- `tokens/colors.css` — full palette + semantic aliases. **No pure black, ever.**
- `tokens/typography.css` — Newsreader (display) + Mulish (body) families, scale, line-heights.
- `tokens/spacing.css` — 8px spacing scale, radii, warm shadows, motion.
- `tokens/base.css` — light element reset wiring tokens to the document.

**Specimen cards** (Design System tab) — `cards/*.html`, grouped Colors / Type / Spacing / Brand.

**Components** (`window.GatherCoDesignSystem_*`) — each is a `.jsx` + `.d.ts` + `.prompt.md`, with one `@dsCard` per directory:
- `components/core/` — **Button** (sage / teal / clay / outline / ghost) · **Badge** (warm pill labels)
- `components/forms/` — **Input** (text / textarea / select, sage focus ring) · **QuoteForm** (the signature floating lead-capture card)
- `components/content/` — **ServiceCard** · **TestimonialCard** (brass ★) · **StatBlock** + **FeatureBlock** · **Accordion** (FAQ)
- `components/layout/` — **Footer** (deep-teal, CTA strip + columns + contact)

**UI kit** — `ui_kits/website/` — interactive recreation of the Gather &amp; Co marketing homepage (`index.html`) built from the primitives: `SiteHeader`, `HeroSection`, `ContentSections` (services, trust strip, "why us", reviews, FAQ, contact).

**Assets** — `assets/logo-on-teal.png` (logo lockup) · `assets/hero-pergola.jpg` (hero photo crop from the source screenshot).

**Skill** — `SKILL.md` — makes this folder usable as a downloadable Agent Skill.

---

## CONTENT FUNDAMENTALS — how copy is written

**Voice:** Warm, confident, neighborly, and craft-proud. We speak as a long-established family business that genuinely cares. Reassuring without being salesy; premium without being stiff.

**Person:** Second person, customer-centered — *"your home," "your family," "let's bring your vision to life."* The company refers to itself as "we" and "the Gather &amp; Co family." Avoid corporate "the client."

**Casing:** **Title Case for headlines** is the brand's signature (e.g. *"Transforming Houses Into Homes," "Get Free Quote!"*). Sentence case for body and UI labels. **Never ALL-CAPS for headings.** Small all-caps appears ONLY inside the logo lockup tagline and is not a copy device elsewhere.

> **STRICT RULE:** No eyebrow / kicker / overline text. Never place a small uppercase label above a heading. Every section title begins directly with the heading itself.

**Tone examples (use these as models):**
- Hero: *"Transforming Houses Into Homes"* → followed by a plain-spoken subhead: *"Gather &amp; Co: the premier home remodeling team in Greater Waco."*
- CTA buttons: short, friendly imperatives — *"Get Free Quote," "Free Quote," "Start Your Project," "Schedule a Visit."*
- Service blurbs: lead with the homeowner's outcome, then the craft. *"A bathroom you'll actually look forward to — designed around how your family lives, built by people who've done it for 25 years."*
- Trust language: lean on heritage and family — *"Family-owned since 1998," "Built by the Faulkenbery family," "Greater Waco's remodeling team."*

**Punctuation &amp; vibe:** Warm and human. The friendly exclamation is allowed sparingly on CTAs ("Get Free Quote!"). Em dashes for asides. No jargon, no buzzwords, no growth-hacky urgency.

**Emoji:** Never. Not part of the brand.

**Numerals:** Spell out the heritage proudly — "since 1998," "25+ years," "5-star rated." Star ratings render as ★ glyphs (see Iconography).

---

## VISUAL FOUNDATIONS

**Overall feel:** Editorial, residential, premium. Airy with generous whitespace. Warm paper-like backgrounds, deep teal anchor panels, sage-green calls to action, and small brass/clay accents that read like fixtures and finishes. Think a beautifully art-directed home magazine, not a SaaS dashboard.

### Color
- **Primary — Deep teal-navy `#1A4A63`** (`--teal-700`): headers, deep section panels, primary buttons, the logo field. The most "Gather &amp; Co" color.
- **Secondary — Sage/olive `#8AAE5D`** (`--sage-500`): the hero CTA color, accents, links-as-buttons, success. This is the energetic counterpart to the teal.
- **Warm neutrals** carry the page: `--sand-100 #F5F1E8` (page bg), `--cream-50 #FAF7F0` (soft bg), warm white `#FEFCF8` (cards). **Never** a cool/gray background.
- **Body text is warm taupe**, never black: `--taupe-700 #4A4A40` for body, `--taupe-600 #6B6557` for muted. Darkest ink is `--ink-900 #1C2A30`, a desaturated teal-charcoal.
- **Accents used sparingly:** terracotta/clay `#C97B5A` (warm highlights, tags, illustration accents) and brass/gold `#B89B5E` (rating stars, fine rules, premium ticks).
- **Pine/forest** greens add depth for the darkest green panels.
- Imagery is **warm-toned** — golden-hour daylight, natural wood, soft shadows. Avoid cold blue-cast or heavy b&amp;w. A subtle warmth/grain over photos fits; harsh saturation does not.

### Type
- **Display:** Newsreader — a warm transitional serif, semibold, tight tracking, balanced wrapping. Used for all headings and pull quotes. (Substitution flag — see Typography note below.)
- **Body/UI:** Mulish — humanist sans, regular/medium, **relaxed 1.65 line-height**, comfortable 66ch measure.
- Pairing rule: serif headline + sans body. Never set body copy in the serif; never set big headlines in the sans.

### Spacing &amp; layout
- **8px scale** everywhere; section vertical rhythm is generous (96–128px). Content max ~1200px; prose/forms ~760px.
- Layout is calm and grid-aligned with real breathing room. No edge-to-edge density.
- Hero and feature sections may use **full-bleed warm photography** with a teal scrim; the lead-capture form floats as a raised card over the image (mirrors the live site).

### Corners, borders, dividers
- **Soft rounded corners**: cards `18px`, buttons `pill` or `12px`, inputs `8–12px`, large panels `24–32px`.
- Borders are **warm**, never gray: `--border-default #DAD1C0`. Dividers are hairline warm lines (`#E6DFD0`).

### Shadows
- **Gentle, warm-tinted** shadows built on teal-charcoal alpha (not neutral black). Cards use `--shadow-md`; floating forms/modals use `--shadow-lg`/`--shadow-xl`. No hard or neon drop shadows. Inset wells use a faint inner shadow for inputs.

### Motion
- Calm and crafted. `--ease-out` (no bounce), 140–380ms. Fades and gentle 4–8px rises on reveal. Hover lifts a card 2px with a slightly deeper shadow.

### Hover &amp; press states
- **Buttons:** hover → one step darker brand color (`--brand-*-hover`) + faint lift; press → darkest step (`--brand-*-press`) + settle (no scale, or a subtle 0.99 settle). Outline buttons fill softly with the brand tint on hover.
- **Cards/links:** hover → 2px rise + `--shadow-lg`; image zoom 1.03 inside a clipped frame; title shifts to brand color.
- **Inputs:** focus → sage focus ring (`--shadow-focus`) + border to brand.

### Transparency &amp; blur
- Used lightly: a teal scrim (`rgba(26,74,99,0.55)`) over hero photos for legibility; optional subtle backdrop-blur on sticky headers. Avoid glassmorphism as decoration.

---

## ICONOGRAPHY

No proprietary icon font or SVG set was found in the provided material (the source is a single website screenshot). The system therefore standardizes on **[Lucide](https://lucide.dev)** — a clean, humanist, consistent **1.75–2px stroke** open-source set whose rounded line style matches the warm, approachable brand. **Flagged as a substitution** until the client's real icons (if any) are supplied.

- **Style:** outline / stroked, never filled-solid blocks. Stroke `1.75px` at 24px, rounded line caps/joins. Color icons with `currentColor` so they inherit text color (teal, sage, or taupe by context).
- **Load:** via CDN — `https://unpkg.com/lucide@latest` (or `lucide-react` in JSX kits). Use sparingly: nav affordances, service-card markers, contact/phone/mail, checkmarks in feature lists, chevrons in accordions.
- **Star ratings:** rendered as the Unicode glyph **★ / ☆** colored brass (`--star-filled`) for a warm, editorial review look (see TestimonialCard).
- **Emoji:** never used.
- **Decorative botanicals:** the logo's laurel/olive sprigs are a brand motif; reuse the logo asset rather than redrawing. Do not hand-author new decorative SVG illustrations.

---

## Typography substitution note (action needed)

The live site's exact webfonts were not provided. This system uses **Newsreader** (display) + **Mulish** (body) from Google Fonts as close matches to the brief's intent (refined residential serif + clean humanist sans). **If you have the brand's licensed fonts, send them** and we'll swap the `@font-face` sources in `tokens/typography.css` for a 1:1 match.
