import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../connect.service';
import { AbstractTableComponent, CredentialQuery, Credential } from 'idg-connect';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'idg-docs-table-component',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent extends AbstractTableComponent<Credential, CredentialQuery> implements OnInit {
    displayedColumns = ['code', 'title'];

    html = `
    <mat-table #table [dataSource]="dataSource">
        <!-- code Column -->
        <ng-container matColumnDef="code">
            <mat-header-cell *matHeaderCellDef>Código</mat-header-cell>
            <mat-cell *matCellDef="let item">
                {{ item.code }}
            </mat-cell>
        </ng-container>
        <!-- title Column -->
        <ng-container matColumnDef="title">
            <mat-header-cell *matHeaderCellDef>Título</mat-header-cell>
            <mat-cell *matCellDef="let item">
                {{ item.title }}
            </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let contact; columns: displayedColumns" class="contact" matRipple> </mat-row>
    </mat-table>

    <mat-paginator
        #paginator
        [length]="service.Count$ | async"
        [pageIndex]="(service.Query$ | async).pageIndex"
        [pageSize]="(service.Query$ | async).pageSize"
        (page)="onPage($event)"
    >
    </mat-paginator>

    <mat-progress-bar mode="query" color="accent" *ngIf="service.Working$ | async"></mat-progress-bar>
  `;
    ts = `
export class TableComponent extends AbstractTableComponent<MODEL, QUERY> implements OnInit {
    displayedColumns = ['code', 'title'];

    constructor(public service: ConnectService, public ar: ActivatedRoute, public route: Router) {
        super(service, ar, route);
    }
}
    `;

    constructor(public service: ConnectService, public ar: ActivatedRoute, public route: Router) {
        super(service, ar, route);
    }
}
