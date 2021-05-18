import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Models/Persona.interface';
import { PersonaServicioService } from 'src/app/Services/persona-servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {
  personaForm: FormGroup = this.fb.group({
    usuario: [null, Validators.required],
    password: [null, Validators.required]
  })
  constructor(private fb: FormBuilder, private personaService: PersonaServicioService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarPersona() {
    const usuario: any = {
      userName: this.personaForm.get('usuario')?.value,
      password: this.personaForm.get('password')?.value,
    }
    this.personaService.agregarPersona(usuario).subscribe(usuario => {
      console.log(usuario);
    });
    this.personaForm.reset();
    this.router.navigate(['/listar']);
  }
}
