import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonaServicioService } from 'src/app/Services/persona-servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  personaActualizar: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private personaService: PersonaServicioService, private aRoute: ActivatedRoute) { }
  id: any = 0;
  ngOnInit(): void {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.cargarPersona();
  }
  cargarPersona() {
    this.personaService.mostrarPersona(this.id);
  }
  actualizarPersona() {

  }

}
