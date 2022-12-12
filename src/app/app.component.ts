import { Component, VERSION } from '@angular/core';
import getUAString from '@popperjs/core/lib/utils/userAgent';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  nombre: string = 'Rodrigo';
  textoPlaceHolder: string = 'Ingrese algo aqui';
  desabilitado: boolean = true;
  constructor() {}

  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
}
