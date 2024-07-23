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
