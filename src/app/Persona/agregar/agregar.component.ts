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
    name: [null, Validators.required],
    lastname: [null, Validators.required],
    email: [null, Validators.required]
  });
  constructor(private fb: FormBuilder, private personaService: PersonaServicioService) { }

  ngOnInit(): void {
  }
  guardarPersona() {
    const persona: Persona = {
      username: this.personaForm.get('name')?.value,
      password: this.personaForm.get('name')?.value,
    }
    this.personaService.agregarPersona(persona).subscribe(data => {
      console.log(data);
      this.personaForm.reset();
    }, error => {
      console.log(error);
    })
  }

}
