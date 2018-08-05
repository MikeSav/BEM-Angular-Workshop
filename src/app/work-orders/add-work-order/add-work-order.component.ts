import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'msa-add-work-order',
    templateUrl: './add-work-order.component.html',
    styleUrls: ['./add-work-order.component.scss']
})
export class AddWorkOrderComponent implements OnInit {
    @ViewChild('workOrder') workOrder;
    @ViewChild('aimsForm') aimsForm;

    constructor() {
    }

    ngOnInit() {
    }

    setActiveLink() {
        this.aimsForm.nativeElement.querySelectorAll('section').forEach((item) => {

            if (this.workOrder.nativeElement.querySelector('.aims-form__form').scrollTop >= item.offsetTop) {

                // remove all the selected classes
                this.workOrder.nativeElement.querySelectorAll('.aims-form__anchor').forEach((anchor) => {
                    anchor.classList.remove('aims-form__anchor--selected');
                });

                // add the correct selected class
                this.workOrder.nativeElement.querySelector('a[href="#' + item.querySelector('a').name + '"]')
                    .classList.add('aims-form__anchor--selected');
            }
        });
    }

    scrollToAnchor(where, event) {

        event.stopPropagation();
        event.preventDefault();
        console.log(where);
        const element = this.aimsForm.nativeElement.querySelector('a[name="' + where + '"]');
        const to = element.offsetTop - 81;
        const from = this.aimsForm.nativeElement.scrollTop;
        let timeOut = 0;


        // remove all active classes
        this.workOrder.nativeElement.querySelectorAll('.aims-form__anchor').forEach((item) => {
            item.classList.remove('aims-form__anchor--selected');
        });

        // set the link to active class
        event.target.classList.add('aims-form__anchor--selected');

        if (to >= from) {
            for (let i = from; i <= to; i += 5) {
                setTimeout(() => {
                    this.aimsForm.nativeElement.scrollTop = i;
                }, i / 2);
            }
        } else {
            this.aimsForm.nativeElement.scrollTop = to;
            /* FIX THIS...
            for (let i = from; i >= to; i -= 5) {

                timeOut = (timeOut + (to + 5)) / 2;
                setTimeout(() => {
                    console.log(timeOut)
                    this.aimsForm.nativeElement.scrollTop = i;
                }, timeOut);
            }
            */
        }
    }
}
