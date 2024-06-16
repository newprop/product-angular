import { Component, inject } from '@angular/core';

import { AppUser } from '../../SecurityModels/auth-response';
import { AuthService } from '../../SecurityModels/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  public UserList: AppUser[] = [];

  private service = inject(AuthService);


  ngOnInit() {
    this.LoadData();
  }


  LoadData() {
    this.service.users().subscribe((response: AppUser[]) => {
      this.UserList = response;
      //console.log(response);
    },
      (error) => {
        console.log('Observable emitted an error:' + error);

      });
  }
}
