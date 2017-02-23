import {Component, OnInit} from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = "Hola a todos";
  nombre:string = "";
  apellido:string = "";
  //colorBackground="background-color:red,";
  colorH4="red";
  tamanoH4="21px";


  nuevaTienda:any={};

  constructor() {
    this.nombre = "A";
    this.apellido = "F";

    console.log("Inicio el constructor");
  }

  ngOnInit() {
    this.nombre = "j";
    this.apellido = "b";

    console.log("Inicio el ngOnit");
  }

 nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
  }
/*  hizoClick(){
    console.log("Hizo click");
  }*/
/*hizoFocus(){

}*/

crearTienda(formulario){
console.log(formulario);
this.http
  .post("localhost:1337/Tienda",formulario.valores)
  
}
