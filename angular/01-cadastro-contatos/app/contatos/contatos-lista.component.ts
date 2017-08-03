import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id, // Necessario para utilizar templateUrl
  selector:'contatos-lista',
  templateUrl: 'contatos-lista.component.html'
  // styleUrls:[
  //   'contatos-lista.component.sass'
  // ]
})

export class ContatosListaComponent{
  contatos: Contato[] = CONTATOS;
}