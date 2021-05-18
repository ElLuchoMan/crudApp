import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Models/Persona.interface';
import { PersonaServicioService } from 'src/app/Services/persona-servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private router: Router, private personaService: PersonaServicioService) { }
  dataSource: any;
  displayedColumns: string[] = ['id', 'user', 'acciones'];
  ngOnInit(): void {
    this.cargarPersonas();
  }
  eliminar(id: number) {
    this.personaService.eliminarPersona(id).subscribe(data => {
      console.log(data);
    });
    // console.log(id);
  }
  cargarPersonas() {
    this.personaService.listarPersonas().subscribe((personas) => {
      // console.log(personas);
      this.dataSource = personas;
    })
  }
}
