import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  voteCount: number = 0;
  userVote: number = 0;

  subscription;

  constructor() { }

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
  ngOnInit(): void {
    
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
