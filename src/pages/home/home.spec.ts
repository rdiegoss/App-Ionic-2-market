import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { App, Config, Form, IonicModule, Keyboard, DomController, MenuController, NavController, Platform, AlertController } from 'ionic-angular';
import { By } from '@angular/platform-browser';
import { ConfigMock, PlatformMock } from '../../mocks';
import { DebugElement } from '@angular/core';
import { homePage } from './home.page';
import { ScheduleCardComponent } from '../../components/scheduleCard/scheduleCard.component';
import { appHeader } from '../../components/appHeader/appHeader.component';

let fixture: ComponentFixture<homePage> = null;
let instance: any = null;
let comp: homePage;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Home', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [homePage, ScheduleCardComponent, appHeader],
      providers: [
        App, DomController, Form, Keyboard, MenuController, NavController, AlertController,
        {provide: Config, useClass: ConfigMock},
        {provide: Platform, useClass: PlatformMock},
      ],
      imports: [
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(homePage);
      instance = fixture;
    	comp = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('Should be create Home Page', () => {
    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();
  });

  it('initialises with a title of Home Page', () => {
    expect(comp['title']).toEqual('Início');
  });

  it('can set the title to a supplied value', () => {
    de = fixture.debugElement.query(By.css('ion-title'));
    el = de.nativeElement;  
    fixture.detectChanges();
    expect(comp['title']).toEqual('Início');
    expect(el.textContent).toContain('Início');
  });
});
