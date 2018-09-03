import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'app-zona',
	templateUrl: './zona.component.html',
	styleUrls: ['./zona.component.css']
})
export class ZonaComponent implements OnInit {

	constructor() {

		$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });

	}
	ngOnInit() {
	}





}
