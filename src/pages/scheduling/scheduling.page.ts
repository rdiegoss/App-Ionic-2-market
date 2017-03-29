import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { unitsModal } from '../../modals/units/units.modal';
import { servicesModal } from '../../modals/services/services.modal';

@Component({
  selector: 'scheduling',
  templateUrl: 'scheduling.page.html'
})

export class schedulingPage {

  dataUnit: Object;
  dataServices: Array<Object>;
  dataServicesChecked: Array<Object>;
  form: Object;
  title: string;

  constructor(public modalCtrl: ModalController) {
    this.title = 'Agendamento';
    this.form = {
      unit: '',
      date: '',
      hour: '',
      services: []
    }; 
  }

  showLocationModal() {
    let modal = this.modalCtrl.create(unitsModal);
    modal.onDidDismiss((data) => {
      if (data !== null) {
        this.dataUnit = data;
        this.form['unit'] = data.id;
      }
    });
    modal.present();
  }

  showServicesModal() {
    let modal = this.modalCtrl.create(servicesModal, { services: this.dataServices });
    modal.onDidDismiss((data) => {
      if (data !== null) {
        this.dataServices = data;
        this.dataServicesChecked = [];
        this.form['services'] = [];

        data.map((item) => {
          if (item['checked']) {
            this.dataServicesChecked.push(item);
            this.form['services'].push(item.id);
          }
        });
      }
    });
    modal.present();
  }

  onSubmit(data) {
    console.log('submit', data);
  }

}
