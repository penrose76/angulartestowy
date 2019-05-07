import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROJECT-ANGULAR';
  pies = new Dog('Azor', 10);
  data = new Date();
  psy = new Array<Dog>();
  week = [
    'Poniedzialek',
    'Wtorek',
    'Sroda',
    'Czwartek',
    'Piatek',
    'Sobota',
    'Niedziela'
  ];

  tabelaKluczyParent = ['raz', 'dwa', 'trzy'];
  tabelaZrobione = new Array<string>();

  wartosc = '';
  kluczParent = '';
  war = '';

  constructor() {
    this.psy.push(
      new Dog('Czarek', 11),
      new Dog('Arek', 5),
      new Dog('Azor', 7)
    );
  }

  removeKlucz(klucz: string): void {
    this.tabelaKluczyParent = this.tabelaKluczyParent.filter(i => i !== klucz);
  }


  pobierz2(liczba: string): void {

    console.log(liczba);

  }
}

class Dog {
  constructor(public name: string, public age: number) {}
}
