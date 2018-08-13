import { Injectable } from '@angular/core';
import { ImagenSlider } from './models/imagenesSlider.model'
import { IMAGENESslider } from './data/imagenesSlider.db' 

@Injectable({
  providedIn: 'root',
})
export class SliderService {

	listaImagenes: ImagenSlider[]

  constructor() { 
  	this.listaImagenes = IMAGENESslider
  }

  getImages(photoPosition){
  	return IMAGENESslider[photoPosition]
  }


}
