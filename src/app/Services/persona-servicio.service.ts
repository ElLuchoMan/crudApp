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
  mostrarPersona(id: any) {
    return this.http.get<any>(this.baseUrl + `/${id}`)
  }
  eliminarPersona(id: any) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
  agregarPersona(usuario: any) {
    return this.http.post<any>(this.baseUrl, usuario);
  }
  editarPersona(id: number, usuario: any) {
    return this.http.put(this.baseUrl + `/${id}`, usuario);
  }



}
