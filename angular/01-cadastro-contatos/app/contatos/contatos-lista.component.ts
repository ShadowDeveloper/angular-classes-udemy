import { Component } from '@angular/core';
import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

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