export const _ = {
    get: (object, keys, defaultVal) => {
        keys = Array.isArray(keys) ? keys : keys.split('.');
        object = object[keys[0]];

        if (object && keys.length > 1) {
            return _.get(object, keys.slice(1), defaultVal);
        }

        return object === undefined ? defaultVal : object;
    }
}