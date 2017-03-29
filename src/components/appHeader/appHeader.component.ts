import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <ion-navbar>

      <button ion-button menuToggle="side-menu">
        <ion-icon name="menu"></ion-icon>
      </button>

      <ion-title class="toolbar-title">{{ titlePage }}</ion-title>
      
    </ion-navbar>
  `
})

export class appHeader {

  @Input() titlePage: string;

  constructor(){}

}
