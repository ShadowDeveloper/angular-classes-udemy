import { Component, OnInit } from '@angular/core';
import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
  moduleId: module.id, // Necessario para utilizar templateUrl
  selector:'contatos-lista',
  templateUrl: 'contatos-lista.component.html'
  // styleUrls:[
  //   'contatos-lista.component.sass'
  // ]
})


export class ContatosListaComponent implements OnInit{
  contatos: Contato[];

  constructor(private contatoService:ContatoService){}

  ngOnInit(): void{
    this.contatos = this.contatoService.getContatos();
  }

}