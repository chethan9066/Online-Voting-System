import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {UserData} from './usrdata.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  

  ngOnInit(): void {

    this.posts.push( new UserData( 'This is post string', 'user1', true, false, 'https://bootdey.com/img/Content/avatar/avatar7.png', 12, 2,7 ));
    this.changeDetectorRef.detectChanges();

  }
  voteCount: number = 0;
  userVote: number = 0;
  posts: UserData[] = [];

  subscription;

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
  

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  create_post(){
    let div1=document.createElement("div")
    div1.className="card text-center"
    let div2=document.createElement("div")
    div2.className="card-body"
    let title=document.createElement("input")
    title.setAttribute("type","text")
    document.body.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(title)

  }

}
