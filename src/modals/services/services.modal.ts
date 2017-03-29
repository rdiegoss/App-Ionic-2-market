import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'services.modal.html'
})

export class servicesModal {

  check: Array<any>;
  services: Array<Object>;

  constructor(params: NavParams, public viewCtrl: ViewController) {
    this.services = [];

    if (params.get('services')) this.services = params.get('services');
  }

  dismiss(data = null) { this.viewCtrl.dismiss(data); }

}
