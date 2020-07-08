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

  login(){
      this.loading=true
      this.authService.login(this.username,this.password).subscribe( (valid:boolean) => {
        this.loading=false
        if(valid) {
          
          this.router.navigate(["online-voting-system"]);
        }
        
      } )
  }

}
