import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms'
import { UsersService } from '../users.service'
import { NgRedux } from '@angular-redux/store'
import { IAppState } from '../store'
import { GUARDAR_TOKEN, BORRAR_TOKEN } from '../actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ciudades: any []
  userAlias: string

  formularioLogin: FormGroup
  constructor(private router: Router, private usersService: UsersService, public ngRedux: NgRedux<IAppState>) {
   
     this.formularioLogin = new FormGroup({
       alias: new FormControl(''),
       password: new FormControl('')
     })
     this.ngRedux.subscribe(()=>{
       let stateStore = this.ngRedux.getState()
       this.userAlias = stateStore.alias

     })
     this.userAlias = this.ngRedux.getState().alias


  }

  ngOnInit() {
  }

  busquedaCiudad(ruta){

  	ruta = `/${ruta}`
  	this.router.navigate([ruta])
  }


  loginSubmit(){
    this.usersService.login(this.formularioLogin.value).then((res)=>{
      let objToken = res.json().token
      let objAlias = res.json().alias

      this.ngRedux.dispatch({
        type: GUARDAR_TOKEN,
        data: {token: objToken, alias: objAlias }
      })

    })


  }

  cerrarSesion(){
    this.ngRedux.dispatch({
      type: BORRAR_TOKEN,
      data:{token: ''}
    })
  }

}
