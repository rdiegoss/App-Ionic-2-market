import { Component } from '@angular/core';

@Component({
	selector: 'blog',
	templateUrl: 'blog.page.html'
})

export class blogPage {
	title: string;

	constructor() {
		this.title = 'Site Levissima';
	}

}
