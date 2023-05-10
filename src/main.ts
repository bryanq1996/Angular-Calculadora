import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class App {
  name = 'Bryan Quituisaca';
  cargo = 'CALCULADORA';

  a = 100;
  b = 0;
  c = 0;
  contador = 0;
  calcular() {
    console.log('hola ups', this.a);
    this.contador = this.contador + 1;
    this.c = this.a + eval('' + this.b);
  }

  calcular1() {
    console.log('hola ups', this.a);
    this.contador = this.contador + 1;
    this.c = this.a * eval('' + this.b);
  }

  calcular2() {
    console.log('hola ups', this.a);
    this.contador = this.contador + 1;
    this.c = this.a - eval('' + this.b);
  }

  calcular3() {
    console.log('hola ups', this.a);
    this.contador = this.contador + 1;
    this.c = this.a / eval('' + this.b);
  }
}
bootstrapApplication(App);
