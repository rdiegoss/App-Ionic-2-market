import { OpaqueToken } from "@angular/core";
export let APP_CONFIG = new OpaqueToken('./app.config');
const BASE_URL = 'http://localhost:1337/api/v2/';

export interface IAppConfig {
  apiEndPoint: string;
};

const HOME_CONFIG: IAppConfig = {
  apiEndPoint: 'schedules'
};

const LOGIN_CONFIG: IAppConfig = {
  apiEndPoint: 'users'
};

export const DefaultConst = {
	LOGIN_CONFIG,
	HOME_CONFIG
};