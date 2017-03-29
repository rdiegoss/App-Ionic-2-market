import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { unitPage } from './unit.page';
import { appHeader } from '../../components/appHeader/appHeader.component';

let fixture: ComponentFixture<unitPage> = null;
let instance: any = null;
let comp: unitPage;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Unit', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([unitPage, appHeader]).then((compiled) => {
    fixture = TestBed.createComponent(unitPage);
    comp = fixture.componentInstance;
  })));

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
    el = null;
  });

  it('Should be create Unit Page', () => {
    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();
  });

  it('initialises with a title of Unit Page', () => {
    expect(comp['title']).toEqual('Unidade');
  });

  it('Should call method "goBack"', () => {
    spyOn(comp, 'goBack').and.callThrough();
  });
});