import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  @Input() tabelaKluczy;
  @Input() tabelaZrobione;
  @Input() klucz;


  @Output() eventTask = new EventEmitter();


  pobierz(task: string): void{

    this.eventTask.emit(task);
  }

  addKlucz(): void {
    this.tabelaKluczy.push(this.klucz);
    console.log('Dodano klucz ' + this.klucz);
    this.klucz = '';
  }

  doneKlucz(klucz: string): void {
    this.tabelaZrobione.push(klucz);
    //this.removeKlucz(klucz);
  }

}
