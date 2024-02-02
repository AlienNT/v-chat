export type FileToBlob = string | null | ArrayBuffer
export interface FileBlob {
    name?: string
    size?: number
    file: string
}

export interface FileReaderState {
    files: FileBlob[]
}