import {
  type CurrentUserResponseAPIModel,
  type OtherUserProfileResponseAPIModel,
  type UserProfileResponseAPIModel, type UserStatsAPIModel
} from '../types/api-models'

export const apiContext = 'mytexas42api'

export const CONNECTION_STATES = {
  connecting: 'Connecting',
  open: 'Open',
  closing: 'Closing',
  closed: 'Closed',
  uninstantiated: 'Uninstantiated'
}

export const defaultUserStats: UserStatsAPIModel = {
  gamesplayed: 0,
  gameswon: 0,
  roundsplayed: 0,
  roundswon: 0,
  totalpointsasbidder: 0,
  totalroundsasbidder: 0,
  totalpointsassupport: 0,
  totalroundsassupport: 0,
  totalpointsascounter: 0,
  totalroundsascounter: 0,
  timeswinningbidtotal: 0,
  timescallingsuit: 0,
  timescallingnil: 0,
  timescallingsplash: 0,
  timescallingplunge: 0,
  timescallingsevens: 0,
  timescallingdelve: 0
}

export const defaultProfileData: UserProfileResponseAPIModel = {
  id: '',
  username: '',
  email: '',
  displayname: '',
  friends: [],
  incomingrequests: [],
  stats: defaultUserStats
}

export const defaultOtherProfileData: OtherUserProfileResponseAPIModel = {
  id: '',
  username: '',
  displayname: '',
  isfriends: false,
  isrequestsent: false,
  stats: defaultUserStats
}

export const defaultUserData: CurrentUserResponseAPIModel = {
  exists: false,
  attributes: {
    email: 'default@email.com',
    emailverified: false,
    sub: '12345'
  },
  username: ''
}

export const EMPTY_MEMBER_TEXT = '--empty--'

export const GAME_STAGES = {
  IN_GAME_LOADING: 'in-game loading',
  IN_GAME_STAGE: 'in-game',
  LOADING_STATE: 'loading',
  LOBBY_LOADING: 'lobbies loading',
  LOBBY_STAGE: 'lobbies',
  NEW_GAME_LOADING: 'new-game loading',
  NEW_GAME_STAGE: 'new-game'
}

export const INVITE_CODE_LENGTH = 6

export const ITEMS_PER_PAGE = 4

export const MAX_CHAT_LENGTH = 50

export const requireLoginPages = ['/profile']

export const SERVER_MESSAGE_TYPES = {
  chat: 'chat',
  gameError: 'game-error',
  gameUpdate: 'game-update'
}

export const RULES_PAGES = {
  about: 'about',
  terminology: 'terminology',
  setup: 'setup',
  suits: 'suits',
  trumps: 'trumps',
  scoring: 'scoring',
  bidding: 'bidding',
  normalRules: 'normal-rules',
  exampleRound: 'example-hand',
  variants: 'variants',
  forcedBid: 'forced-bid',
  oneMark: 'one-mark',
  twoMark: 'two-mark',
  nil: 'nil',
  nilDoublesHigh: 'nil-doubles-high',
  nilDoublesLow: 'nil-doubles-low',
  nilDoublesOwnSuit: 'nil-doubles-own-suit',
  splash: 'splash',
  plunge: 'plunge',
  sevens: 'sevens',
  delve: 'delve',
  acknowledgements: 'acknowledgements'
}
