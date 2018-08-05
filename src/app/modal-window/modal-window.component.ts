import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'msa-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

    @Input() modalType: string;
    @Input() modalHeader: string;
    @Input() modalMessage: string;

    constructor() {
    }

    ngOnInit() {
    }

    setModalStyle(): any {
        if (this.modalType === 'dashboard') {
            return {'modal--dashboard': true};
        } else if (this.modalType === 'news') {
            return {'modal--news': true};
        }

        return {'modal--default': true};
    }

    setModalId (): string {
        if (this.modalType === 'dashboard') {
            return 'openWorkOrders';
        } else if (this.modalType === 'news') {
            return 'newsItem';
        }

        return 'disclaimer';
    }

}
