import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { OneSignal } from 'ionic-native';

import { initialPage } from '../pages/initial/initial.page';
import { homePage } from '../pages/home/home.page';
import { profilePage } from '../pages/profile/profile.page';
import { loginPage } from '../pages/login/login.page';
import { servicesPage } from '../pages/services/services.page';
import { sdMakeupPage } from '../pages/sdMakeup/sdMakeup.page';
import { blogPage } from '../pages/blog/blog.page';
import { unitsPage } from '../pages/units/units.page';
import { historicPage } from '../pages/historic/historic.page';
import { schedulingPage } from '../pages/scheduling/scheduling.page';
import { ChatPage } from '../pages/chat/chat.page';
import { AlertComponent } from '../components/alert/alert.component';

@Component({
  templateUrl: 'app.html',
  providers: [AlertComponent]
})

export class sdApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = initialPage;
  pages: Array<{title: string, router: string, menu: boolean, component: any}>;

  constructor(public platform: Platform, private alert: AlertComponent) {
    this.initializeApp();
    this.pages = [
      { title: 'Início', router: 'home', menu: true, component: homePage },
      { title: 'Perfil', router: 'profile', menu: false, component: profilePage },
      //{ title: 'Agendar Atendimento', router: 'scheduling', menu: true, component: schedulingPage },
      { title: 'Promoções', router: 'services', menu: true, component: servicesPage },
      //{ title: 'SD MAKE•UP', router: 'sd-makeup', menu: true, component: sdMakeupPage },
      { title: 'Site Levissima', router: 'blog', menu: true, component: blogPage },
      { title: 'Unidades', router: 'units', menu: true, component: unitsPage },
      { title: 'Histórico do cliente', router: 'historic', menu: true, component: historicPage },
      { title: 'Chat', router: 'chat', menu: true, component: ChatPage },
      { title: 'Sair', router: 'logout', menu: true, component: loginPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      // OneSignal.startInit("fd3b84f4-07c0-43b4-86ad-711e62cdfd60", "55422755140");
      // OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);
      // OneSignal.setSubscription(true);
      // OneSignal.handleNotificationReceived().subscribe(() => {
      // // do something when the notification is received.
      // });
      // OneSignal.handleNotificationOpened().subscribe(() => {
      // // do something when the notification is opened.
      // });
      // OneSignal.endInit();
      
      // OneSignal.getIds().then(data => {
      // // this gives you back the new userId and pushToken associated with the device. Helpful.
      // });
    });

    
  }

  openPage(router) {
    if (router === 'logout') {
      this.logout();
    } else {
      this.pages.map((item) => {
        if (item.router === router) this.nav.setRoot(item.component);
      });
    }
  }

  logout() {
    let obj: Object = {
      title: 'Deseja realmente sair?',
      buttons: [
      {
        text: 'Sim',
        handler: () => {
          this.openPage('logout');
        }
      },
      {
        text: 'Não',
        handler: () => {
          this.openPage('home');
        }
      }]
    }
    this.alert.show(obj);
  }

}
