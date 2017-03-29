import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { unitsPage } from './units.page';
import { appHeader } from '../../components/appHeader/appHeader.component';


let fixture: ComponentFixture<unitsPage> = null;
let instance: any = null;
let comp: unitsPage;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Units', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([unitsPage, appHeader]).then((compiled) => {
    fixture = TestBed.createComponent(unitsPage);
    comp = fixture.componentInstance;
  })));

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
    el = null;
  });

  it('Should be create Units Page', () => {
    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();
  });

  it('initialises with a title of Unit Page', () => {
    expect(comp['title']).toEqual('Unidades');
  });

  it('Should call method "openUnit"', () => {
    spyOn(comp, 'openUnit').and.callThrough();
  });
});