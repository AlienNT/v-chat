export interface WsSocket {
    connected?: boolean
    readyState: number
    socket?: Socket
}

export interface Socket extends WebSocket{
    connected?: boolean
    close: () => void
    send: (message: string) => void
    readyState: number
}