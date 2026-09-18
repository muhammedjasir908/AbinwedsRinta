# Reference-Inspired Wedding Invitation

## Changes
- Rework the opening screen around a full-viewport portrait of Abin and Rinta, matching the reference’s soft editorial composition without copying it exactly.
- Place the couple’s names, wedding date, live countdown, and “Open Invitation” action directly over the photograph with a delicate double-line frame.
- Replace the current dark palette with the reference-inspired blush ivory, muted rose, warm gold, and deep ink theme across the full invitation.
- Restyle the invitation sections, portrait frames, decorative rules, and falling petals to feel consistent with the new opening cover while preserving all names, dates, venues, photos, and links.
- Verify the opening and full invitation on mobile and desktop for image cropping, text contrast, and clean spacing.

## Technical details
- Use the newly prepared vertical couple portrait as the cover background with responsive `object-cover` positioning and layered semantic overlays.
- Reuse the existing countdown logic in a compact overlay variant on the opening screen.
- Update semantic design tokens and shared utilities in the global stylesheet rather than adding isolated colors.
- Preserve reduced-motion behavior and existing section reveal animations.
