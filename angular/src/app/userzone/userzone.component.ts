import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms'
import { Params, ActivatedRoute, Router } from '@angular/router'
import { UsersService } from '../users.service'
import { ZonasService } from '../zonas.service'
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';


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
	formularioCambioPass: FormGroup
	listaImagenesFormulario: any[]
	contadorImagenes: number
	formularioCompleto : any []
	user: any
	userAlias: string
	userToken: string
	zonas: any

	constructor(private zonasService: ZonasService, private activatedRoute: ActivatedRoute, private userService: UsersService, public ngRedux: NgRedux<IAppState>) {
		this.formularioZona = new FormGroup({
			nombre: new FormControl('Nombre', Validators.required),
			direccion: new FormControl('Direccion',  [Validators.required, Validators.minLength(5)]),
			barrio: new FormControl('Barrio',  Validators.required),
			ciudad: new FormControl('Ciudad',  Validators.required)
		})

		this.formularioCambioPass = new FormGroup({
			actualPass: new FormControl('',[ 
				Validators.required,
				Validators.maxLength(50)
				]),
			newPass: new FormControl('',[
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(50)
				]),
			repeatPass: new FormControl('',[
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(50)
				])
		},	{ validators: [this.validatePasswordMatch]}
		)


		this.listaImagenesFormulario = [0]
		this.contadorImagenes= 0
		this.formularioCompleto= []


		this.activatedRoute.params.subscribe((params: Params)=>{

			this.userAlias = params.alias

		})

		this.userToken= this.ngRedux.getState().token
		this.userService.getUserByToken(this.userToken).then((res)=>{
			this.user = res.json()[0]
		})

		this.zonasService.zonasByUser(this.userToken).then((res)=>{
			this.zonas = res.json()
			console.log(this.zonas)
		})

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

	submitCambioPass(){
		this.userService.cambioPassword({formulario: this.formularioCambioPass.value, token: this.userToken}).then((res)=>{
			console.log(res)
		})
	}

	validatePasswordMatch(formGroup) {
		
		let passwordValue = formGroup.controls.newPass.value
		let passwordRepeatValue = formGroup.controls.repeatPass.value

		if (passwordValue === passwordRepeatValue) {
			return null
		} else {
			return { notSame: true }
		}
	}

	cambiarImagen(){

		
		
	}
}
