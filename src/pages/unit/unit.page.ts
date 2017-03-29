import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'unit',
  templateUrl: 'unit.page.html'
})

export class unitPage {

  title: string;

  constructor(public navCtrl: NavController) {
    this.title = 'Unidade';
  }

  goBack() {
    this.navCtrl.pop();
  }

}
