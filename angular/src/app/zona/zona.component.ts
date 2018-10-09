import { Component, OnInit } from '@angular/core';
import { ZonasService } from '../zonas.service'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { NgRedux } from '@angular-redux/store'
import { IAppState } from '../store'
import { GUARDAR_TOKEN, BORRAR_TOKEN } from '../actions'
import { UsersService } from '../users.service'

declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'app-zona',
	templateUrl: './zona.component.html',
	styleUrls: ['./zona.component.css']
})
export class ZonaComponent implements OnInit {

	idZona: number
	zona: any
	imagenes: string
	arrayImagenes: any
	id: any
	comentarios: any
	tiempoComentario: number
	hayTexto: boolean

	constructor(private zonasService: ZonasService, private activatedRoute: ActivatedRoute,  public ngRedux: NgRedux<IAppState>, private userService: UsersService) {

		this.hayTexto = false

		// -----------LIGHTBOX----------------
		$(document).on('click', '[data-toggle="lightbox"]', function(event) {
			event.preventDefault();
			$(this).ekkoLightbox();
		});
		// ---------------------------
		this.tiempoComentario = 0
		this.activatedRoute.params.subscribe((params: Params)=>{
			this.id=params.id

			zonasService.getById(params.id).then((res)=>{
				this.imagenes = res.json()[0].src
				this.zona = res.json()
				this.arrayImagenes = this.imagenes.split(",")

			})


		})

		this.zonasService.getComments(this.id).then((res)=>{
			console.log(res.json())
			this.comentarios = res.json()
		})
		this.actualizarComentarios()
		
	}
	ngOnInit() {
	}


	enviarComentario(){
		console.log(this.tiempoComentario)
		if(this.tiempoComentario == 0){
			let comentario = $('#comment').val()
			if(comentario.length >=2){
				this.tiempoComentario = 1
				let token = this.ngRedux.getState()
				this.zonasService.postComment(comentario, token, this.id).then((res)=>{

					console.log(res.json())
					this.actualizarComentarios()
					this.hayTexto = false
				})
				setTimeout(()=>{
					this.tiempoComentario = 0
				}, 3000)
			}else{
				this.hayTexto = true
			}
		}else{
			alert('Tienes que esperar 3 segundos entre comentario y comentario!')

		}
		let comentario = $('#comment').val('')

	}

	borrarComentario(id){
		let acepta = confirm('¿Deseas borrar el mensaje?')
		console.log(acepta)
		if( acepta == true ){

			this.zonasService.borrarComentario(id).then((res)=>{

				console.log(res)
				this.actualizarComentarios()

			})

		}
		
	}


	actualizarComentarios(){
		this.zonasService.getComments(this.id).then((res)=>{
			console.log(res.json())
			this.comentarios = res.json()
		})
	}

}
