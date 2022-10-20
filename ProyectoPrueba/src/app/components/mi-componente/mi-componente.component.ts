import { Component } from "@angular/core";

@Component({
    //lo suyo es meter la vista separada de/l componente para separar template
    // metemos las varibales que hemos creado entre corchetes y sacamos el valor
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente{
    // datos que luego mostramos en la vista 
    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "Hola mundo desde un cadena de caracteres en titulo";
        this.comentario = "Lo mismo que arriba pero con comentario en comentario";
        this.year = 2021;

        console.log("Componente mi-componente cargado ! !");
        console.log(this.titulo, this.comentario, this.year);
    }
}