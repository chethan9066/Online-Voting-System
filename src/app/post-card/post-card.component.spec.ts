import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderPipe } from 'ngx-order-pipe';
import { RouterTestingModule } from '@angular/router/testing';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { PostCardComponent } from './post-card.component';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ RouterTestingModule,
                NgxPaginationModule,
                OrderModule,
                Ng2SearchPipeModule],

      declarations: [ PostCardComponent ,OrderPipe],

      providers:[OrderPipe]
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
});
