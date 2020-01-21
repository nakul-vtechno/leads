import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email : string;
  public password : string;
  loginForm: FormGroup;

  constructor(
    private authService : AuthService,
    private router: Router,
    private usersService : UsersService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userEmail: new FormControl(''),
      userPassword: new FormControl(''),
    });
  }

  login() {
    const isValidUser = this.authService.authUserLogin({userMail : this.loginForm.get('userEmail').value});
    console.log('isValidUser => ', isValidUser[0]);

    if (isValidUser) {
      this.usersService.setCurrentUser(isValidUser[0]);
      setTimeout(() => {
        this.router.navigate(['/dashboard/']);
      }, 2000);
    }
  }

}
