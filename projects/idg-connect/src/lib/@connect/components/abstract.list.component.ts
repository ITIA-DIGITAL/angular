import { ActivatedRoute, Router } from '@angular/router';
import { OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AbstractComponent } from './abstract.component';
import { ConnectionQueryParam, IData } from '../models';
import { ConnectionFetchService } from '../services';

export abstract class AbstractListComponent<MODEL extends IData, QUERY extends ConnectionQueryParam>
    extends AbstractComponent
    implements OnInit, OnDestroy {
    protected querySubscription: Subscription;
    protected dataSubscription: Subscription;

    protected constructor(
        public service: ConnectionFetchService<any, any>,
        public ar: ActivatedRoute,
        public router: Router
    ) {
        super(ar);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.setupDataSource();
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
        if (this.dataSubscription) {
            this.dataSubscription.unsubscribe();
        }
    }

    onPage(p: any): void {
        this.service.pageIndexChanged(p.pageIndex);
    }

    protected async navigateInto(item: MODEL, childPath: string) {
        await this.router.navigate(['../', item.id, childPath], {
            relativeTo: this.ar,
            state: { data: { redirectUrl: location.pathname } }
        });
    }

    protected select(item: MODEL): void {
        this.service.setCurrent(item);
    }

    /**
     * Set connection to async fetched data from service
     */
    protected setupDataSource(): void {
        this.querySubscription = this.service.Query$.subscribe((query: QUERY) => {
            this.service.getCount(query).subscribe(() => {});
            this.service.getList(query).subscribe(() => {});
        });
    }
}
