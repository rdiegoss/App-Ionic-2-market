import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { blogPage } from './blog.page';
import { appHeader } from '../../components/appHeader/appHeader.component'


let fixture: ComponentFixture<blogPage> = null;
let instance: any = null;
let comp: blogPage;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Blog', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([blogPage, appHeader]).then((compiled) => {
    fixture = TestBed.createComponent(blogPage);
    comp = fixture.componentInstance;
  })));

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
    el = null;
  });

  it('Should be create Blog Page', () => {
    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();
  });

  it('initialises with a title of Blog Page', () => {
    expect(comp['title']).toEqual('Blog SD');
  });
});