import { NullTemplateVisitor } from '@angular/compiler';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudApp';

  constructor(private router: Router) { }
  listar() {
    this.router.navigate(['listar']);
  }
  agregar() {
    this.router.navigate(['agregar']);

  }
  editar() {
    this.router.navigate(['editar']);

  }

}