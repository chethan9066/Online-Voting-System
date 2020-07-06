import { Component, OnInit, 
  ChangeDetectorRef  } from '@angular/core';

import {PostData} from './post.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef, private dataService: DataService) { }
  
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


  ngOnInit(): void {

    
  }


  addPost(){
    this.posts$ = this.dataService.addPost( new PostData( this.postString,this.name,this.title,this.category ,'https://bootdey.com/img/Content/avatar/avatar7.png',Date.now(),this.isUpVote,this.isDownVote))
    this.name=""
    this.title=""
    this.category=""
    this.postString=""
    
  }

  deletePost(i:number){

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
  
