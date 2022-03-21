import { Component, Inject, OnInit } from '@angular/core';
import { Informacion } from '../cliente';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  resultado: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: Informacion) { }

  ngOnInit(): void {
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
function MAT_DIALOG_DATA(MAT_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

