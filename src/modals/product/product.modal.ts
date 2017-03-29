import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-product',
  templateUrl: 'product.modal.html'
})

export class productModal {

  product: Object;

  constructor(params: NavParams, public viewCtrl: ViewController) {
    this.product = params.get('product');
  }

  dismiss() { this.viewCtrl.dismiss(); }

}
