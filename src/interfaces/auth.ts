export type IsAuth = boolean
export type Token = string | null
export interface Auth {
    isAuth: IsAuth,
    token?: Token
}