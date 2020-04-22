import { Observable } from 'rxjs';
import { Store } from '../../@rxjs';

export class StoreService<MODEL> {
    /**
     * Current data to be.. any action.
     * Note: it's not mutable
     */
    protected state: Store<MODEL>;

    get State(): MODEL {
        return this.state.getValue();
    }

    get State$(): Observable<MODEL> {
        return this.state.asObservable();
    }

    constructor(initialValue: MODEL) {
        this.state = new Store<MODEL>(initialValue);
    }

    protected set(value: MODEL) {
        this.state.next(value);
    }
}
