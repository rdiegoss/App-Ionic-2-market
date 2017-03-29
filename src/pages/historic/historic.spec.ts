import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { historicPage } from './historic.page';
import { appHeader } from '../../components/appHeader/appHeader.component';

let fixture: ComponentFixture<historicPage> = null;
let instance: any = null;
let comp: historicPage;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Historic', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([historicPage, appHeader]).then((compiled) => {
    fixture = TestBed.createComponent(historicPage);
    instance = compiled.instance;
    comp = fixture.componentInstance;
  })));

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
    el = null;
  });

  it('Should be create Historic Page', () => {
    expect(instance).toBeTruthy();
  });

  it('Initialises with a title of Historic Page', () => {
    expect(comp['title']).toEqual('Histórico');
  });

  it('Can set the title to a supplied value', () => {
    de = fixture.debugElement.query(By.css('ion-title'));
    el = de.nativeElement;  
    fixture.detectChanges();
    
    expect(comp['title']).toEqual('Histórico');
    expect(el.textContent).toContain('Histórico');
  });

  it('Validate objet historic is defined', () => {
    expect(comp['historic']).toBeDefined();
  });

  it('Validate objet historic is an Array of Object', () => {
    expect(comp['historic']).toEqual(jasmine.any(Array));
  });

  it('Matches objects with the expect key, object Historic', () => {
    let historic = ['data' , 'date'];
    expect(comp['title']).toEqual('Histórico');
    expect(Object.getOwnPropertyNames(comp['historic'][0]).sort()).toContain('data');
  });

});