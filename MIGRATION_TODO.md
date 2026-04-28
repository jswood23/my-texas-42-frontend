# MyTexas42 Frontend — Migration Gap Spec

Hand-off doc for finishing the React port from `../my-texas-42-react-app/frontend` to this repo. Pair with `CLAUDE.md` (architecture overview).

The legacy frontend is a working baseline and the rules engine is fully exercised there; the new frontend already covers most of it. The work here is **completing rule coverage, adding missing UX surfaces, and cleaning up shims**. Backend contract changes are tracked in `../my-texas-42-backend/MIGRATION_TODO.md`; this doc focuses on the client.

---

## P0-A. Re-enable commented-out rule variants

**File:** `src/constants/rules.ts`

The rule list currently has **only** `"No forced bid"` and `"Forced 31 bid"` active. Lines 17–59 (approximate) have these commented out:

- `"Forced Nil"`
- `"2-mark Nil"` / `"Nil"`
- `"2-mark Splash"` / `"Splash"`
- `"2-mark Plunge"` / `"Plunge"`
- `"2-mark Sevens"` / `"Sevens"`
- `"Delve"`

Each rule entry has `name`, `description`, `excludes` (rules that conflict), and `requires` (rules that must also be on). Restore them so the New Game rule picker shows them.

The legacy file `../my-texas-42-react-app/frontend/src/constants/rules.ts` has the canonical descriptions, exclusions, and requirements — port verbatim.

**Acceptance:** all variants appear in `NewGame` page; selecting `"Splash"` requires the corresponding 2-mark variant; `"Nil"` and `"Forced Nil"` are mutually exclusive (verify against legacy `excludes` list).

---

## P0-B. End-of-hand and end-of-match screens

Currently the game has no terminal state UX. When a round ends the next deal happens silently; when the match ends nothing distinct happens.

**Where to slot it in:** `src/pages/play/in-game/game-window/index.tsx` — add a new local stage between game and the next deal, gated on a `gameState` field the backend sets at round end (e.g. `current_round_winner: 1 | 2 | null` and a `match_winner` analogue).

**End-of-hand screen** should display:

- Winning team name + which player bid + bid amount + whether they made it
- Round score breakdown (points per team) and resulting marks change
- Total marks after the round
- "Continue" button (disabled for ~3s to let players see it; auto-advances after 10s)

**End-of-match screen** should display:

- Winning team
- Final marks
- Per-player breakdown (rounds won, bids made, points scored)
- "Return to Lobby" + "Rematch" buttons

These need backend support — coordinate with `../my-texas-42-backend/MIGRATION_TODO.md` items P0-A (engine round/match transitions) and P1-B (stat aggregation).

---

## P0-C. Server message field-name alignment

The backend currently sends camelCase fields on some payloads (it's mid-refactor). The `ServerMessage` interface in `src/types/index.d.ts` already uses snake_case (`message_type`, `game_data`). Confirm by capturing one game session's `/ws` traffic and checking every key. Any camelCase that slips through must be fixed on the **server** side (P0-B in the backend doc) — don't add a per-key migration shim on the client.

`current_round_rules` continues to arrive as a **JSON-stringified** `RoundRules` and gets parsed in `GameWindow`; that's intentional.

---

## P1-A. Eliminate `any`-typed shims

Hot spots (rough lines):

- `src/pages/users/login/index.tsx` — error catch blocks (`err: any`)
- `src/pages/users/signup/index.tsx` — same pattern
- `src/pages/users/edit-profile/index.tsx` — same
- `src/utils/user-utils.ts` — Amplify-era helpers, mostly dead code
- `src/utils/api-utils.ts` — request body type is `any`
- `src/router.tsx` — `globals` consumers cast through `any` in places
- `src/pages/play/in-game/game-window/show-player-options/*` — option lists typed as `any[]`

**Spec:** define a `ApiError` type (`{message: string, code?: string}`), narrow `unknown`-typed catches with type guards, and parameterize `ApiUtils.post<T>` etc. Component prop types live alongside the component.

A single follow-up sweep should leave the repo with **zero** `: any` in source files (codebase scan). Add an ESLint rule (`@typescript-eslint/no-explicit-any: error`) once the cleanup is done.

---

## P1-B. Wire up tests

`src/App.test.tsx` has the CRA boilerplate test searching for "learn react link" — broken. `src/setupTests.ts` is empty.

**Spec:**

1. Replace the smoke test with one that mounts `<App />` and asserts the Navbar renders.
2. Add component tests for the high-leverage pure render units:
   - `Domino` — given pip values, renders the right number/positions of circles.
   - `ShowBids` — given a round history, places each bid in the right corner.
   - `GameNumberPicker` — increments / decrements with arrow clicks; respects min/max.
3. Add an integration test for `GameWindow` that feeds it a sequence of mock `lastMessage` values and asserts state transitions and rendered text.
4. Add a test that runs the full bidding → calling → first-trick sequence against a `react-use-websocket` mock with canned server responses.

Use `@testing-library/react` (already installed). No need for Jest config changes.

---

## P1-C. Strip debug console output

```
src/pages/users/login/index.tsx              "right here officer"
src/pages/play/index.tsx                     console.log on connection-state error
src/pages/play/new-game.tsx                  console.log of error
src/pages/play/in-game/game-window/lobby-waiting-screen.tsx   team-member dump
src/pages/users/profile/index.tsx            multiple
src/pages/users/profile/profile-friends.tsx  error dumps
src/pages/users/edit-profile/index.tsx       error dumps
```

**Spec:** delete the `console.log` and replace error logs with `globals.openAlert(err.message, 'error')` where the user should see them, or `console.error` (only) for things they shouldn't. Add an ESLint rule (`no-console: ["error", {allow: ["error", "warn"]}]`) afterwards.

---

## P1-D. Error boundary

There's no `ErrorBoundary` anywhere; an unhandled render error blanks the page. Add one wrapping `<RouterElements />` in `App.tsx` that renders a "Something went wrong, refresh to retry" view and reports to `globals.openAlert`.

---

## P1-E. Settings panel (sound, theme, accessibility)

The legacy frontend has no settings panel either, but it's been mentioned as a pending feature.

**Spec:** new route `/settings` (auth-gated). State persisted in `localStorage` under `settings` key:

```ts
type Settings = {
  soundEnabled: boolean         // future, no-op until P2-A
  reduceMotion: boolean         // disables domino animations
  highContrast: boolean         // swaps theme palette
  fontSize: 'small'|'medium'|'large'
}
```

Wire `reduceMotion` into `Domino` and `ShowDominoes` to skip the deal/play animations. Wire `fontSize` into the styled-components theme.

---

## P2-A. Sound effects

Add audio cues for: deal, your turn (subtle), domino played by another, trick won, round over, match over. Source either freesound.org CC0 clips or commission. Files go in `src/sounds/` (new). Gate on the `soundEnabled` setting from P1-E.

## P2-B. Lobby reconnect UX

The 2-second timeout in `pages/play/index.tsx` that surfaces "Lobby not found" is a hotfix. Replace with a proper reconnect strategy:

- Show a "Reconnecting…" overlay when WS state is `CLOSED` while a game is active.
- Auto-retry up to 3 times with backoff.
- After failed retries, fall back to the lobby list with a clear error.

The team-connection booleans (`team_1_connected`, `team_2_connected`) already arrive on `game-update` — surface them visibly (a dot next to disconnected players' names).

## P2-C. Reduce code duplication in form pages

`login`, `signup`, `edit-profile`, and the password-change panel all reimplement the same `validateField` plumbing. Extract into a `useForm` hook (`src/hooks/use-form.ts`) and a `<FormField>` component.

## P2-D. Game history viewer

`UserStatsAPIModel.gamesplayed` is shown on the profile page but there's no viewer for individual matches. The backend stores `MatchArchive` + `RoundArchive`; once those are populated (`../my-texas-42-backend/MIGRATION_TODO.md` P1-B), add `/profile/games/:matchId` that fetches and renders the round-by-round breakdown.

## P2-E. Mobile polish

`react-device-detect` is used to branch layout in a few places, but the in-game UI assumes a wide aspect ratio and the dominoes overflow on phones. Either gate the in-game route behind a "this works best on desktop" notice, or build a portrait-mode layout (probably stacked: hand below, opponents above, no chat sidebar — chat in a drawer).

## P2-F. Accessibility

- Add `aria-label`s to every `GameButton` (currently text-only).
- Replace turn-indicator emojis (`🡆 username 🡄`) with `aria-current="true"` + a non-emoji visual cue.
- Tab order through bidding / calling buttons.
- Color-blind safe domino palette as a setting (the existing 6-color suit palette has red+green pairs that fail the deuteranope test).

---

## Reference: legacy frontend

When in doubt about UX or rule rendering, look at:

- `../my-texas-42-react-app/frontend/src/pages/play/in-game/` — the entire in-game UX
- `../my-texas-42-react-app/frontend/src/constants/rules.ts` — full rule descriptions + exclusion graph
- `../my-texas-42-react-app/frontend/src/pages/play/in-game/game-window/show-player-options/` — bidding/calling/play option layouts

The new frontend's component split is roughly identical, so most legacy components have a 1:1 counterpart here. Differences are mostly auth (Amplify gone, JWT in localStorage) and the WebSocket data envelope (snake_case server, slash-delimited move strings).
