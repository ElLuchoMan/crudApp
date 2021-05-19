import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/Models/Persona.interface';
import { PersonaServicioService } from 'src/app/Services/persona-servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  persona: any = [];
  personaActualizar: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private personaService: PersonaServicioService, private aRoute: ActivatedRoute, private router: Router, private toastr: ToastrService) { }
  id: any = 0;
  ngOnInit(): void {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.cargarPersona();
  }
  cargarPersona() {
    this.personaService.mostrarPersona(this.id).subscribe(usuario => {
      console.log(usuario);
      this.persona = usuario;
    });
  }
  actualizarPersona() {
    const personaA: Persona = {
      userName: this.personaActualizar.get('usuario')?.value,
      password: this.personaActualizar.get('password')?.value,
    }
    this.personaService.editarPersona(this.id, personaA).subscribe(usuario => {
      this.toastr.success('Usuario actualizado con éxito', 'ACTUALIZADO');
      // console.log(usuario);
    });
    this.personaActualizar.reset();
    this.router.navigate(['/listar']);

  }

}
