import { Component, OnInit, 
  ChangeDetectorRef  } from '@angular/core';

import {PostData} from '../admin/post.model';
import { Observable, from } from 'rxjs';
import {DataService} from '../data.service';
import { AuthService } from '../auth.service'
import { tap } from 'rxjs/operators';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  constructor(private changeDetectorRef: ChangeDetectorRef,
     private dataService: DataService,
     private getusername:AuthService,
     private orderPipe: OrderPipe,
     private router:Router) { }
 
  searchPost;
  page:number=1;
  username:string=this.getusername.getLoggedInUser();
  totalUpvotes$:Observable<PostData[]>;
  totalDownVotes$: Observable<PostData[]>;
  upvoteActive:boolean=false;
  downvoteActive:boolean=false;


  posts$: Observable<PostData[]>;

  loading=[];
  sortSet = 'username';


  ngOnInit(): void {
    if(this.username==null){
      this.router.navigate(["login"]);
    }else{
      this.posts$=this.dataService.getPosts();
    }

  }

  deletePost(i:number){
    this.loading[i]=true;
    setTimeout(() => {
      this.loading[i]=false;
    }, 5000);
    this.posts$=this.dataService.deletePost(i)
}
  
  upVote(i:number) {
    if(!this.dataService.checkIsUserVoted)
    {
      this.dataService.upVote(i)
    }else {
      this.dataService.upVote(i)

    }

  }

  downVote(i:number) {
    
    if(!this.dataService.checkIsUserVoted)
    {
      this.dataService.downVote(i)
    }else {
      this.dataService.downVote(i)

    }
  }

  setSort(value:string) {
    this.sortSet = value;
    console.log("Sorting by :" + value);
    this.posts$ = this.dataService.setSort(value);
  }
  
  }

