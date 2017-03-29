import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { profilePage } from './profile.page';
import { appHeader } from '../../components/appHeader/appHeader.component';

let fixture: ComponentFixture<profilePage> = null;
let instance: any = null;
let comp: profilePage;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Profile', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([profilePage, appHeader]).then((compiled) => {
    fixture = TestBed.createComponent(profilePage);
    instance = compiled.instance;
    comp = fixture.componentInstance;
  })));

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
    el = null;
  });

  it('Should be create Profile Page', () => {
    expect(instance).toBeTruthy();
  });

  it('Initialises with a title of Profile Page', () => {
    expect(comp['title']).toEqual('Perfil');
  });

  it('Validate objet user is defined', () => {
    expect(comp['user']).toBeDefined();
  });

  it('Validate objet user is an Object', () => {
    expect(comp['user']).toEqual(jasmine.any(Object));
  });

  it('Matches objects with the expect key, object User', () => {
    expect(comp['title']).toEqual('Perfil');
    expect(Object.getOwnPropertyNames(comp['user']).sort()).toEqual(['birthday', 'client_at', 'language', 'name', 'picture']);
  });

});