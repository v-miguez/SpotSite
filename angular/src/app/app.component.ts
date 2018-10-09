import { Component, HostListener } from '@angular/core';
import { NgRedux } from '@angular-redux/store'
import { IAppState } from './store'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})



export class AppComponent {
	title = 'SpotSite';

	constructor(private ngRedux: NgRedux<IAppState>){}
		@HostListener("window:beforeunload", ["$event"])
		beforeUnloadHander(event) {
			localStorage.removeItem('redux_data')
			localStorage.setItem('redux_data', JSON.stringify(this.ngRedux.getState()))
		}
}
