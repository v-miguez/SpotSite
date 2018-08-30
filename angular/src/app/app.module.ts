import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  BrowserModule, BrowserAnimationsModule, HttpModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
