import {FileBlob} from "../interfaces/fileReader";

export function setProperty(name: string, value: string | boolean): void {
    document.documentElement.style.setProperty(`--${name}`, String(value))
}

export function getInitials(string: string) {
    return string?.length ?
        string.split(' ').map(substr => substr[0]?.toUpperCase()).join(' ') :
        string
}

export function toBase64(file: File): Promise<FileBlob | string | ArrayBuffer> {
    return new Promise((resolve, reject): void => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = (): void => {
            const {result} = reader
            return resolve(result);
        }
        reader.onerror = () => {
            return reject;
        }
        return
    });
}

export function objectFieldsToString({object = {}, separator = ' ', fields = []}) {
    return fields.length ? fields.map(field => object?.[field] || '').join(separator) : ''
}

export function getStyles({backgroundColor, maskImage, flex}) {
    return [
        backgroundColor ? `background-color: ${backgroundColor}` : '',
        maskImage ? `mask-image: url(${maskImage})` : '',
        flex ? `flex ${flex}%` : '',
    ].join('; ')
}