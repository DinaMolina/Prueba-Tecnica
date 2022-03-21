import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Informacion } from '../cliente';
import { CanalService } from '../canal.service';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.css']
})
export class CanalComponent implements OnInit {

  clave: number = 1000;
  gestion: number = 100000;
  consumo: number = 100;
  mensaje: string = "";
  informacion :Informacion[] = [];
  telefonos: number[] = [];
  mostrar = false;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  myForm: FormGroup = this.fb.group({
    number: [''],
    message: ['']
  })

  ngOnInit(): void {
  }

  obtenerMensaje(){
    this.clave = Math.floor(Math.random() * (1000 - 9999));
    this.gestion = Math.floor(Math.random() * (100000-999999));
    this.consumo = Math.floor(Math.random() * (100 - 999));
   
    
    if (this.clave < 0) {
      this.clave = this.clave * (-1);
    }
    if (this.gestion < 0) {
      this.gestion = this.gestion * (-1);
    }
    
    
    this.mensaje = `Para su clave ${this.clave}, se ha registrado la gestion ${this.gestion} en las oficinas principales`
    //return this.mensaje;
  }

  agregarNumero(){
    this.obtenerMensaje();
    this.telefonos.push(this.myForm.get("number")?.value)
    let nuevo = {
      "telefono" : this.myForm.get("number")?.value, 
      "mensaje": this.mensaje
    }
    this.informacion.push(nuevo);
  }


  verNotificacion(){
   
    this.mostrar = true;
  }
  
 
  openDialog() {
    this.obtenerMensaje();
    let nuevo = {
      "telefono" : this.myForm.get("number")?.value, 
      "mensaje": this.mensaje
    }
    this.dialog.open(ModalComponent, {
      data:  {
        "telefono" : this.myForm.get("number")?.value, 
        "mensaje": this.mensaje
      },
    });
  }

  resultadoAleatorio(){
    const cadena ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const cadenaLength = cadena.length;
    for ( let i = 0; i < 15; i++ ) {
        result1 += cadena.charAt(Math.floor(Math.random() * cadenaLength));
    }

    return result1;

  }
}
