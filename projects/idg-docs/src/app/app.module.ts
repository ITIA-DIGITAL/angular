import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { IDGMatModule } from '@itia-digital/material';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRouting, LayoutModule, IDGMatModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
