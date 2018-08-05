import { Component, OnInit } from '@angular/core';
import { WorkOrderService } from '../work-order.service';

@Component({
    selector: 'msa-work-order-list',
    templateUrl: './work-order-list.component.html',
    styleUrls: ['./work-order-list.component.scss']
})
export class WorkOrderListComponent implements OnInit {

    public workOrders: any[];

    constructor(private workOrderService: WorkOrderService) {
    }

    ngOnInit() {
        this.workOrderService.getWorkorders().subscribe((resp) => {
            this.workOrders = resp;
        });
    }
}
