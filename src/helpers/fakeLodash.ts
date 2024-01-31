export const _ = {
    get: (object: any, keys: string | string[], defaultVal: any = undefined) => {
        keys = Array.isArray(keys) ? keys : keys.split('.');
        object = object[keys[0]];

        if (object && keys.length > 1) {
            return _.get(object, keys.slice(1), defaultVal);
        }

        return object === undefined ? defaultVal : object;
    },
    debounce: (func: any, delay: number = 100) => {
        let timeout: any

        return () => {
            clearTimeout(timeout)
            timeout = setTimeout(() => func(), delay)
        }
    }
}