import { Component, OnInit, 
         ChangeDetectorRef  } from '@angular/core';
        
import {PostData} from '../admin/post.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  constructor(
             private dataService: DataService,
             private getusername:AuthService) { }

  username:string=this.getusername.getLoggedInUser();
  name:string;
  title:string;
  category:string;
  postString:string;
  isUpVote:boolean;
  isDownVote:boolean;
  posts: PostData[] = [];
  ngOnInit(): void {
  }

  
  addPost(){
    this.dataService.addPost( new PostData( this.postString,this.name,this.title,this.category ,'https://bootdey.com/img/Content/avatar/avatar7.png',Date().toString(),this.isUpVote,this.isDownVote))
    this.name=""
    this.title=""
    this.category=""
    this.postString=""
    
  }
}
