import { Component, OnInit, 
  ChangeDetectorRef  } from '@angular/core';

import {UserData} from './usrdata.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef, private dataService: DataService) { }
  
  voteCount: number = 0;
  userVote: number = 0;
  posts: UserData[] = [];
  posts$: Observable<UserData[]>;

  name:string;
  title:string;
  category:string;
  postString:string;
  today= Date.now();


  ngOnInit(): void {

    
  }

  addPost(){
    this.posts$ = this.dataService.addPost( new UserData( this.postString,this.name,this.title,this.category ,'https://bootdey.com/img/Content/avatar/avatar7.png', 12, 2,Date.now()));
    this.name=""
    this.title=""
    this.category=""
    this.postString=""
    
  }

  deletePost(i:number){

    this.posts$=this.dataService.deletePost(i)
}
  
  upvote() {
    if(this.userVote==0)
    {
      this.userVote=1
      this.voteCount++
    }else if(this.userVote==1){
      alert("Already Voted")
    }else if(this.userVote==-1){
      this.userVote=1
      this.voteCount++
    }
  }

  downvote() {
    if(this.userVote==0){
      this.userVote=-1
      this.voteCount--;
    }
    else if(this.userVote==-1){
      alert("Already De-Voted")
    }
    else if(this.userVote==1){
      this.userVote=-1
      this.voteCount--;

    }
  }





}
  
