import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service'
import { ImagenSlider } from '../models/imagenesSlider.model'
import { Validators, FormControl, FormGroup } from '@angular/forms'


declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'app-ciudad',
	templateUrl: './ciudad.component.html',
	styleUrls: ['./ciudad.component.css'],
	animations: []

})

export class CiudadComponent implements OnInit {

	imagenActual: any
	imagenes: any
	posicion: string
	formularioZona: FormGroup
	listaImagenesFormulario: any[]
	contadorImagenes: number
	formularioCompleto : any []

	constructor(private utilService: UtilService) {

		this.formularioZona = new FormGroup({
			nombre: new FormControl('', Validators.required),
			direccion: new FormControl('',  [Validators.required, Validators.minLength(5)]),
			barrio: new FormControl('',  Validators.required),
			ciudad: new FormControl('',  Validators.required)
		})

		this.listaImagenesFormulario = [0]
		this.contadorImagenes= 0
		this.formularioCompleto= []

	}

	ngOnInit() {


	}

	


	addImagen(){
		this.contadorImagenes++	
		this.listaImagenesFormulario.push(this.contadorImagenes)
	}

	dropImagen(seleccion){

		this.listaImagenesFormulario.splice(seleccion, 1)

	}
	handleOnSubmit(){

		this.listaImagenesFormulario = []

		for(let i=  0; i<=this.contadorImagenes; i++){

			this.listaImagenesFormulario.push($('.imagenes'+i).val())

		}

		this.formularioCompleto.push(this.formularioZona.value)
		this.formularioCompleto.push(this.listaImagenesFormulario)
		this.formularioZona.value.imagenes = this.listaImagenesFormulario
		console.log(this.formularioZona.value)

	}




}

