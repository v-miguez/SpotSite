import { Routes } from '@angular/router'
import { MainComponent } from './mainpage/main/main.component'
import { RegistroComponent } from './registro/registro.component'
import { LoginComponent } from './login/login.component'
import { CiudadComponent } from './ciudad/ciudad.component'
import { UserzoneComponent } from './userzone/userzone.component'

export const appRoutes: Routes=[
{path: '', pathMatch: 'full', component: MainComponent},
{path: 'main', component: MainComponent},
{path: 'register', component: RegistroComponent},
{path: 'login', component: LoginComponent},
{path: 'ciudad', component: CiudadComponent},
{path: 'user', component: UserzoneComponent}

]