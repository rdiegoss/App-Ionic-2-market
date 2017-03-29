import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { loginPage } from './login.page';


let fixture: ComponentFixture<loginPage> = null;
let instance: any = null;

describe('Page: LoginPage', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([loginPage]).then((compiled) => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.detectChanges();
  })));

  afterEach(() => {
    fixture.destroy();
  });

  it('Should be create Login Page', () => {
    expect(instance).toBeTruthy();
  });

});
