import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';

@Component({
	selector: 'cr-header',
	templateUrl: './header.html',
  styleUrls: [ './header.scss' ],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
    @Input() title: string = 'Logo';
    @Output() logoClick: EventEmitter<string> = new EventEmitter();

    onLogoClick(): void {
	    console.log('HEADER COMPONENT', 'logo click');
	    this.logoClick.emit('Header Click!!!!!!!');
    }
}
