import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login-ngxs',
  templateUrl: './login-ngxs.component.html',
  styleUrls: ['./login-ngxs.component.css']
})
export class LoginNgxsComponent implements OnInit {
  username: string;
  password: string;
  username$: Observable<string>;
  loggedIn$: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }

  doLogin() {
    //login
  }

  logout(): void {
    //logout
  }
}
