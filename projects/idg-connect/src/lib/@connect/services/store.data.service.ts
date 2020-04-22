import { Observable } from 'rxjs';

import { IData } from '../models';
import { Store } from '../../@rxjs';

/**
 * Special thanks to:
 * https://medium.com/iqoqo-engineering/two-advanced-techniques-to-make-you-a-typescript-wizard-df42e00b1cf8,
 * https://medium.com/@thomasburlesonIA/push-based-architectures-with-rxjs-81b327d7c32d and
 * https://levelup.gitconnected.com/master-rxjs-data-stores-in-services-c1f553e5d48b
 */
export abstract class StoreDataService<MODEL extends IData> {
    /**
     * Working on something state
     */
    protected working = new Store(false);

    get Working(): boolean {
        return this.working.getValue();
    }

    get Working$(): Observable<boolean> {
        return this.working.asObservable();
    }

    /**
     * Data filter object
     */
    protected filter = new Store({});

    get Filter(): any {
        return this.filter.getValue();
    }

    get Filter$(): Observable<any> {
        return this.filter.asObservable();
    }

    /**
     * Data count
     */
    protected count = new Store(0);

    get Count(): number {
        return this.count.getValue();
    }

    get Count$(): Observable<number> {
        return this.count.asObservable();
    }

    /**
   * List of data,
   * Can be accumulated list of data,
   * commonly used for infinite scroll..

   */
    protected list = new Store<MODEL[]>([]);

    get List(): MODEL[] {
        return this.list.getValue();
    }

    get List$(): Observable<MODEL[]> {
        return this.list.asObservable();
    }

    /**
     * Current data to be.. any action.
     * Note: it's not mutable
     */
    protected current = new Store(null);

    get Current(): MODEL {
        return this.current.getValue();
    }

    get Current$(): Observable<MODEL> {
        return this.current.asObservable();
    }
}
