import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Models/Persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaServicioService {
  baseUrl = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  listarPersonas() {
    return this.http.get<Persona[]>(this.baseUrl);
  }
  mostrarPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.baseUrl + `${id}`)
  }
  eliminarPersona(id: number) {
    return this.http.delete(this.baseUrl + `${id}`);
  }
  agregarPersona(usuario: any) {
    return this.http.post(this.baseUrl, usuario);
  }



}
