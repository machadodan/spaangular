import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 6;
}



