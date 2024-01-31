import {Default} from "./index";

export interface Navigation extends Default {
    name: string
    path: string
    title: string
    isShow: boolean
    order?: number
}

export interface NavigationState {
    navigationList: Navigation[]
}