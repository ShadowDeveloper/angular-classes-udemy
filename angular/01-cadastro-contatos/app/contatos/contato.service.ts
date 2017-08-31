import { Injectable } from "@angular/core";

import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

@Injectable()

export class ContatoService{

  getContatos(): Promise<Contato[]>{
    return Promise.resolve(CONTATOS);
  }

  getContatosSlowly(): Promise<Contato[]>{
    return new Promise( (resolve, reject )=> {
      setTimeout(resolve,3000)
    })
    .then( () => {
      console.log('primeiro then');
      return 'Curso angular 2'
    })
    .then( (param:string) => {
      console.log('segundo then');
      console.log(param);

      return new Promise( (resolve2, reject2)=>{
        setTimeout(() => {
          console.log('constiando depois de 4 segundos')
          resolve2()
        },4000)
      })
    })
    .then( () => {
      console.log('terceiro then que chama o metodo de getContatos');
      return this.getContatos()
    })
  }

}