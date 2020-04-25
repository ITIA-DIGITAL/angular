import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IDGMatModule } from '@idg/mat';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRouting, BrowserAnimationsModule, LayoutModule, IDGMatModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
