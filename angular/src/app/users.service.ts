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
}
