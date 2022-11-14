import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
//clase OnInit para usar el hook OnInit (= con DoCheck)
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
    
  public titulo: string;
  /**
   * El constructor asigna un valor a diferentes propiedaddes de la clase
   * (NO METER LOGICA DENTRO)
   * no recoger parametros en plan url o cualquier cosa , es mala practica
   * - Tambien podemos precargar cosas que sean necesarias a través del constructor
   */
  constructor() {
    this.titulo="componente peliculas";
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
  /** 
   *
   * Se ejecuta cada vez que se produce algún cambio
   * en el componente o en la aplicación de Angular y es un método que se va a estar
   * ejecutando frecuentemente.
   */
  ngDoCheck(): void {
     console.log("lanzado docheck"); 
  }
  cambiarTitulo(){
    this.titulo="titulo cambiado";
  }

  
  // Se ejecuta justo antes de eliminar la instancia de un componente, avisa que se va a eliminar la instancia
  ngOnDestroy(): void {
      console.log("el componente se va a eliminar de la instancia")
  }
}
