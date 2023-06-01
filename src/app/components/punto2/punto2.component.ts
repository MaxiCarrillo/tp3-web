import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Punto2Component {

  jugar:boolean=false;
  aciertos:number=0;
  errores:number=0;
  contador:number=1;
  palabra!:string;
  modo!:string;

  palabras: Array<string> = new Array<string>;
  modos: Array<string> = new Array<string>;

  apretar(modoElegido:string): void{
    // Aca usar IF, si esta bien que sume.
    this.contador++;
    if(this.modo == modoElegido){
      this.aciertos++;
    }else{
      this.errores++;
    }
    console.log("Apretaste");
  }

  comenzarJuego(): void{
    console.log("Jugar...")
    this.palabras = ['Gallina','Llama','Oso','Perro','Elefantes','Lagartija','Ardilla','Tortuga','Serpiente','Canguro'];
    this.modos = ['vocales', 'consonantes', 'letras'];
    this.aciertos=0;
    this.contador=0;
    this.errores=0;
    this.jugar=true;
  }

  terminarJuego(): void{
    console.log("Terminar juego...")
    this.jugar=false;
  }

  sortearPalabra(): string{ 
    this.palabra = this.palabras[Math.floor(Math.random()*10)];
    return this.palabra;
  }

  sortearModo(): string{ 
    this.modo = this.modos[Math.floor(Math.random()*3)];
    return this.modo;
  }

  calcularLetras(): number{
    return this.palabra.length;
  }

  calcularVocales(): number{
    let contador=0;
    let letra;
    let vocales:string = 'aeiou';

    for(letra of this.palabra){
      if(vocales.includes(letra.toLowerCase())){
        contador++;
      }
    }
    return contador;
  }

  calcularConsonantes(): number{
    let contador=0;
    let letra;
    let vocales:string = 'aeiou';

    for(letra of this.palabra){
      if(!vocales.includes(letra.toLowerCase())){
        contador++;
      }
    }
    return contador;
  }

}
