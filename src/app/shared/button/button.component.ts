import { Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'cr-button',
    templateUrl: './button.html',
    styleUrls: ['./button.scss'],
    providers: [],
    encapsulation: ViewEncapsulation.None
})
export class CrButtonComponent {
    @Input() className: string;
    @Input() disabled: boolean;
    @Input() type: string = 'button';

    @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

    constructor() {

    }

    clickHandler() {
        this.onClick.emit();
    }
}
