import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service'
import { ImagenSlider } from '../models/imagenesSlider.model'
import { Validators, FormControl, FormGroup } from '@angular/forms'
import { ZonasService } from '../zonas.service'
import { UsersService } from '../users.service'
import { NgRedux } from '@angular-redux/store'
import { IAppState } from '../store'
import{HttpClient,HttpHeaders,HttpRequest}from"@angular/common/http"
import { ActivatedRoute, Router, Params } from '@angular/router'


declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'app-ciudad',
	templateUrl: './ciudad.component.html',
	styleUrls: ['./ciudad.component.css'],
	animations: []

})

export class CiudadComponent implements OnInit {

	imagenActual: any
	imagenes: any
	posicion: string
	formularioZona: FormGroup
	listaImagenesFormulario: any[]
	contadorImagenes: number
	formularioCompleto : any []
	listaZonas:{}
	arrayImagenes: any
	imagen: any
	idUsuario: any

	constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute,private utilService: UtilService, private zonasService: ZonasService,  public ngRedux: NgRedux<IAppState>, private httpClient: HttpClient) {

		this.activatedRoute.params.subscribe((params: Params)=>{

			zonasService.getByNombre(params.nombre).then((res)=>{
				
				console.log(res.json())
				this.listaZonas = res.json()
			})


		})
		this.arrayImagenes = []
		this.formularioZona = new FormGroup({
			nombre: new FormControl('', Validators.required),
			direccion: new FormControl('',  [Validators.required, Validators.minLength(5)]),
			barrio: new FormControl('',  Validators.required),
			ciudad: new FormControl('',  Validators.required),

		})

		this.listaImagenesFormulario = [0]
		this.contadorImagenes= 0
		this.formularioCompleto= []

		if(this.ngRedux.getState().token != '')
		this.userService.getUserByToken(this.ngRedux.getState().token).then((res)=>{

			this.idUsuario = res.json()[0].id

		})


	}

	ngOnInit() {


	}

	


	addImagen(){
		this.listaImagenesFormulario.push(this.contadorImagenes)
	}

	dropImagen(seleccion){

		this.listaImagenesFormulario.splice(seleccion, 1)

	}

	handleOnSubmit(){

		this.listaImagenesFormulario = []

		for(let i=  0; i<=this.contadorImagenes; i++){

			this.listaImagenesFormulario.push($('.imagenes'+i).val())

		}

		this.formularioZona.value.imagenes = this.listaImagenesFormulario

		let fd=new FormData();
		// fd.append("imagenes",this.arrayImagenes);
		fd.append('imagen', this.imagen[0])
		fd.append("nombre",this.formularioZona.controls.nombre.value);
		fd.append("direccion", this.formularioZona.controls.direccion.value);
		fd.append("barrio", this.formularioZona.controls.barrio.value);
		fd.append("ciudad", this.formularioZona.controls.ciudad.value);
		fd.append("idUser", this.idUsuario)

		// this.zonasService.nuevaZona(fd)
		let header=new HttpHeaders();

		header.append('Content-Type','multipart/form-data');

		const req = new HttpRequest("POST","http://localhost:3000/api/zonas/new",fd,{headers:header});

		this.httpClient.request(req).toPromise().then(result=> console.log(result))
	}

	onFileChange($event){
		// this.contadorImagenes++	
		// this.arrayImagenes.push($event.target.files[0])
		// console.log(this.arrayImagenes)
		console.log("Entra en el FILE CHANGE")
		this.imagen = $event.target.files
	}

	irAZona(id){
		this.router.navigate(['zona', id])
		console.log(id)
	}


}

