import { BehaviorSubject } from 'rxjs';
import { deepFreeze, naiveObjectComparison } from './functions';

export class Store<T> extends BehaviorSubject<T> {
    constructor(initialData: T) {
        super(deepFreeze(initialData));
    }

    next(newData: T): void {
        const frozenData = deepFreeze(newData);
        if (!naiveObjectComparison(frozenData, this.getValue())) {
            super.next(frozenData);
        }
    }
}
