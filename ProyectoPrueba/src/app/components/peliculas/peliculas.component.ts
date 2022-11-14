import { Component, OnInit } from '@angular/core';
//clase OnInit para usar el hook OnInit
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor() {
    console.log("Constructor lanzado");
  }

  /* Se ejecuta cuando cargamos la directiva de nuestro componente,
  es el primer método que se ejecuta después de lanzar el constructor de la clase del componente.*/
  ngOnInit(): void {
    console.log("componente lanzado")
  }

}
