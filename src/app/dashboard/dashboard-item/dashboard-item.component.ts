import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'msa-dashboard-item',
    templateUrl: './dashboard-item.component.html',
    styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {
    @Input() dash: any;

    constructor() {
    }

    ngOnInit() {
    }
}
