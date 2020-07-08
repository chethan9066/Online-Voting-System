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

  loadVotes () {
    for(let postIndex in this.posts) 
      this.checkIsUserVoted(+postIndex);
  }

deletePost(i:number):Observable<PostData[]>{
  this.posts.splice(i,1)
  return this.getPosts();

  }

checkIsUserVoted(i:number) {
  let user=this.authService.getLoggedInUser()
  this.posts[i].isUpVote=this.posts[i].upVotesUsers.has(user)
  this.posts[i].isDownVote=this.posts[i].downVotesUsers.has(user)
}  

upVote(i:number):Observable<PostData[]>{
  let user=this.authService.getLoggedInUser()
  this.posts[i].downVotesUsers.delete(user)
  this.posts[i].upVotesUsers.add(user)
  this.checkIsUserVoted(i)
  
  return this.getPosts();
}

downVote(i:number):Observable<PostData[]>{
  let user=this.authService.getLoggedInUser()
  this.posts[i].upVotesUsers.delete(user)
  this.posts[i].downVotesUsers.add(user)
  this.checkIsUserVoted(i);

  return this.getPosts();
}

  getPosts():Observable<PostData[]>{
   let posts$ = this.createObservable(this.posts);
   if ( this.sortBy == null ){
      //console.log(posts$)
      return posts$;
   }
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

