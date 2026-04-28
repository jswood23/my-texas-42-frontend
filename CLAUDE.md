# my-texas-42-frontend

React + TypeScript client for MyTexas42, a multiplayer Texas 42 domino game. Talks to `../my-texas-42-backend` over REST + WebSocket. Replaces the AWS-Amplify-based client in `../my-texas-42-react-app/frontend`.

**Status:** Most surfaces are ported. Several rule variants are commented out in `constants/rules.ts`. End-of-hand and end-of-game UX are absent. See `MIGRATION_TODO.md`.

## Stack

- **React 18 + TypeScript** (Create React App / `react-scripts`)
- **React Router v6** with auth-gated routes
- **styled-components** + **MUI v5** (the `@mui/styled-engine-sc` shim makes MUI use styled-components under the hood)
- **react-use-websocket** for `/ws`
- Custom **fetch**-based REST client in `src/utils/api-utils.ts` — no Amplify, no axios. JWT in `localStorage` under key `token`.
- **No state library** — global state is a `GlobalObj` prop drilled from `RouterElements` (in `src/router.tsx`).

## Layout

```
src/
├── App.tsx, index.tsx, router.tsx       # Root + global state + protected routes
├── constants/
│   ├── config.ts                        # Env-driven API + WS URLs (dev/staging/production)
│   ├── game-constants.ts                # Default GameState, MOVE_TYPES, GAME_RULES
│   ├── rules.ts                         # Rule definitions — several variants are commented out
│   └── theme.ts                         # styled-components theme; mobile-aware spacing
├── types/
│   ├── index.d.ts                       # GameState, RoundRules, ChatMessage, GlobalObj, WebSocketConnection
│   └── api-models.ts                    # *APIModel types — REST request/response shapes
├── utils/api-utils.ts                   # get/post/put/del + setToken
├── shared/                              # Domino, GameButton, GameNumberPicker, GameSpinner,
│                                          Navbar, PageContainer, SnackbarAlert, ConfirmUserForm
└── pages/
    ├── home/, rules/                    # Static pages
    ├── users/login, signup, profile, edit-profile
    └── play/
        ├── index.tsx                    # Stage orchestrator (LOBBY → NEW_GAME → IN_GAME)
        ├── lobbies.tsx, lobby-card.tsx, new-game.tsx
        └── in-game/
            ├── index.tsx                # Layout: GameWindow + ChatBox
            ├── chat-box.tsx
            └── game-window/
                ├── index.tsx            # WS message routing → setGameState / chat / alert
                ├── game-display.tsx
                ├── lobby-waiting-screen.tsx
                ├── show-dominoes.tsx, show-bids.tsx, show-team-info.tsx,
                │   show-player-info.tsx, show-game-messages.tsx
                └── show-player-options/
                    ├── show-bidding-options.tsx
                    ├── show-calling-options.tsx
                    └── show-play-button.tsx
```

## Backend contract

REST base URL + WS URL come from `constants/config.ts`, which selects on `REACT_APP_ENVIRONMENT`. JWT goes in the `Authorization` header on every REST call (set automatically by `ApiUtils`).

```
POST   /users/login                      → {message, token}
POST   /users/signup
POST   /users/{username}/confirm
POST   /users/{username}/resend-confirmation
GET    /users/current                    → CurrentUserResponseAPIModel
PUT    /users/profile                    (auth) — display name
PUT    /users/password                   (auth)
GET    /users/{username}                 (auth) — own or other profile
POST   /friends/{username}               (auth)
DELETE /friends/{username}               (auth)
GET    /games                            (auth) — public_games, private_games, in_game?
POST   /games                            (auth) → {invite_code, team_number}
```

WebSocket connect query string: `match_invite_code`, `team_number`, `username`, `sub`.

**Inbound** message envelope (snake_case — diverges from the old client which was camelCase):
```ts
{ message_type: 'game-update' | 'chat' | 'game-error',
  message?: string, username?: string, game_data?: GameState }
```

**Outbound** actions:
- `refresh_player_game_state` (no data)
- `play_turn` — `data` is a slash-delimited string, **not** JSON: `"bid/42"`, `"call/Nil"`, `"play/2-3"` (changed from the legacy `JSON.stringify({move, moveType})`)
- `send_chat_message` — `data: JSON.stringify({username, message})` (≤50 chars)
- `switch_teams` (no data, only valid before round 0)

`current_round_rules` arrives as a **JSON-stringified** `RoundRules`; `GameWindow` parses it before storing in state. Don't double-parse.

## Run / build

```bash
yarn install
yarn start         # dev server on :3000 (or whatever CRA picks)
yarn build         # production bundle
yarn test          # currently a single broken stub test
```

Env vars (set via `.env.development` / `.env.production` or `mytexas42-compose`):

```
REACT_APP_ENVIRONMENT=dev|staging|production
REACT_APP_DEV_API_PATH, REACT_APP_STAGING_API_PATH, REACT_APP_PRODUCTION_API_PATH
REACT_APP_DEV_WEBSOCKET_API_PATH, REACT_APP_STAGING_WEBSOCKET_API_PATH, REACT_APP_PRODUCTION_WEBSOCKET_API_PATH
```

## Conventions

- Filenames are kebab-case; component identifiers are PascalCase. One component per file as `index.tsx` inside its own folder.
- Styling: prefer styled-components from `theme.ts`. Reach for MUI for Snackbar / form fields / Material widgets only.
- Game UI is **absolutely positioned** inside a fixed-aspect frame; coordinates flow through helpers in `pages/play/in-game/game-window/utils/`. Don't change the frame size without updating the position helpers.
- Domino tiles are **SVG circles**, not images. Suit colors live in `theme.palette.domino`.
- Global state is mutated only by `RouterElements` callbacks (`setGameState`, `setUserData`, `openAlert`). Components consume via the `globals: GlobalObj` prop.
- Connecting to a lobby = setting `socketUrl`; disconnecting = setting it back to `null`.

## Known gaps

- `constants/rules.ts` has Forced Nil / Nil / Splash / Plunge / Sevens / Delve commented out. The backend lobby creation accepts whatever rule strings the client sends.
- No end-of-hand or end-of-match screen.
- Many `any`-typed shims (validation result objects, error handlers, several Amplify-era hangovers).
- Stray `console.log`s — see `pages/users/login/index.tsx`, profile pages, `play/new-game.tsx`.
- `App.test.tsx` checks for "learn react link" — broken stub.
- No error boundary, no offline UX, no sound, no settings panel.
- Edit profile + change-password forms duplicate validation logic with signup/login.

See `MIGRATION_TODO.md` for the full porting checklist.
