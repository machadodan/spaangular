import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';
import { professor } from '../model/professor';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeAlunos:  boolean = false;
  exibeProfessores:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Camila', idade: 27, email: 'camila.taruma@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'Teste', idade: 25, email: 'Teste@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Teste 2', idade: 31, email: 'Teste2@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Teste 3', idade: 45, email: 'Teste3@gmail.com', curso: 'Sistemas da informacao' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

   listaProfessores: professor[] = [
    { nome: 'Alberto', disciplina: 'Matematica', curso: 'Matematica', turno: 'matutino' },
    { nome: 'Zanotti', disciplina: 'Radialismo', curso: 'Jornalismo', turno: 'noturno' },
    { nome: 'Ivan', disciplina: 'design', curso: 'arquitetura', turno: 'vespertino' },
    { nome: 'Maurico Parra', disciplina: 'Artes Visuais', curso: 'PP', turno: 'noturno' }
  ];

  displayedColumns1: string[] = ['Nome', 'Disciplina', 'Curso', 'Turno'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirAlunos(){
    this.exibeAlunos = true;
  }

  exibirProfessores(){
    this.exibeProfessores = true;
  }

}
