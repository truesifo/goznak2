import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthStateModel, Logout } from '../../../state-models';
import { Login, LoginFailure, LoginSuccess } from './auth.actions';
import { catchError, map } from 'rxjs/operators';
import { AuthenticationService } from '../../../services/authentication.service';

const authStateDefaults: AuthStateModel = {
    username: null,
    loggedIn: false,
    error: null,
};

@State<AuthStateModel>({
    name: 'AuthState',
    defaults: authStateDefaults,
})
@Injectable()
export class AuthStatusState {
    constructor(private _authService: AuthenticationService) {}

    @Selector()
    static getLoggedIn(state: AuthStateModel) {
        return state.loggedIn;
    }

    @Selector()
    static getUsername(state: AuthStateModel) {
        return state.username;
    }

    @Selector()
    static getError(state: AuthStateModel) {
        return state.error;
    }

    @Action(Login)
    login({ dispatch, patchState }: StateContext<AuthStateModel>, action: Login) {
        patchState({
            loggedIn: true,
            username: action.payload.username,
            error: null,
        });
        return this._authService.signIn(action.payload).pipe(
            map(status => dispatch(new LoginSuccess({ loggedIn: status }))),
            catchError(error => {
                return dispatch(new LoginFailure(error));
            })
        );
    }

    @Action(LoginSuccess)
    loginSuccess({ patchState }: StateContext<AuthStateModel>) {
        patchState({
            loggedIn: true,
        });
    }

    @Action(LoginFailure)
    loginFailure({ patchState }: StateContext<AuthStateModel>, action: LoginFailure) {
        patchState({
            loggedIn: false,
            error: action.payload,
        });
    }

    @Action([Logout])
    logout({ setState }: StateContext<AuthStateModel>) {
        setState(authStateDefaults);
        return this._authService.signOut();
    }
}
