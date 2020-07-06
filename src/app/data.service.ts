import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostData } from './user/post.model';
import{ AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private authService:AuthService) { }

posts: PostData[] = [];
totalUpVotes:number=0;

addPost(post: PostData):Observable<PostData[]>{
    
    this.posts.push( post);
    return this.createObservable(this.posts);
  }

  createObservable(posts: PostData[]): Observable<PostData[]>  {
    return Observable.create(
      (observer) => {
        setTimeout(() => {
          observer.next(posts);
        }, 5000);
      }
    )
  }

deletePost(i:number):Observable<PostData[]>{
  this.posts.splice(i,1)
  return this.createObservable(this.posts);

  }

checkIsUserVoted(i:number):Observable<PostData[]>{
  let user=this.authService.getLoggedInUser()
  let isUpVoted=this.posts[i].upVotesUsers.has(user)
  let isDownVoted = this.posts[i].downVotesUsers.has(user)
  if(isUpVoted){
    this.posts[i].upVoted=true;
  }else if(isDownVoted){
    this.posts[i].downVoted=true;
  }  

  return this.createObservable(this.posts);
}  

upVote(i:number):Observable<PostData[]>{
  let user=this.authService.getLoggedInUser()
  let isThere=this.posts[i].downVotesUsers.has(user)
  this.posts[i].isUpVote=true
  this.posts[i].isDownVote=false
  if(isThere){
    this.posts[i].downVotesUsers.delete(user)
    this.posts[i].upVotesUsers.add(user)
  }else{
    this.posts[i].upVotesUsers.add(user)
  }
  return this.createObservable(this.posts);
}

downVote(i:number):Observable<PostData[]>{
  let user=this.authService.getLoggedInUser()
  let isThere=this.posts[i].upVotesUsers.has(user)
  this.posts[i].isUpVote=false
  this.posts[i].isDownVote=true
  if(isThere){
    this.posts[i].downVotesUsers.add(user)
    this.posts[i].upVotesUsers.delete(user)
  }else{
    this.posts[i].downVotesUsers.add(user)
  }

  return this.createObservable(this.posts);

}

}

/*userComponenetObs(i:number): Observable<String>  {
    return Observable.create(
      (observer) => {
        setTimeout(() => {
          observer.next(this.posts[i].upVotesUsers.size);
        }, 5000);
      }
    )
  }

}*/
