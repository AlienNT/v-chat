export type Id = string
export type Timestamp = Date | string

export interface Default {
    readonly _id: Id,
    timestamps?: Timestamp[]
}