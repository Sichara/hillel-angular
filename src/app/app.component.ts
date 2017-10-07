/*
 * Angular 2 decorators and services
 */
import {
	Component,
	OnInit,
	ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'cr-app',
	encapsulation: ViewEncapsulation.None,
	styles: [
		require('./styles/vendors.scss'),
		require('./styles/index.scss'),
		require('./app.styles.scss')
	],
	template: require('./app.template.html')
})
export class AppComponent implements OnInit {

    appLogoTitle: string = 'Logo 2';

	constructor() {
	}

	public ngOnInit() {
	}

    onLogoClick(headerString: string): void {
	    console.log('APP COMPONENT', headerString);
    }

}
