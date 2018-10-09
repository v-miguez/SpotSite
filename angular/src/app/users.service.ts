import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	constructor(private http: Http) {



	}
	login(formulario){
		let url= 'http://localhost:3000/api/users/login'
		return this.http.post(url, {alias: formulario.alias, password: formulario.password}).toPromise()
	}

	new(formulario){
		let url= 'http://localhost:3000/api/users/new'
		return this.http.post(url,{nombre: formulario.nombre, apellido: formulario.apellido, alias: formulario.alias, email: formulario.email, password: formulario.password}).toPromise()
	}


	getUserByToken(token){
		let url= 'http://localhost:3000/api/users/getByToken'
		return this.http.post(url, {token: token}).toPromise()

	}

	cambioPassword(item){
		let url='http://localhost:3000/api/users/cambioPass'
		console.log(item.formulario.newPass)
		return this.http.post(url, {password: item.formulario.actualPass, newPass: item.formulario.newPass, token: item.token}).toPromise()
	}

}
