import { Injectable } from '@angular/core';
import{ UserComponent } from './user/user.component';
import { Observable, of } from 'rxjs';
import { UserData } from './user/usrdata.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
posts: UserData[] = [];
  addPost(post: UserData):Observable<UserData[]>{
    
    this.posts.push( post);
    return this.createObservable(this.posts);
  }
  constructor() { }

  createObservable(posts: UserData[]): Observable<UserData[]>  {
    return Observable.create(
      (observer) => {
        setTimeout(() => {
          observer.next(posts);
        }, 5000);
      }
    )
  }

deletePost(i:number):Observable<UserData[]>{
  this.posts.splice(i,1)
  return this.createObservable(this.posts);
}
}
