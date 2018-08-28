import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms'
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

formularioLogin: FormGroup

  constructor(private loginService: LoginService) {

  	this.formularioLogin = new FormGroup ({

  		alias: new FormControl('',[Validators.required]),
  		password: new FormControl('', [Validators.required])
  	})

  }

  ngOnInit() {
  }

	handleOnSubmit(){

		this.loginService.sendLogin(this.formularioLogin.value).then((res)=>{
			console.log(res)

		})

	}



}
