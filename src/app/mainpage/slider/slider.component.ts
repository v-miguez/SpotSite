import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../slider.service'
import { ImagenSlider } from '../../models/imagenesSlider.model'
import {  animate, state, style, transition, trigger} from '@angular/animations';

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
	constructor(private sliderService: SliderService) {

		this.imagenActual = this.sliderService.getImages(0)
		this.nextImage()
		this.posicion = "in"
		$('.carousel').carousel({
			interval: 2000
		})
		
	}

	ngOnInit() {


	}

	nextImage(){

		let i =0
		// setInterval(()=>{

		// 	if(this.posicion == "in"){
		// 		this.posicion = "out"
		// 	}else{
		// 		this.posicion = "in"
		// 	}

		// },4000)
		// setInterval(()=>{
		// 	i++
		// 	if(i == this.sliderService.listaImagenes.length){

		// 		i = 0

		// 	}

		// 	this.imagenActual = this.sliderService.getImages(i)

		// 	console.log(this.imagenActual)

		// },7000)

	}



}
