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
    get Working(): boolean {
        return this.working.getValue();
    }

    get Working$(): Observable<boolean> {
        return this.working.asObservable();
    }

    get Filter(): any {
        return this.filter.getValue();
    }

    get Filter$(): Observable<any> {
        return this.filter.asObservable();
    }

    get Count(): number {
        return this.count.getValue();
    }

    get Count$(): Observable<number> {
        return this.count.asObservable();
    }

    get List(): MODEL[] {
        return this.list.getValue();
    }

    get List$(): Observable<MODEL[]> {
        return this.list.asObservable();
    }

    get Current(): MODEL {
        return this.current.getValue();
    }

    get Current$(): Observable<MODEL> {
        return this.current.asObservable();
    }
    /**
     * Working on something state
     */
    protected working = new Store(false);

    /**
     * Data filter object
     */
    protected filter = new Store({});

    /**
     * Data count
     */
    protected count = new Store(0);

    /**
     * List of data,
     * Can be accumulated list of data,
     * commonly used for infinite scroll..
     */
    protected list = new Store<MODEL[]>([]);

    /**
     * Current data to be.. any action.
     * Note: it's not mutable
     */
    protected current = new Store(null);

    setWorking(d: boolean): void {
        this.working.next(d);
    }

    setFilter(d: any): void {
        this.filter.next(d);
    }

    setCount(d: number): void {
        this.count.next(d);
    }

    setList(d: MODEL[]): void {
        this.list.next(d);
    }

    setCurrent(d: MODEL): void {
        this.current.next(d);
    }
}
