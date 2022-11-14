import { Component, OnInit } from '@angular/core';
//clase OnInit para usar el hook OnInit
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  /**
   * El constructor asigna un valor a diferentes propiedaddes de la clase
   * (NO METER LOGICA DENTRO)
   * no recoger parametros en plan url o cualquier cosa , es mala practica
   * - Tambien podemos precargar cosas que sean necesarias a través del constructor
   */
  constructor() {
    console.log("Constructor lanzado");
  }

  /**
   * Se ejecuta cuando cargamos la directiva de nuestro componente,
   * es el primer método que se ejecuta después de lanzar el constructor de la clase 
   * del componente.
   */
  /**
   * podemos meter logica dentro 
   * 
   */
  ngOnInit(): void {
    console.log("componente lanzado")
  }

}
