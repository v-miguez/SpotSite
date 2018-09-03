import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'

import { RouterModule } from '@angular/router'
import { appRoutes } from './app.routing'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './mainpage/slider/slider.component';
import { MainComponent } from './mainpage/main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { UserzoneComponent } from './userzone/userzone.component';
import { ZonaComponent } from './zona/zona.component'

import { NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store'
import { IAppState, rootReducer, INITIAL_STATE } from './store'



@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  SliderComponent,
  MainComponent,
  FooterComponent,
  RegistroComponent,
  LoginComponent,
  CiudadComponent,
  UserzoneComponent,
  ZonaComponent
  ],
  imports: [
  BrowserModule, BrowserAnimationsModule, HttpModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, FormsModule, NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    let enhancers = isDevMode() ? [devTools.enhancer()] : []

    let estado_inicial = null
    console.log(localStorage.getItem('redux_data'))
    if (localStorage.getItem('redux_data')) {
      estado_inicial = JSON.parse(localStorage.getItem('redux_data'))
    } else {
      console.log('no')
      estado_inicial = INITIAL_STATE
    }

    ngRedux.configureStore(rootReducer, estado_inicial)//, [], enhancers)
  }
}