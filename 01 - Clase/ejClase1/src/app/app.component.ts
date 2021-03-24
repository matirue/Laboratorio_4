import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio de la Clase1';

  constructor(){}

  edadUno:number = 0;
  edadDos:number = 0;

  suma:number = 0;
  promedio:number=0;

  CalcularSuma(){
    this.suma = this.edadUno + this.edadDos;
  }

  CalcularPromedio(){
    this.promedio = (this.edadUno + this.edadDos) / 2;
  }
  
  Limpiar(){
    this.edadUno=0;
    this.edadDos=0;
    this.suma=0;
    this.promedio=0;
  }
}
