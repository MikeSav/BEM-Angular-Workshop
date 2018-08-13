import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[msaMsaInput]'
})
export class MsaInputDirective {

    constructor() {
    }

    @HostListener('focus', ['$event.target'])
    onFocus(event) {
        const parent = this.getClosest(event, '.aims-form__group');
        parent.classList.add('aims-form__group--focused');
    }


    @HostListener('blur', ['$event.target'])
    onBlur(event) {
        const parent = this.getClosest(event, '.aims-form__group');
        if (event.value === '') {
            parent.classList.remove('aims-form__group--focused');
        }
    }


    getClosest(elem, selector) {
        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    let matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {
                    }
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) {
                return elem;
            }
        }
        return null;
    }
}
