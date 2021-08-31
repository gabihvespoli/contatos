import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/model/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css'],
})
export class ListaDeContatosComponent implements OnInit {
  contatos: Contato[] = [
    {
      nome: 'Gabriela',
      email: 'gabiat3@hotmail.com',
      tels: ['11962757737', '11962757737'],
    },
    {
      nome: 'Olivia',
      email: 'olivia@hotmail.com',
      tels: ['11962757737', '11962757737'],
    },
    {
      nome: 'Amanda',
      email: 'amanda@hotmail.com',
      tels: ['11962757737', '11962757737'],
    },
    {
      nome: 'Flávia',
      email: 'flavia@hotmail.com',
      tels: ['11962757737', '11962757737'],
    },
    {
      nome: 'Bruno',
      email: 'bruno@hotmail.com',
      tels: ['11962757737', '11962757737'],
    },
    {
      nome: 'Rafaela',
      email: 'rafaela@hotmail.com',
      tels: ['11962757737', '11962757737'],
    },
    {
      nome: 'Camilo',
      email: 'camilo@hotmail.com',
      tels: ['11962757737', '11962757737'],
    },
    {
      nome: 'Rodolfo',
      email: 'rodolfo@hotmail.com',
      tels: ['11962757737', '11962757737'],
    },
    {
      nome: 'Alexandre',
      email: 'alexandre@hotmail.com',
      tels: ['11962757737', '11962757737'],
    },
    {
      nome: 'Roberta',
      email: 'roberta@hotmail.com',
      tels: ['11962757737', '11962757737'],
    },
    {
      nome: 'Alex',
      email: 'alex@hotmail.com',
      tels: ['11962757737', '11962757737'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
