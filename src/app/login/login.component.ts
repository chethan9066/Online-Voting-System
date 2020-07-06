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
  userAuth$:Observable<boolean>;
  loading = false;
  ngOnInit(): void {
  }

  login() : void {
    
      if(this.authService.login(this.username,this.password)){
        this.loading=true
        setTimeout(() => {
          this.router.navigate(["online-voting-system"]);
        }, 2000);
      }else {
        this.loading=true
        setTimeout(() => {
          this.loading=false
        }, 3000);
        let p=document.createElement("p")
        p.nodeValue="User Name or Password Incorrect";
        
    }
  }

}
