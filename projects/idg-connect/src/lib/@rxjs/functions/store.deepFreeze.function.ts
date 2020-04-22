export function deepFreeze<T>(inObj: T): T {
    if (inObj !== null && inObj !== undefined) {
        Object.freeze(inObj);

        Object.getOwnPropertyNames(inObj).forEach(prop => {
            if (
                inObj.hasOwnProperty(prop) &&
                inObj[prop] != null &&
                typeof inObj[prop] === 'object' &&
                !Object.isFrozen(inObj[prop])
            ) {
                deepFreeze(inObj[prop]);
            }
        });
    }
    return inObj;
}
