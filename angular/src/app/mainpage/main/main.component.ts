import { Component, OnInit } from '@angular/core';
import { ZonasService } from '../../zonas.service'
import { Router } from '@angular/router'


@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	listaZonas: any

	constructor(private zonasService: ZonasService, private router: Router) {

		this.zonasService.getAll().then((res)=>{

			this.listaZonas=res.json()
			console.log(this.listaZonas)
			

		})

	}

	ngOnInit() {
	}

	irAZona(id){
		this.router.navigate(['zona', id])
		console.log(id)
	}

}
