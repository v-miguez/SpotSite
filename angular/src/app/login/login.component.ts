import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { GUARDAR_TOKEN, BORRAR_TOKEN } from '../actions';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup
  error: string
  constructor(private usersService: UsersService, public ngRedux: NgRedux<IAppState>, private router: Router) {

  	this.formularioLogin = new FormGroup ({

  		alias: new FormControl('',[Validators.required]),
  		password: new FormControl('', [Validators.required])
  	})

  }

  ngOnInit() {
  }

  loginSubmit(){
    
    this.usersService.login(this.formularioLogin.value).then((res)=>{
      if (res.json().error){
        this.error = 'error'
      }else{
      let objToken = res.json().token
      let objAlias = res.json().alias

      this.ngRedux.dispatch({
        type: GUARDAR_TOKEN,
        data: {token: objToken, alias: objAlias }
      })
        this.router.navigate(['main'])

      }
    })

  }




}
