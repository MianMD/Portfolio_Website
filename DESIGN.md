---
name: The Screening Room
tokens:
  colors:
    base: "#100E0C"
    surface: "#1A1714"
    surfaceRaised: "#211D18"
    border: "#2E2A25"
    borderStrong: "#443E36"
    textPrimary: "#F3EEE7"
    textSecondary: "#A69C8E"
    textMuted: "#6E6558"
    tertiary: "#E2A33B"
    error: "#C1523A"
    success: "#8FA24C"
    warning: "#E2A33B"
  typography:
    fontDisplay: "General Sans"
    fontMono: "IBM Plex Mono"
    scaleRatio: 1.25
    sizes:
      xs: "12px"
      sm: "14px"
      base: "16px"
      lg: "20px"
      xl: "25px"
      "2xl": "31px"
      "3xl": "48px"
      "4xl": "72px"
    weights:
      regular: 400
      medium: 500
      bold: 700
    tracking:
      display: "-0.02em"
      label: "0.08em"
  spacing:
    base: "8px"
    scale: [4, 8, 16, 24, 32, 48, 64, 96, 128]
  rounded:
    none: "0px"
    sm: "2px"
  elevation:
    none: "none"
  motion:
    durationFast: "150ms"
    durationBase: "220ms"
    easing: "cubic-bezier(0.22, 0.61, 0.36, 1)"
omitted:
  - section: elevation
    reason: "Shadows are excluded by direction; depth is conveyed by tonal surface steps and hairline borders only, never blur/shadow"
components:
  nav:
    backgroundColor: "{colors.base}"
    textColor: "{colors.textSecondary}"
    font: "{typography.fontMono}"
  button-primary:
    backgroundColor: "{colors.base}"
    textColor: "{colors.textPrimary}"
    borderColor: "{colors.border}"
    rounded: "{rounded.none}"
  button-primary-hover:
    backgroundColor: "{colors.base}"
    textColor: "{colors.tertiary}"
    borderColor: "{colors.tertiary}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.textSecondary}"
    borderColor: "{colors.border}"
    rounded: "{rounded.none}"
  project-card:
    backgroundColor: "{colors.base}"
    textColor: "{colors.textPrimary}"
    rounded: "{rounded.none}"
  project-card-hover:
    backgroundColor: "{colors.base}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.none}"
  tag:
    backgroundColor: "{colors.surfaceRaised}"
    textColor: "{colors.textSecondary}"
    rounded: "{rounded.sm}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.textPrimary}"
    borderColor: "{colors.border}"
    rounded: "{rounded.none}"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.textPrimary}"
    borderColor: "{colors.error}"
    rounded: "{rounded.none}"
  footer-credit:
    backgroundColor: "{colors.base}"
    textColor: "{colors.textMuted}"
    font: "{typography.fontMono}"
---

# The Screening Room

## Overview

This is a portfolio for a video editor, motion designer, and 3D animator whose audience is agencies and software houses deciding, in the first few seconds, whether the work is good enough to hire. The reference point is the Vimeo Staff Pick portfolio: a private screening room, not a marketing page. The room stays dark and quiet so the reels are the only thing that's loud. Nothing here is decorative — every element either shows the work or labels it.

The one sacrifice this direction makes: it gives up warmth, playfulness, and any sense of "personality" delivered through UI flourish. Personality comes entirely from the reels and the case-study writing, not from the chrome around them. An agency scrolling this site should feel like they're alone in a screening room with the lights down, not browsing a website.

## Colors

The base (`#100E0C`) is a warm, near-black charcoal — not pure `#000000`. Pure black next to bright video thumbnails creates harsh contrast flicker as footage cuts; a warm charcoal lets the eye rest between clips the way a real screening room's walls do. `surface` and `surfaceRaised` step up in warmth and lightness for cards and raised panels, giving depth without a single shadow.

Text runs on the same warm axis: `textPrimary` (`#F3EEE7`) is a projector-screen off-white, `textSecondary` a tinted warm grey for credits and captions, `textMuted` for the least important type (footer, timestamps).

`tertiary` (`#E2A33B`) is the sole accent — a film-leader amber, the color of countdown numbers on old film stock. It has exactly one job: marking interactivity (link hover, active nav item, hover state on a project card). It never appears as a background fill or decoration, and it covers well under 5% of any screen. `error` and `success` are pulled from the same warm family (a muted brick and a muted olive) rather than stock red/green, so an error state still feels like it belongs in this room.

## Typography

Two typefaces, split by job rather than by weight. `General Sans` (open-source, Fontshare) is the voice — used for the hero line, section headers, and project titles. `IBM Plex Mono` is the label — used for nav items, roles, dates, and tag chips. The mono choice isn't decorative: it's a direct nod to timecodes and metadata on an editing timeline, which is the one piece of "personality" this otherwise-quiet system allows itself.

The scale uses a 1.25 ratio for restraint through the body sizes, then breaks that ratio deliberately at the top: the hero size (`72px`) is hand-tuned larger than the pure ratio would produce, because the hero line is the one place this site is allowed to be loud. Display sizes carry slightly negative tracking (`-0.02em`) to stay tight and confident; mono labels carry positive tracking (`0.08em`) so short all-caps words like `DIRECTOR` or `2024` read as labels, not sentences. Only two weights are used — `400` and `700` — kept far apart so the contrast reads as a decision.

## Layout

Spacing runs on an 8px base. The grid is deliberately asymmetric: a slim left-hand column carries the mono nav and metadata, while the work itself — video thumbnails and stills — runs large and right-weighted, full-bleed where possible. Margins are generous; this is a "let it breathe" layout, not a dense one. Nothing competes with the reels for attention, including navigation, which stays small and monospace at all times.

## Elevation & Depth

No shadows anywhere in this system — see `omitted`. Depth is conveyed only through tonal steps between `base`, `surface`, and `surfaceRaised`, and through 1px hairline borders (`border`, `borderStrong`). This keeps the room flat and calm the way a real screening room is: light comes from the screen, not from glowing UI panels.

## Shapes

Radius is functionally zero. `rounded.none` (`0px`) applies to every structural element — cards, buttons, video frames, inputs. The only exception is `rounded.sm` (`2px`) on small tag chips, just enough to soften a dense row of metadata labels without introducing a second "roundedness" language. Sharp corners on everything else keep the site reading as a screening room and case-study archive, not a consumer app.

## Components

Buttons and project cards share one rule: the resting state never uses the accent color — only the hover state does. This makes the amber genuinely mean something ("this is interactive right now") instead of decorating everything equally. `button-primary` and `project-card` sit on `base` with a hairline border; on hover, the border and text shift to `tertiary` and nothing else moves — no scale, no shadow, no color-fill. `input-error` swaps the border to the warm `error` tone rather than a stock red, so a validation state still belongs to this palette. `footer-credit` stays in mono and `textMuted`, kept deliberately quiet since it's the least important text on the page.

## Do's and Don'ts

- Do keep the accent color to hover/active states only — a resting amber anywhere is a bug, not a feature.
- Do use mono type for anything that's metadata (roles, dates, tags, nav) and General Sans for anything that's a title or sentence — never mix the two jobs.
- Do let video/image thumbnails run full-bleed with generous surrounding space; don't crop the grid tight to fit more projects per row.
- Don't add a drop shadow to cards, buttons, or the video player to "lift" them — use the tonal surface steps instead.
- Don't round any corner beyond `rounded.sm`, and never round a video frame or full-width button.
- Don't animate anything beyond the single approved rule: opacity fade-in (`durationBase`, `easing`) as content enters the viewport. No scale-on-hover, no parallax, no bounce.
- Don't introduce a second accent color, even for a "featured" project — use type weight or extra space to signal importance instead.
- Don't use pure black or pure white anywhere; every neutral in this system carries the same warm tint.
