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

    /**
     * This function determines if we should apply a warning css class to the dashboard item
     * @param item {object} - the current dashboard item to compare
     * @param position {number} - the column position of the item in respect to the template
     * @returns boolean {boolean}
     */
    showWarningText(item: any, position: number): boolean {
        // just some dummy logic
        if (item.title === 'Parts Stock' && item.below_minification < 5 && position === 2) {
            return true;
        }
        return false;
    }
}
