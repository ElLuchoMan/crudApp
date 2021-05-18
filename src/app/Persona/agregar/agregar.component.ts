import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/Models/Persona.interface';
import { PersonaServicioService } from 'src/app/Services/persona-servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {
  personaForm: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private personaService: PersonaServicioService) { }

  ngOnInit(): void {
  }

  guardarPersona() {
    const usuario: any = {
      userName: this.personaForm.get('usuario')?.value,
      password: this.personaForm.get('password')?.value,
    }
    this.personaService.agregarPersona(usuario);
    // this.personaForm.reset();
    console.log(usuario);

  }
}
