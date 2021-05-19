import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Models/Persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaServicioService {
  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  listarPersonas() {
    return this.http.get(this.baseUrl);
  }
  mostrarPersona(id: number) {
    return this.http.get<any>(this.baseUrl + `/${id}`)
  }
  eliminarPersona(id: number) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
  agregarPersona(usuario: Persona) {
    return this.http.post<Persona>(this.baseUrl, usuario);
  }
  editarPersona(id: number, usuario: Persona) {
    return this.http.put<Persona>(this.baseUrl + `/${id}`, usuario);
  }



}
