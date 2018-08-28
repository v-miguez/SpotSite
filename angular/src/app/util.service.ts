import { Injectable } from '@angular/core';
import { ImagenSlider } from './models/imagenesSlider.model'
import { IMAGENESslider } from './data/imagenesSlider.db' 
import { Http } from '@angular/http'


@Injectable({
  providedIn: 'root',
})
export class UtilService {

	listaImagenes: ImagenSlider[]

  constructor(private http: Http) { 
  	this.listaImagenes = IMAGENESslider
  }

  getSliderImages(){
  	let url = "https://spotsite-45855.firebaseio.com/imagenesCarousel.json"

	return 	this.http.get(url).toPromise()
  }


}

