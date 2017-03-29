import { Component } from '@angular/core';

@Component({
  selector: 'historic',
  templateUrl: 'historic.page.html'
})

export class historicPage {

  title: string;
  historic: Array<Object>

  constructor() {
    this.title = 'Histórico';
    this.historic = [
      {
        date: 'Janeiro/2017',
        data: [
          {
            date: '07/01/2017',
            hour: '15:00',
            unit: 'Matriz',
            city: 'Fortaleza',
            compras: 'Coxinha'
          },
          {
            date: '07/01/2017',
            hour: '15:00',
            unit: 'Matriz',
            city: 'Fortaleza',
            compras: 'Pão integral/ Coxinha/ Arroz'
          }
        ]
      },
      {
        date: 'Outubro/2016',
        data: [
          {
            date: '02/10/2016',
            hour: '14:00',
            unit: 'Matriz',
            city: 'Fortaleza',
            compras: 'Salgado maromba'
          }
        ]
      }
    ]
  }
}
