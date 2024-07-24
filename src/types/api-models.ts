export interface LoginResponseAPIModel {
  message: string
  token: string
}

export interface CurrentUserResponseAPIModel {
  exists: boolean
  attributes: {
    email: string
    emailverified: boolean
    sub: string
  }
  username: string
}

export interface UserStatsAPIModel {
  gamesplayed: number
  gameswon: number
  roundsplayed: number
  roundswon: number
  totalpointsasbidder: number
  totalroundsasbidder: number
  totalpointsassupport: number
  totalroundsassupport: number
  totalpointsascounter: number
  totalroundsascounter: number
  timeswinningbidtotal: number
  timescallingsuit: number
  timescallingnil: number
  timescallingsplash: number
  timescallingplunge: number
  timescallingsevens: number
  timescallingdelve: number
}

export interface UserProfileResponseAPIModel {
  id: string
  username: string
  email: string
  displayname: string
  friends: string[]
  incomingrequests: string[]
  stats: UserStatsAPIModel
}

export interface OtherUserProfileResponseAPIModel {
  id: string
  username: string
  displayname: string
  isfriends: boolean
  isrequestsent: boolean
  stats: UserStatsAPIModel
}
