import { Routes } from '@angular/router'
import { MainComponent } from './mainpage/main/main.component'
import { RegistroComponent } from './registro/registro.component'
import { LoginComponent } from './login/login.component'
import { CiudadComponent } from './ciudad/ciudad.component'
import { UserzoneComponent } from './userzone/userzone.component'
import { ZonaComponent } from './zona/zona.component'

export const appRoutes: Routes=[
{path: '', pathMatch: 'full', component: MainComponent},
{path: 'main', component: MainComponent},
{path: 'register', component: RegistroComponent},
{path: 'login', component: LoginComponent},
{path: 'ciudad/:nombre', component: CiudadComponent},
{path: 'user/:alias', component: UserzoneComponent},
{path: 'zona/:id', component: ZonaComponent}
]