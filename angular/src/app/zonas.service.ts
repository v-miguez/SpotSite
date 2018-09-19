import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import{HttpClient,HttpHeaders,HttpRequest}from"@angular/common/http"
import { ActivatedRoute, Router, Params } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  constructor(private http: Http, private httpClient: HttpClient) {


  }


  getAll(){
    let url = 'http://localhost:3000/api/zonas'
    return this.http.get(url).toPromise()
  }

  getById(id){
    let url = `http://localhost:3000/api/zonas/${id}`
    return this.http.get(url).toPromise()
  }

  getByNombre(nombre){

    let url = `http://localhost:3000/api/zonas/ciudad/${nombre}`
    return this.http.get(url).toPromise()

  }

  postComment(comentario, token, id){
    let url = 'http://localhost:3000/api/zonas/new-comment'
    return this.http.post(url, {comentario: comentario, token: token, id: id}).toPromise()
  }


  getComments(idZona){
          let url = `http://localhost:3000/api/zonas/comments/${idZona}`
          return this.http.get(url).toPromise()


  }

  nuevaZona(append){
    console.log(append)
    
    let header=new HttpHeaders();
    
    header.append('Content-Type','multipart/form-data');
    
    const req = new HttpRequest("POST","http://localhost:3000/api/zonas/new",append,{headers:header});
    
    this.httpClient.request(req).toPromise().then(result=>{console.log(result);});
  }

  borrarComentario(id){
    console.log(id)
    let url = 'http://localhost:3000/api/zonas/comentario/borrar'
     return this.http.post(url, {id: id}).toPromise()
  }

  zonasByUser(token){
    let url = 'http://localhost:3000/api/zonas/user'
    return this.http.post(url, {token: token}).toPromise()
  }
  

}


