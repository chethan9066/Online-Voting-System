import { Component, OnInit, 
  ChangeDetectorRef ,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  ViewRef } from '@angular/core';

import {UserData} from './usrdata.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;

  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<UserData>>()
  
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

  add_post(){
    this.posts.push( new UserData( this.postString,this.name,this.title,this.category ,'https://bootdey.com/img/Content/avatar/avatar7.png', 12, 2,Date.now()));
    this.changeDetectorRef.detectChanges();
    this.name=""
    this.title=""
    this.category=""
    this.postString=""
    
  }
  constructor(private changeDetectorRef: ChangeDetectorRef ,
      private CFR: ComponentFactoryResolver) { }

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

delete_post(i:number){

    this.posts.splice(i,1)
}

}
  
