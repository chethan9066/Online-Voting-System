import { Component, OnInit, 
  ChangeDetectorRef  } from '@angular/core';

import {PostData} from '../admin/post.model';
import { Observable, from } from 'rxjs';
import {DataService} from '../data.service';
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  constructor(private changeDetectorRef: ChangeDetectorRef, private dataService: DataService,private getusername:AuthService) { }
 
  searchPost;
  page:number=1;
  username:string=this.getusername.getLoggedInUser();
  totalUpvotes$:Observable<PostData[]>;
  totalDownVotes$: Observable<PostData[]>;
  upvoteActive:boolean=false;
  downvoteActive:boolean=false;

  posts: PostData[] = [];
  posts$: Observable<PostData[]>;

  name:string;
  title:string;
  category:string;
  postString:string;
  today= Date.now();
  isUpVote:boolean;
  isDownVote:boolean;
  loading=[];


  ngOnInit(): void {
    this.posts$=this.dataService.getPosts();

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


}
