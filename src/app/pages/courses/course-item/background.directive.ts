import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';

@Directive({selector: '[cr-background]'})
export class BackgroundDirective implements OnInit {
    @Input('cr-background') background: string;

    constructor(private viewContainer: ViewContainerRef) {
    }

    ngOnInit() {
        (this.viewContainer.
        element.nativeElement as HTMLDivElement).setAttribute('style', `background: ${this.background}`);
    }
}
