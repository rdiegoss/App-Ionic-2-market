import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'alert',
  template: ``
})
export class AlertComponent {

  constructor(public alertCtrl: AlertController) {}

  public show(value): void {
    let alert = this.alertCtrl.create({
      title: value.title,
      message: value.message,
      cssClass: value.cssClass,
      inputs: value.inputs,
      buttons: value.buttons,
      enableBackdropDismiss: false
    });
    alert.present();
  }

}
