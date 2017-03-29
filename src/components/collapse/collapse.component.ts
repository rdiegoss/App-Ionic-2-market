import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapse',
  template: `
    <div (click)="clickedCollapse()" [class]="'collapse-header ' + (active ? 'active' : '')" [ngStyle]="{'background-image': 'url(' + cover + ')'}">
      <span>{{ title }}</span>
      <ion-icon name="ios-arrow-down"></ion-icon>
    </div>

    <div class="collapse-body">
      <div class="items">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class CollapseComponent {

  active: boolean = false;

  @Input() title: string;
  @Input() cover: string;

  constructor() { }

  clickedCollapse() {
    if (this.active) {
      this.active = false;
    } else {
      this.active = true;
    }
  }

}
