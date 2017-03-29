import { Component } from '@angular/core';

@Component({
  selector: 'profile-header',
  template: `
    <div class="user-profile">
      <div class="user-picture">
        <img [src]="user.picture" alt="">
      </div>
      <div class="user-name">
        <p>Olá, {{ user.name }}</p>
      </div>
    </div>
  `
})

export class ProfileHeaderComponent {

  user: Object;

  constructor() {
    this.user = {
      name: 'Diego',
      picture: 'https://avatars0.githubusercontent.com/u/10976074?v=3&s=460'
    }
  }

}
