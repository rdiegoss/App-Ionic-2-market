import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html'
})

export class homePage {

  title: string;

  constructor(public alertCtrl: AlertController){
    this.title = 'Início';
  }

  showAlertCicle() {

    let alertCicle = this.alertCtrl.create({
      title : "Lembrete",
      message : "<span>18</span>O ciclo de pêlos é de 20 dias. Em 18 dias será o melhor momento para um novo atendimento.",
      buttons : [
        {
          text : "Cancelar",
          handle : () => {
            console.log("Cancelar");
          }
        },
        {
          text : "Agendar agora",
          handle : () => {
            console.log("Agendar agora");
          }
        }
      ]
    });

    alertCicle.present();
    document.querySelector(".alert-message span").setAttribute("data-cicle", "18");

  }

  ngOnInit() {
    // this.showAlertCicle();
  }

}
