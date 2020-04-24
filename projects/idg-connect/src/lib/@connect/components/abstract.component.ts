import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class AbstractComponent implements OnInit, OnDestroy {
    // Private
    protected unsubscribeAll: Subject<any>;

    protected constructor(protected ar: ActivatedRoute) {
        this.unsubscribeAll = new Subject();
    }
    ngOnInit(): void {}

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }

    protected get urlParams(): Observable<any> {
        return this.ar.paramMap.pipe(map((p: any) => p.params));
    }
}
