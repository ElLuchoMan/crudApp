import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  editar() {
    this.router.navigate(['editar']);
    console.log("Editar");
  }
  eliminar() {
    console.log("Eliminar");
  }
}
