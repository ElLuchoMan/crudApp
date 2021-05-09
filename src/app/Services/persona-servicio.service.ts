import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaServicioService {
  baseUrl = 'http.localhost.com'
  constructor(private http: HttpClient) { }
  cargarPersona() {
    return this.http.get(this.baseUrl);
  }


}
