import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { App, Config, Form, IonicModule, Keyboard, DomController, MenuController, NavController, Platform, AlertController } from 'ionic-angular';
import { By } from '@angular/platform-browser';
import { ConfigMock, PlatformMock } from '../../mocks';
import { DebugElement } from '@angular/core';
import { servicesPage } from './services.page';
import { appHeader } from '../../components/appHeader/appHeader.component';

let fixture: ComponentFixture<servicesPage> = null;
let instance: any = null;
let comp: servicesPage;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Services', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [servicesPage, appHeader],
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
      fixture = TestBed.createComponent(servicesPage);
      instance = fixture;
      comp = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('Initialises with a title of Services', () => {
    expect(comp['title']).toEqual('Serviços');
  });

  it('Validate objet service is defined', () => {
    expect(comp['services']).toBeDefined();
  });

  it('Validate objet Services Items is an Array', () => {
    expect(comp['services']).toEqual(jasmine.any(Array));
  });

  it('Matches objects with the expect key, object Services Items', () => {
    let haveItems = ['title', 'cover', 'text']
    expect(comp['title']).toEqual('Serviços');
    expect(Object.getOwnPropertyNames(comp['services'][0])).toEqual(haveItems);
  });
});
