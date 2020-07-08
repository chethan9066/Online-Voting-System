import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoginComponent } from './login.component';
import{ AuthService } from '../auth.service';
import {  Router } from '@angular/router';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service:AuthService;
  let spy: any;
  let router:Router



 beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],

      declarations: [ LoginComponent ],
      schemas: [ NO_ERRORS_SCHEMA ,
        CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  

  beforeEach(() => {
    service = new AuthService();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = new LoginComponent(router,service);
  });

  afterEach(() => { 
    service = null;
    component = null;
  });
  
  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should Check user name and Password return true if valid',()=>{
    spy = spyOn(service, 'login').and.returnValue(true);
    //console.log("spy " + spy)
    expect(component.login()).toBeTruthy();
  });

  it('should Check user name and Password return false if not valid',()=>{
    spy = spyOn(service, 'login').and.returnValue(false);
    expect(component.login()).toBeFalsy();
  });

});
