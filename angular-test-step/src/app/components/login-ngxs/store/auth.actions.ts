import { LoginInfo } from '../../../state-models';

export class Login {
    static readonly type = '[Auth] Login';

    constructor(public payload: LoginInfo) {}
}

export class LoginSuccess {
    static readonly type = '[Auth] Login Success';

    constructor(public payload: { loggedIn: boolean }) {}
}

export class LoginFailure {
    static readonly type = '[Auth] Login Failure';

    constructor(public payload: any) {}
}

export class Logout {
    static readonly type = '[Auth] Logout';

    constructor() {}
}
