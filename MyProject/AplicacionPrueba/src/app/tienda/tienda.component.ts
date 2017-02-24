import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURLService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {


  title: string = "Bienvenido";
  /*  title: string = "Hola Amigos";
   nombre: string = "";
   apellido: string = "";
   colorH4 = "red";
   tamanoH4 = "52px";
   classes = "btn btn-block btn-success";
   error: string = "no hay";*/
  nuevaTienda: any = {};
  tiendas=[];

  disabledButtons={
    NuevaTiendaFormSubmitButton:false
  }
  constructor(private _http: Http,
              private _masterURL: MasterURLService) {

    /*    this.apellido = "F";
     this.nombre = "Alex";
     console.log("Inicio el construcor")*/
  }

  ngOnInit() {
    /*    this.apellido = "Sarzosa";
     this.nombre = "Vicente";
     console.log("On Init")*/
    this._http.get(this._masterURL.url+"Tienda")
      .subscribe(
        (res:Response) => {
          console.log("No hubo errores");
          console.log(res.json());
          this.tiendas=res.json()
            .map(
              (value)=>{
                value.formularioCerrado=true;
                return value;
              }
            );
          /*this.nuevaTienda = {};
           this.disabledButtons.NuevaTiendaFormSubmitButton=false;*/
        },
        (err) => {

          console.log("Ocurrio un error", err);
        })
  }

  /*  nombreCompleto(): string {
   return `${this.nombre} ${this.apellido}`
   }

   hizoClick() {
   console.log("Hizo Click");
   console.log()
   }

   hizoFocus() {
   console.log("Hizo focus");
   }*/


  crearTienda(formulario:NgForm) {
    console.log(formulario);
    this.disabledButtons.NuevaTiendaFormSubmitButton=true;
    this._http.post(this._masterURL.url + "Tienda", {
      nombre: formulario.value.nombre
    })
      .subscribe((res) => {
          console.log("No hubo errores");
          console.log(res);
          this.tiendas.push(res.json());
          this.nuevaTienda = {};
          this.disabledButtons.NuevaTiendaFormSubmitButton=false;
        },
        (err) => {
          this.disabledButtons.NuevaTiendaFormSubmitButton=false;
          console.log("Ocurrio un error", err);
        },
        () => {
          console.log("Termino la funcion");
        });
    /*      .post("http://localhost:1337/Tienda", formulario.valores)
     .subscribe(
     res=>console.log('Respuesta: ',res),
     err=>console.log('Error: ',err),
     ()=>{
     console.log("Se completo la accion")
     }
     );*/
  }

  borrarTienda(id:number){

    this._http.delete(this._masterURL.url+"Tienda/"+id)
      .subscribe(
        (res) => {
          let tiendaBorrada=res.json();
          this.tiendas=this.tiendas.filter(
            value=>tiendaBorrada.id!=value.id
          );

        },
        (err) => {

          console.log("Ocurrio un error", err);
        }
      )
  }

  actualizarTienda(tienda:any){
    let parametros={
      nombre:tienda.nombre
    };
    this._http.put(this._masterURL.url+"Tienda/"+tienda.id,parametros)
      .subscribe(
        (res:Response)=>{
          tienda.formularioCerrado=!tienda.formularioCerrado;
          console.log("Respuesta:",res.json());
        },
        (err)=>{
          console.log("Error:",err);
        }
      )
  }


}
