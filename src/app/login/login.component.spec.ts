import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { LoginComponent } from './login.component';
import{ AuthService } from '../auth.service';
import {  Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';


describe('LoginComponent', () => {
  let auth: jasmine.SpyObj<AuthService>;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service:AuthService;
  let spy: any;
  let router:Router



 beforeEach(async(() => {
  auth = jasmine.createSpyObj('AuthService', ['login']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]),
        FormsModule],

      declarations: [ LoginComponent ],
      schemas: [ NO_ERRORS_SCHEMA ,
        CUSTOM_ELEMENTS_SCHEMA],
      providers:[ {provide: AuthService, useValue: auth} ]
    })
    .compileComponents();
  }));

  

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => { 
    service = null;
    component = null;
  });
  
  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should Check user name and Password return true if valid',()=>{
    let valid : Observable<boolean>=timer(0).pipe ( mapTo(true) )
    auth.login.and.returnValue(valid);
    component.login()
    expect(auth.login).toHaveBeenCalled();
  });

  it('should Check user name and Password return false if not valid',()=>{
    let valid : Observable<boolean>=timer(0).pipe ( mapTo(false) )
    auth.login.and.returnValue(valid);
    component.login()
    expect(auth.login).toHaveBeenCalled();
  });

});
