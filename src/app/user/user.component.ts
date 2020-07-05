import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {UserData} from './usrdata.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  voteCount: number = 0;
  userVote: number = 0;
  posts: UserData[] = [];

  name:string;
  title:string;
  category:string;
  postString:string;
  today= Date.now();


  ngOnInit(): void {

    
  }
enable=false
  add_post(){
    this.posts.push( new UserData( this.postString,this.name,this.title,this.category ,'https://bootdey.com/img/Content/avatar/avatar7.png', 12, 2,Date.now()));
    this.changeDetectorRef.detectChanges();
    if(this.name!="" &&
    this.title!="" &&
    this.category!="" &&
    this.postString!=""){
      this.enable=true

    }else {this.enable=false
      }
    

  }
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

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
