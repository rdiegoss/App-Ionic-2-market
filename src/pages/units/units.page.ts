import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { unitPage } from '../unit/unit.page';

@Component({
  selector: 'units',
  templateUrl: 'units.page.html'
})

export class unitsPage {

  title: string;

  constructor(public navCtrl: NavController) {
    this.title = 'Unidades';
  }

  openUnit() {
    this.navCtrl.push(unitPage);
  }
}
