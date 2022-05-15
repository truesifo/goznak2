export interface AuthStateModel {
    username: string | null;
    loggedIn: boolean | false;
}

export interface LoginInfo {
    username: string;
    password: string;
}

export class Login {
    static readonly type = '[Auth] Login';

    constructor(public payload: LoginInfo) {}
}

export class Logout {
    static readonly type = '[Auth] Logout';
}
