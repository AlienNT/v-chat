export interface WsSocket {
    connected?: boolean
    readyState: number | null
    socket?: Socket | null
}

export interface Socket extends WebSocket{
    connected?: boolean
    close: () => void
    send: (message: string) => void
    readyState: number
}