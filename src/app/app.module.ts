import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { sdApp } from './app.component';

// Pages
import { initialPage } from '../pages/initial/initial.page';
import { loginPage } from '../pages/login/login.page';
import { homePage } from '../pages/home/home.page';
import { profilePage } from '../pages/profile/profile.page';
import { servicesPage } from '../pages/services/services.page';
import { blogPage } from '../pages/blog/blog.page';
import { unitsPage } from '../pages/units/units.page';
import { unitPage } from '../pages/unit/unit.page';
import { historicPage } from '../pages/historic/historic.page';
import { schedulingPage } from '../pages/scheduling/scheduling.page';
import { ChatPage } from '../pages/chat/chat.page';

// Components
import { appHeader } from '../components/appHeader/appHeader.component';
import { ScheduleCardComponent } from '../components/scheduleCard/scheduleCard.component';
import { CollapseComponent } from '../components/collapse/collapse.component';
import { ProfileHeaderComponent } from '../components/profileHeader/profileHeader.component';
import { AlertComponent } from '../components/alert/alert.component';

// Modals
import { productModal } from '../modals/product/product.modal'
import { unitsModal } from '../modals/units/units.modal';
import { servicesModal } from '../modals/services/services.modal';

// Configs
import { APP_CONFIG, DefaultConst } from './app.config';

// Providers
import { RequestsServices } from '../providers/requests.provider';

// Pipes
import { filterPipe } from '../pipes/filter.pipe';

// Directives
import { phoneMaskDirective } from '../directives/phoneMask.directive'

const Components = [
	sdApp,
	initialPage,
	loginPage,
	homePage,
	profilePage,
	servicesPage,
	blogPage,
	unitsPage,
	unitPage,
	historicPage,
	schedulingPage,
	ChatPage,
	appHeader,
	ScheduleCardComponent,
	CollapseComponent,
	ProfileHeaderComponent,
	AlertComponent,
	productModal,
	unitsModal,
	servicesModal
];


@NgModule({
  declarations: [Components, ...[filterPipe, phoneMaskDirective]],
  imports: [IonicModule.forRoot(sdApp)],
  bootstrap: [IonicApp],
  entryComponents: Components,
  providers: [
    RequestsServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: APP_CONFIG, useValue: DefaultConst}
  ]
})

export class AppModule {}
