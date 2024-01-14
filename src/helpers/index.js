export function setProperty(name, value) {
    document.documentElement.style.setProperty(`--${name}`, value)
}

export function getInitials(string) {
    return string?.length ?
        string.split(' ').map(substr => substr[0].toUpperCase()).join(' ') :
        string
}