import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { schedulingPage } from './scheduling.page';
import { unitsModal } from '../../modals/units/units.modal';
import { servicesModal } from '../../modals/services/services.modal';
import { filterPipe } from '../../pipes/filter.pipe';
import { appHeader } from '../../components/appHeader/appHeader.component';

let fixture: ComponentFixture<schedulingPage> = null;
let instance: any = null;
let comp: schedulingPage;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Scheduling', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([schedulingPage, unitsModal, servicesModal, filterPipe, appHeader]).then((compiled) => {
    fixture = TestBed.createComponent(schedulingPage);
    instance = compiled.instance;
    comp = fixture.componentInstance;
  })));

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
    el = null;
  });

  it('Should be create Scheduling Page', () => {
    expect(instance).toBeTruthy();
  });

  it('Initialises with a title of Scheduling Page', () => {
    expect(comp['title']).toEqual('Agendamento');
  });

  it('Should call method "showLocationModal"', () => {
    spyOn(comp, 'showLocationModal').and.callThrough();
  });
});