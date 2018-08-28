import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../util.service'
import { ImagenSlider } from '../../models/imagenesSlider.model'

declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.css'],
	animations: []

})

export class SliderComponent implements OnInit {

	imagenActual: any
	imagenes: any
	posicion: string

	constructor(private utilService: UtilService) {

		this.utilService.getSliderImages().then((res)=>{
			this.imagenes = res.json().imagenesCarousel

		})



	
		$('.carousel').carousel({
			interval: 2000
		})

	}

	ngOnInit() {


	}

	



}
