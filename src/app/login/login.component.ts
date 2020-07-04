import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  username: string;
  password: string;
  showSpinner: boolean;
  ngOnInit(): void {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
     console.log(["user"])
     this.showSpinner=true;
    }else {
      alert("Invalid credentials");
      this.showSpinner=false;
    }
  }

}
