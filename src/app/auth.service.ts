import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userMap:Map<string, string> = new Map();
  public loggedInUser:string;

  constructor() { 
    this.userMap.set('admin', 'admin');
    this.userMap.set('user1', 'user1p');
    this.userMap.set('user2', 'user2p');
  }

  login(username:string, password: string): Observable<boolean>{
    let correctp = this.userMap.get(username);
    let login = correctp != null && correctp == password;
    
    if(login) {
      this.loggedInUser = username;
    }

    return timer(2000).pipe(mapTo(login)) ;
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }
  
}
