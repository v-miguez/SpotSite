import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router'
import { appRoutes } from './app.routing'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './mainpage/slider/slider.component';
import { MainComponent } from './mainpage/main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component'



@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  SliderComponent,
  MainComponent,
  FooterComponent,
  RegistroComponent
  ],
  imports: [
  BrowserModule, BrowserAnimationsModule, HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
