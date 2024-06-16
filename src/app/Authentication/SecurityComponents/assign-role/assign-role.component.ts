//import { Component, inject } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';
//import { AppRole, AppUser } from '../../SecurityModels/auth-response';
//import { AuthService } from '../../SecurityModels/auth.service';

//@Component({
//  selector: 'app-assign-role',
//  templateUrl: './assign-role.component.html',
//  styleUrl: './assign-role.component.css'
//})
//export class AssignRoleComponent {
//  model!: AppUser;

//  public roles: AppRole[] = [];
//  private service = inject(AuthService);
//  constructor(private router: Router, private route: ActivatedRoute) {

//  }

//  ngOnInit() {
//    let id = this.route.snapshot.params['id'];
//    this.service.roles().subscribe((response: AppRole[]) => {
//      this.roles = response;
//      //console.log(response);
//    },
//      (error) => {
//        console.log('Observable emitted an error:' + error);

//      });

//    this.service.getUser(id).subscribe((response: AppUser) => {
//      this.model = response;
//      //console.log(response);
//    },
//      (error) => {
//        console.log('Observable emitted an error:' + error);

//      });


//  }
//  submit(event: Event) {
//    event.preventDefault();

//    alert(JSON.stringify(this.model));

//    this.service.userAssignRole(this.model).subscribe((response: any) => {
//      this.router.navigate(['/userlist']);
//      //console.log(response);
//    },
//      (error) => {
//        console.log('Observable emitted an error:' + error);

//      });

//  }
//}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRole, AppUser } from '../../SecurityModels/auth-response';
import { AuthService } from '../../SecurityModels/auth.service';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css']
})
export class AssignRoleComponent implements OnInit {
  model!: AppUser;
  public roles: AppRole[] = [];
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loadRoles();
    this.loadUser();
  }

  loadRoles() {
    this.authService.roles().subscribe(
      (response: AppRole[]) => {
        this.roles = response;
      },
      (error) => {
        this.errorMessage = 'Error loading roles';
        console.log('Observable emitted an error:', error);
      }
    );
  }

  loadUser() {
    const id = this.route.snapshot.params['id'];
    this.authService.getUser(id).subscribe(
      (response: AppUser) => {
        this.model = response;
      },
      (error) => {
        this.errorMessage = 'Error loading user';
        console.log('Observable emitted an error:', error);
      }
    );
  }

  submit(event: Event) {
    event.preventDefault();

    this.authService.userAssignRole(this.model).subscribe(
      () => {
        this.router.navigate(['/userlist']);
      },
      (error) => {
        this.errorMessage = 'Error assigning role';
        console.log('Observable emitted an error:', error);
      }
    );
  }
}
