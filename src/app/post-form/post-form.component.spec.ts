import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//import {  Observable } from 'rxjs/';

import { PostFormComponent } from './post-form.component';
import { DataService}  from '../data.service';
import { timer, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { PostData } from '../admin/post.model';


describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async(() => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['addPost']);

    TestBed.configureTestingModule({
      imports:[RouterTestingModule ],
      declarations: [ PostFormComponent ],
      providers: [
        {provide: DataService, useValue: dataServiceSpy}
      ],
      schemas: [ NO_ERRORS_SCHEMA ,
        CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Add a Post', ()=>{
    let postdata:PostData[] = []
    let postdata$:Observable<PostData[]> = timer(0).pipe ( mapTo(postdata) );
    dataServiceSpy.addPost.and.returnValue(postdata$)
    
    component.addPost();

    expect( dataServiceSpy.addPost ).toHaveBeenCalled();


  });

});
