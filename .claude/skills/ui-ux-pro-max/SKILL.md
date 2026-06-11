# UI/UX Pro Max - Design Intelligence Overview

## Purpose

This is a comprehensive design reference system for web and mobile UI/UX development, covering 50+ styles, 161 color palettes, 57 font pairings, 161 product types, 99 UX guidelines, and 25 chart types across 10 technology stacks.

## When to Use

Apply this skill for tasks involving "UI structure, visual design decisions, interaction patterns, or user experience quality control." Skip it for pure backend logic, API design, or non-visual work.

## Core Priority Framework (1-10)

1. **Accessibility (CRITICAL)** — Contrast ratios, keyboard navigation, alt text, ARIA labels
2. **Touch & Interaction (CRITICAL)** — 44×44px minimum targets, 8px+ spacing, loading feedback
3. **Performance (HIGH)** — Image optimization, lazy loading, layout stability (CLS < 0.1)
4. **Style Selection (HIGH)** — Match product type, consistency, SVG icons (not emoji)
5. **Layout & Responsive (HIGH)** — Mobile-first, systematic breakpoints, no horizontal scroll
6. **Typography & Color (MEDIUM)** — 1.5–1.75 line-height, 65–75 char line length, semantic tokens
7. **Animation (MEDIUM)** — 150–300ms duration, transform/opacity only, respect reduced-motion
8. **Forms & Feedback (MEDIUM)** — Visible labels, error placement, progressive disclosure
9. **Navigation Patterns (HIGH)** — Bottom nav ≤5 items, predictable back behavior, deep linking
10. **Charts & Data (LOW)** — Legends, tooltips, accessible color pairs, pattern supplementation

## Common Professional Standards

- No emoji as structural icons; use vector-based icon families
- Minimum 44×44pt interactive area for touch targets
- Pressed-state visuals must not shift layout bounds
- All semantic color tokens mapped per theme
- Maintain 4/8dp spacing rhythm
- Support reduced-motion and dynamic text scaling
- Keyboard navigation and focus states on all interactive elements
