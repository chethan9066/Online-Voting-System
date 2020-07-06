import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';

import { DataService } from '../data.service';
import { AdminComponent } from "../admin/admin.component"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor( 
      private dataService: DataService,
      private getPost: AdminComponent) { }

      posts$=this.getPost.posts$;

  ngOnInit(): void {
    this.posts$=this.dataService.getPosts();
  }

}
