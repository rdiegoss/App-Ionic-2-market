import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { historicPage } from '../historic/historic.page';

@Component({
  selector: 'profile',
  templateUrl: 'profile.page.html'
})

export class profilePage {

  title: string;
  user: Object;
  disabled: Object;

  constructor(private elRef: ElementRef, public navCtrl: NavController) {
    this.title = 'Perfil';
    this.user = {
      name: 'Rodrigo Diego',
      picture: 'https://avatars0.githubusercontent.com/u/10976074?v=3&s=460',
      client_at: '12/08/2015',
      birthday: '26/08/1992',
      language: 'Português'
    }

    this.disabled = {
      name: true,
      language: true
    };
  }

  toggleEdit(el) {
    if (this.disabled[el]) {
      this.disabled[el] = false;
    } else {
      this.disabled[el] = true;
    }
  }

  openHistoric() {
    this.navCtrl.push(historicPage);
  }
}
