---
name: The Screening Room — Daylight Cut
tokens:
  colors:
    base: "#F6F3ED"
    surface: "#EDE8DE"
    surfaceRaised: "#E3DDCF"
    border: "#D8D0BF"
    borderStrong: "#BFB49D"
    textPrimary: "#1C1815"
    textSecondary: "#5C5347"
    textMuted: "#8C8272"
    tertiary: "#B5701E"
    error: "#A6432B"
    success: "#5F7A2E"
    warning: "#B5701E"
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
    borderColor: "{colors.textPrimary}"
    rounded: "{rounded.none}"
  button-primary-hover:
    backgroundColor: "{colors.textPrimary}"
    textColor: "{colors.base}"
    borderColor: "{colors.textPrimary}"
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
  stat:
    backgroundColor: "{colors.base}"
    textColor: "{colors.textPrimary}"
    font: "{typography.fontDisplay}"
  stat-label:
    textColor: "{colors.textMuted}"
    font: "{typography.fontMono}"
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

# The Screening Room — Daylight Cut

## Overview

This is a revision of "The Screening Room," moving the same portfolio from a dark room into daylight — same quiet, work-first philosophy, same restraint, but now on a warm paper-white ground instead of a warm near-black one. The brief that prompted this: switch to a light background, keep sharp corners, keep the energy quiet and minimal, and borrow one structural idea from a reference site — a stats bar (years of experience, brand partnerships, disciplines) — without adopting that reference's louder tone.

The sacrifice stays the same as before: no shadows, no rounded corners, no second accent color, no scale-on-hover. What's different is the canvas color, not the temperament.

## Colors

`base` (`#F6F3ED`) is a warm paper white — the light equivalent of the previous warm near-black, chosen for the same reason: pure white next to bright video thumbnails is harsh, while a warm off-white lets footage sit comfortably in the frame. `surface` and `surfaceRaised` step down in lightness for cards and raised panels.

Text inverts the previous relationship: `textPrimary` is now a warm dark charcoal (`#1C1815`) rather than a warm off-white; `textSecondary` and `textMuted` step up in lightness for captions and the least important type.

`tertiary` (`#B5701E`, a deeper ochre than the dark-mode amber) keeps the exact same job as before: it marks interactivity only, on hover/active states, and never sits at rest as a background or decoration. It was deliberately darkened from the dark-mode value so it still holds enough contrast against a light ground — the color's *meaning* stayed fixed while its *value* adjusted for the new background, which is the correct way to port an accent across a light/dark flip.

## Typography

Unchanged from the original direction: `General Sans` for titles and voice, `IBM Plex Mono` for labels, roles, dates, and now also the stats bar's numbers-and-labels, since a stat is metadata before it's a headline.

## Layout

Unchanged structurally, with one addition: a stats bar sits directly under the hero — three entries only (years, brand partnerships, disciplines), no invented metrics. Numbers use the display face at a mid-large size; labels sit below in mono, matching the nav and project-meta treatment elsewhere on the page. The bar uses the same 8px spacing scale and hairline borders as every other section — it's a data moment, not a banner ad.

## Elevation & Depth

Still no shadows — see `omitted`. Depth is now tonal steps from light to slightly-less-light (`base` → `surface` → `surfaceRaised`) instead of dark to slightly-less-dark, plus the same 1px hairline borders.

## Shapes

Radius stays at zero everywhere except `rounded.sm` on tag chips, unchanged from the original direction. Sharp corners were an explicit choice to keep, not a default.

## Components

`button-primary` now inverts colors on hover (charcoal fill, paper-white text) instead of the previous dark-mode "border and text turn amber" hover — because on a light background, a full charcoal fill reads as the equivalent depth cue that amber-on-dark did. `stat` and `stat-label` are new: numbers in the display face at `{typography.sizes.3xl}`, labels in mono beneath at `{typography.sizes.xs}` with label tracking. Every other component keeps its original job, just recolored for the light ground.

## Do's and Don'ts

- Do keep the accent color to hover/active states only, at its new deeper value — a resting ochre anywhere is still a bug.
- Do keep the stats bar to real, stated numbers only — never round up or invent a metric.
- Do use mono type for anything that's metadata (roles, dates, tags, stats labels, nav) and General Sans for titles or sentences — never mix the two jobs.
- Don't add a drop shadow anywhere, even now that the background is light and shadows would technically "read" better — the direction excludes them on principle, not on legibility grounds.
- Don't round any corner beyond `rounded.sm`.
- Don't adopt a bold/punchy tone in the copy just because the reference site was punchy — the brief asked to keep this quiet and minimal.
- Don't use pure white (`#FFFFFF`) or pure black anywhere; every neutral stays on the same warm tint as the original direction.
