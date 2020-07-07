import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs/';
import{mapTo, tap} from 'rxjs/operators'
import { PostData } from './admin/post.model';
import{ AuthService } from './auth.service';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private authService:AuthService) { }

posts: PostData[] = [];
totalUpVotes:number=0;
sortBy = null;

addPost(post: PostData):Observable<PostData[]>{
    
    this.posts.push( post);
    return this.getPosts();
  }

  createObservable(posts: PostData[]): Observable<PostData[]>  {
    return timer(2000).pipe(mapTo(posts)); 
  }

deletePost(i:number):Observable<PostData[]>{
  this.posts.splice(i,1)
  return this.getPosts();

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

  return this.getPosts();
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
  return this.getPosts();
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

  return this.getPosts();

}

  getPosts():Observable<PostData[]>{
   let posts$ = this.createObservable(this.posts);
   if ( this.sortBy == null )
      return posts$;
    else 
      return this.sort(posts$)
  }

  setSort(value: string){
    this.sortBy = value;
    console.log("sort value: "+value)
     return this.getPosts();
    
    }

    sort(posts: Observable<PostData[]> ): Observable<PostData[]> {
      return posts.pipe( tap ( posts => {
          posts.sort( 
            (x, y) => { return x[this.sortBy] > y[this.sortBy] ? 1: -1}
          )
       })
      );
    }

}

