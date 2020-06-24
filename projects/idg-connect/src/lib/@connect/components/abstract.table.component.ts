import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ConnectionQueryParam, IData } from '../models';
import { ConnectionFetchService } from '../services';
import { AbstractListComponent } from './abstract.list.component';

/**
 * Base formControl for listing records with MatTable
 */
export abstract class AbstractTableComponent<MODEL extends IData, QUERY extends ConnectionQueryParam>
    extends AbstractListComponent<MODEL, QUERY>
    implements OnInit, OnDestroy {
    dataSource: MatTableDataSource<MODEL>;

    protected dataSubscription: Subscription;

    protected constructor(
        public service: ConnectionFetchService<any, any>,
        public ar: ActivatedRoute,
        public router: Router
    ) {
        super(service, ar, router);
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();

        if (this.dataSubscription) {
            this.dataSubscription.unsubscribe();
        }
    }

    /**
     * Set connection to async fetched data from service
     */
    protected setupDataSource(): void {
        super.setupDataSource();

        this.dataSubscription = this.service.List$.subscribe((d: MODEL[]) => {
            if (!this.dataSource) {
                this.dataSource = new MatTableDataSource<MODEL>(d);
            } else {
                this.dataSource.connect().next(d);
            }
        });
    }
}
