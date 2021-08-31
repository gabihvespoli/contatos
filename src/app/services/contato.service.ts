import { Injectable } from '@angular/core';
import { Contato } from '../model/Contato';

const BASE_DE_CONTATOS: Contato[] = [
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

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  constructor() {}

  getContatos(): Contato[] {
    return BASE_DE_CONTATOS;
  }

  addContato(item: Contato): void {
    BASE_DE_CONTATOS.push(item);
  }
}
