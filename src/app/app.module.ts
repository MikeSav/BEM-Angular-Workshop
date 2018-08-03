import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        NewsItemComponent,
        DashboardComponent,
        DashboardItemComponent,
        ModalWindowComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}