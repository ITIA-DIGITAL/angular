import { throwError } from 'rxjs/internal/observable/throwError';
import { delay, mergeMap, retryWhen } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { DEFAULT_BACKOFF, DEFAULT_DELAY, DEFAULT_MAX_RETRIES } from '../@connect/config';

const getErrorMessage = (maxRetries: number) => `${maxRetries} times tried to reach remote source`;

export function retryWithBackoff(maxRetry = DEFAULT_MAX_RETRIES, delayMs = DEFAULT_DELAY, backoffMs = DEFAULT_BACKOFF) {
    let retries = maxRetry;
    return (src: Observable<any>) =>
        src.pipe(
            retryWhen((errors: Observable<any>) =>
                errors.pipe(
                    mergeMap(error => {
                        if (retries-- > 0) {
                            const backoffTime = delayMs + backoffMs * (maxRetry - retries);
                            return of(error).pipe(delay(backoffTime));
                        }
                        return throwError(getErrorMessage(maxRetry));
                    })
                )
            )
        );
}
