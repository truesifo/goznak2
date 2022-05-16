import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginInfo } from '../../state-models';
import { Store } from '@ngxs/store';
import { Login, Logout } from './store/auth.actions';
import { AuthStatusState } from './store/auth.state';

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
    error$: Observable<string>;

    constructor(private _store: Store, private _authService: AuthenticationService) {}

    ngOnInit() {
        this.initValues();
    }

    private initValues() {
        this.loggedIn$ = this._store.select(AuthStatusState.getLoggedIn);
        this.username$ = this._store.select(AuthStatusState.getUsername);
        this.error$ = this._store.select(AuthStatusState.getError);
    }

    doLogin(): void {
        const sendBack: LoginInfo = {
            username: this.username,
            password: this.password,
        };

        this._store.dispatch(new Login(sendBack));
    }

    logout(): void {
        this._store.dispatch(new Logout());
    }
}
