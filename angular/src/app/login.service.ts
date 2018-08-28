import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  sendLogin(values){
  	console.log(values)
  	let url = "http://localhost:8889/login"

	return 	this.http.post(url, {alias: values.alias, password: values.password}).toPromise()

  }


}
