import { Component } from "@angular/core";

@Component({
    // metemos las varibales que hemos creado entre corchetes y sacamos el valor
    selector: 'mi-componente',
    template: `
        <h1>{{titulo}}</h1>
        <h2>{{year}}</h2>
        <p>{{comentario}}</p>
    ` 
})
export class MiComponente{
    // datos 
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