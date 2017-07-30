import { Animal } from './animal';

export class Cavalo extends Animal{
  constructor(nome:string){
    super(nome);
  }

  public move(distanciaEmMetros:number):void{
    console.log(`Galopando...`);
    super.move(distanciaEmMetros);
  }

}