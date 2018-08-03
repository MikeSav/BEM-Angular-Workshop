import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddWorkOrderComponent } from './work-orders/add-work-order/add-work-order.component';
import { WorkOrderListComponent } from './work-orders/work-order-list/work-order-list.component';

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'work-orders', component: WorkOrderListComponent},
    {path: 'work-orders/add', component: AddWorkOrderComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
