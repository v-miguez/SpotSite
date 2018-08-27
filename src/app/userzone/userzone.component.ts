import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms'

declare var jQuery:any;
declare var $:any;




@Component({
	selector: 'app-userzone',
	templateUrl: './userzone.component.html',
	styleUrls: ['./userzone.component.css']
})
export class UserzoneComponent implements OnInit {


	imagenActual: any
	imagenes: any
	posicion: string
	formularioZona: FormGroup
	listaImagenesFormulario: any[]
	contadorImagenes: number
	formularioCompleto : any []



	constructor() {
		this.formularioZona = new FormGroup({
			nombre: new FormControl('Nombre', Validators.required),
			direccion: new FormControl('Direccion',  [Validators.required, Validators.minLength(5)]),
			barrio: new FormControl('Barrio',  Validators.required),
			ciudad: new FormControl('Ciudad',  Validators.required)
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

	SelectAll(txtarea){

	}


}
