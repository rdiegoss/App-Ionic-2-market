import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { APP_CONFIG, IAppConfig } from '../app/app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestsServices {

constructor(public http: Http, @Inject(APP_CONFIG) private config: IAppConfig) {}

	get(url: string) {
		return this.http.get(url);
	}

	post(url: string, data: any) {
		return this.http.post(url, data);
	}

	patch(url: string, data: any) {
		return this.http.patch(url, data);
	}
}
