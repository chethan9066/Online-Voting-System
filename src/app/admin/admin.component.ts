import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-user',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private getusername:AuthService) { }
  

  ngOnInit(): void {
    
  }
  username:string=this.getusername.getLoggedInUser();
  

}
  
