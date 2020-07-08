import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderPipe } from 'ngx-order-pipe';
import { RouterTestingModule } from '@angular/router/testing';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { PostCardComponent } from './post-card.component';
import {DataService} from '../data.service';
import { PostData } from '../admin/post.model';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;


  beforeEach(async(() => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['deletePost','upVote','downVote','setSort']);


    TestBed.configureTestingModule({
      imports:[ RouterTestingModule,
                NgxPaginationModule,
                OrderModule,
                Ng2SearchPipeModule],

      declarations: [ PostCardComponent ,OrderPipe],

      providers:[OrderPipe,
        {provide: DataService, useValue: dataServiceSpy}],
      
        schemas: [ NO_ERRORS_SCHEMA ,
                   CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Post Card', () => {
    expect(component).toBeTruthy();
  });

  it('Should Delete Post', () =>{
    let postdata:PostData[] = []
    let postdata$:Observable<PostData[]> = timer(0).pipe ( mapTo(postdata) );
    dataServiceSpy.deletePost.and.returnValue(postdata$)

    component.deletePost(1);
    expect( dataServiceSpy.deletePost ).toHaveBeenCalledWith(1);


  });

  it('Should Be UpVote',() =>{
    let postdata:PostData[] = []
    let postdata$:Observable<PostData[]> = timer(0).pipe ( mapTo(postdata) );
    dataServiceSpy.upVote.and.returnValue(postdata$)

    component.upVote(1);
    expect( dataServiceSpy.upVote ).toHaveBeenCalledWith(1);

  });

  it('Should Be DownVote',() =>{
    let postdata:PostData[] = []
    let postdata$:Observable<PostData[]> = timer(0).pipe ( mapTo(postdata) );
    dataServiceSpy.downVote.and.returnValue(postdata$)

    component.downVote(1);
    expect( dataServiceSpy.downVote ).toHaveBeenCalledWith(1);

  });

  it('Should Be Sort By Type',() =>{
    let postdata:PostData[] = []
    let postdata$:Observable<PostData[]> = timer(0).pipe ( mapTo(postdata) );
    dataServiceSpy.setSort.and.returnValue(postdata$)

    component.setSort('username');
    expect( dataServiceSpy.setSort ).toHaveBeenCalledWith('username');

  })

});
