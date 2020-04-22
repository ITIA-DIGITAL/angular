export function naiveObjectComparison(objOne, objTwo): boolean {
    return JSON.stringify(objOne) === JSON.stringify(objTwo);
}
