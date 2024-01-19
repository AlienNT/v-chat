export function setProperty(name, value) {
    document.documentElement.style.setProperty(`--${name}`, value)
}

export function getInitials(string) {
    return string?.length ?
        string.split(' ').map(substr => substr[0]?.toUpperCase()).join(' ') :
        string
}

export function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            return resolve(reader.result);
        }
        reader.onerror = () => {
            return reject;
        }
    });
}

export function objectFieldsToString({object = {}, separator = ' ', fields = []}) {
    return fields.length ? fields.map(field => object?.[field] || '').join(separator) : ''
}