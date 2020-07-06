import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ AuthService } from '../auth.service';
import { Observable, timer } from 'rxjs';
//import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }
  username: string;
  password: string;
  showSpinner: boolean;
  userAuth$:Observable<boolean>;
  ngOnInit(): void {
  }

  login() : void {
    
      if(this.authService.login(this.username,this.password)){
        this.router.navigate(["user"]);
        this.showSpinner=true;
      }else {
        this.showSpinner=true
        setTimeout(() => {
          this.showSpinner=false
        }, 3000);

      setTimeout
    }
  }

}
