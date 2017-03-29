import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'units.modal.html'
})

export class unitsModal {

  units: Array<Object>;

  constructor(public viewCtrl: ViewController) {
    this.units = [
      {
        id: 1,
        name: 'Aldeota',
        address: 'Rua Osvaldo Cruz, 1660',
        city: 'Fortaleza',
        state: 'CE',
        phone: '(85) 3268-3904'
      },
      {
        id: 2,
        name: 'Bezerra de Menezes',
        address: 'Rua Érico Mota, 380',
        city: 'Fortaleza',
        state: 'CE',
        phone: '(85) 3281-1220'
      },
      {
        id: 3,
        name: 'Center 1',
        address: 'Av. Santos Dummont, 3130 - Loja 105',
        city: 'Fortaleza',
        state: 'CE',
        phone: '(85) 3261-2002'
      }
    ];
  }

  dismiss(data = null) { this.viewCtrl.dismiss(data); }

}
