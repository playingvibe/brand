# Contributing

Thank you for wanting to make Vibe look better. This repository holds the artwork; the code is in
other repositories.

## Ways to help

- **Suggest a redesign or a better badge** with the *Design proposal* issue, or straight in a pull
  request if it's ready.
- **Report a problem**: an emoji that's unreadable at 20 px, a broken export, a wrong size.

## What a good proposal contains

1. **The image**, in the format of the file it replaces (see below), and the **source file** (SVG or a
   layered file) so it can be edited later. Say which tool you used.
2. **A before and after at real size**: at 20 px and at 64 px, on Discord's dark theme (`#313338`) and
   its light theme (`#ffffff`). The contact sheets in [`gallery/`](gallery/) show how the current set
   reads.
3. **Why it's better**: what problem it solves.

## Formats

Run `node scripts/check-assets.js` before opening a pull request; CI runs it too.

- **Emoji** (`emojis/`): square PNG on transparency. The glyphs are 512×512 near-white (`#E8E8E8`),
  the badges are 128×128 and the avatar emoji 1024×1024. The **file name is the key the bot looks it
  up by**, so keep it. Discord shows them at about 20 px, so fine detail is lost: judge it small.
- **Badges** (`emojis/badge_*`): five metal tiers per track (bronze, silver, gold, ruby, diamond) that
  stay distinguishable at 20 px and read on the rank card's dark background.
- **Logos, banners, Activity images:** the sizes Discord requires (avatar, 680×240 banner at 2×,
  1024×576 Activity images). Many of these are drawn from the gradients and the V, so a change to
  those changes several images.
- **Consistency beats novelty.** One icon that breaks from the set looks like a mistake; a whole set
  that changes together looks like a decision. If you propose a new style, propose it for all of it.

## Rules for what you submit

- **Your work stays yours; you license it.** By opening a pull request you confirm that you made the
  work (or have the right to submit it) and you license it under this repository's
  [licence](LICENSE), so it can be used in Vibe.
- **No third-party marks or characters**: no other company's logo, no cartoon or meme character, no
  font or icon you don't have a licence for. Icons from an open set (for example Phosphor, MIT) are
  fine if you name the set.
- **Say if any part is AI-generated.** It doesn't disqualify a proposal, but it affects what rights
  exist in it, so it has to be known.

## Review

I review every pull request, and a design has to work at emoji size, on dark and on light, before it
counts. Accepted changes are copied into Vibe, derived images are regenerated, and emoji are uploaded
to Discord, so it can take a little while to show up.

## Conduct

Everyone taking part follows the [Code of Conduct](CODE_OF_CONDUCT.md).
