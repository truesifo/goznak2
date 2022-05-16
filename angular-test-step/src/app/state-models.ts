export interface AuthStateModel {
    username: string | null;
    loggedIn: boolean | false;
    error: string | null;
}

export interface LoginInfo {
    username: string;
    password: string;
}

export interface ErrorState {
    error: string | null;
}

export class Login {
    static readonly type = '[Auth] Login';

    constructor(public payload: LoginInfo) {}
}

export class Logout {
    static readonly type = '[Auth] Logout';
}
