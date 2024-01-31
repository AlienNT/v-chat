export interface FileBlob {
    name?: string
    size?: number
    file: string
}

export interface FileReaderState {
    files: FileBlob[]
}