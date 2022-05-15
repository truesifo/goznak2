import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginInfo } from '../../state-models';

@Component({
    selector: 'app-login-ngxs',
    templateUrl: './login-ngxs.component.html',
    styleUrls: ['./login-ngxs.component.css'],
})
export class LoginNgxsComponent implements OnInit {
    username: string;
    password: string;
    username$: Observable<string>;
    loggedIn$: Observable<boolean>;

    constructor(private _authService: AuthenticationService) {}

    ngOnInit() {}

    doLogin() {
        // TODO login
        // this._authService.signIn();
        console.log('doLogin', this.username, this.password);
        const sendBack: LoginInfo = {
            username: this.username,
            password: this.password,
        };
        this._authService.signIn(sendBack);
    }

    logout(): void {
        // TODO logout
        this._authService.signout();
    }
}
