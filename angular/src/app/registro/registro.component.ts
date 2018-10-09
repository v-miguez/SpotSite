import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms'
import { UsersService } from '../users.service'
import { Router } from '@angular/router'
@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	formularioRegistro: FormGroup

	constructor(private userService: UsersService, private router: Router) {
		this.formularioRegistro = new FormGroup({
			nombre: new FormControl(''),
			apellido: new FormControl(''),
			alias: new FormControl('', [
				Validators.required ,
				Validators.minLength(4),
				Validators.maxLength(15)
				]),
			email: new FormControl('',[
				Validators.required,
				Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)
				]),
			password: new FormControl('',[
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(50)
				]),
			repeatPassword: new FormControl('',[
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(50),

				])
		}, { validators: [this.validatePasswordMatch]})
	}

	ngOnInit() {
	}


	loginSubmit(){
		this.userService.new(this.formularioRegistro.value).then((res)=>{
			console.log('usuario añadido')
			this.router.navigate(['main'])
		})
	}

	validatePasswordMatch(formGroup) {
		if (formGroup.controls.repeatPassword.value.length <= 0) {
			return null
		}
		let passwordValue = formGroup.controls.password.value
		let passwordRepeatValue = formGroup.controls.repeatPassword.value
		if (passwordValue === passwordRepeatValue) {
			return null
		} else {
			return { notSame: true }
		}
	}
}
