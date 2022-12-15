import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listEstudiantes: any[] = [
    { nombre: 'rodrigo', estado: 'Aprobado' },
    { nombre: 'rodrigo', estado: 'Promocionado' },
    { nombre: 'rodrigo', estado: 'Aprobado' },
    { nombre: 'rodrigo', estado: 'Promocionado' },
  ];
  name = 'Angular ' + VERSION.major;
  nombre: string = 'Rodrigo';
  textoPlaceHolder: string = 'Ingrese algo aqui';
  texto: string = 'Este es un video event Binding';
  texto1: string = '';
  desabilitado: boolean = true;
  mostrar: boolean = true;
  imgSrc =
    'https://thumbs.gfycat.com/OffbeatViciousHousefly-size_restricted.gif';
  constructor() {
    setInterval(() => ((this.desabilitado = false), 3000));
  }

  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }

  toogle(): void {
    this.mostrar = !this.mostrar;
  }
  cambiarTexto(): void {
    this.texto = 'En el proximo video vamos a ver two data Binding';
  }
}
