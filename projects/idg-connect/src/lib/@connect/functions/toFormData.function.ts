import { isArrayLike } from 'rxjs/internal-compatibility';

/**
 * Generates a new FormData(), from initial value
 * Special thanks to:
 * https://netbasal.com/how-to-implement-file-uploading-in-angular-reactive-forms-89a3fffa1a03
 * @param value is data to parse
 */
export function toFormData<T>(value: T): T {
    const formData = new FormData();
    for (const key of Object.keys(value)) {
        const v = value[key];
        if (isArrayLike(v)) {
            for (const item of v as any[]) {
                formData.append(`${key}[]`, item);
            }
        } else {
            formData.append(key, v);
        }
    }
    return formData as any;
}
