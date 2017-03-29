import { Component } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: 'services.page.html'
})

export class servicesPage {

  title: string;
  services: Array<Object>;

  constructor() {
    this.title = 'Promoções';
    this.services = [
      {
        title: 'Empada',
        cover: 'http://lojalevissima.com/media/catalog/product/cache/1/image/640x468/17f82f742ffe127f42dca9de82fb58b1/e/m/empada.jpg',
        text: 'Ninguém percebe que é sem glúten :)'
      },
      {
        title: 'Pão integral com Calabresa',
        cover: 'http://lojalevissima.com/media/catalog/product/cache/1/image/640x468/17f82f742ffe127f42dca9de82fb58b1/c/a/calabresa.jpg',
        text: 'Escolha sua opção e peça pelo WhatsLeve: 85 99913.5383'
      },
      {
        title: 'Coxinha',
        cover: 'http://lojalevissima.com/media/catalog/product/cache/1/image/640x468/040ec09b1e35df139433887a97daa66f/c/o/coxinha.jpg',
        text: 'Imagina esta paixão nacional quentinha e suculenta na sua casa? Escolha sua opção e pela pelo whatsleve!'
      }
    ]

  }
}
