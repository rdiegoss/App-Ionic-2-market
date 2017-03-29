import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Nav, NavController, MenuController } from 'ionic-angular';

import { homePage } from '../home/home.page';

@Component({
  selector: 'initial',
  templateUrl: 'initial.page.html'
})

export class initialPage {

  private formLogin: FormGroup;
  private formRegister: FormGroup;

  loadingLogin: boolean;
  formClass: string;

  isLogin: boolean;
  slides: Array<Object>;

  constructor(public navCtrl: NavController, private menu: MenuController, private formBuilder: FormBuilder) {
    this.menu.enable(false, 'side-menu');
    this.menu.enable(false, 'side-notifications');

    this.isLogin = false;
    this.loadingLogin = false;

    this.slides = [
      {
        title: 'Olá! Bem-vindo!',
        text: 'Cadastre-se para utilizar nossos serviços exclusivos. Se já possuir cadastro, efetue seu login.'
      },
      {
        title: 'Tudo online',
        text: 'Conheça nossos serviços, compre produtos sem sair de casa.'
      },
      {
        title: 'Notificações',
        text: 'Receba nossas últimas novidades diratemente pelo App Levissima.'
      }
    ];

    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]]
    });

    let phoneRegex = /[(][0-9]{1,2}[)] [0-9]{4,}[-][0-9]{4,}/;
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(phoneRegex)]]
    });
  }

  showLogin() {
    this.formClass = 'content-form_login';
    this.loadingLogin = false;

    this.isLogin = true;
  }
  
  skip() {
    this.menu.enable(true, 'side-menu');
    this.menu.enable(true, 'side-notifications');

    this.navCtrl.setRoot(homePage);
  }

  submitLogin() {
    this.loadingLogin = true;

    setTimeout(() => this.formClass = 'content-form_register', 2000);
  }

  submitRegister() {
    this.skip();
  }

}
