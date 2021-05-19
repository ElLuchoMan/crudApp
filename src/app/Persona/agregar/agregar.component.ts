import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private fb: FormBuilder, private personaService: PersonaServicioService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  guardarPersona() {
    const persona: any = {
      userName: this.personaForm.get('usuario')?.value,
      password: this.personaForm.get('password')?.value,
    }
    this.personaService.agregarPersona(persona).subscribe(data => {
      this.toastr.success('Usuario registrado con éxito', 'REGISTRADO');
      // console.log(persona);
    });
    this.personaForm.reset();
    this.router.navigate(['/listar']);
  }
}
