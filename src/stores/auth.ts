import { makeObservable, observable, action } from "mobx"

interface IAuth {
    auth: boolean;
}

class Auth implements IAuth {

    /** авторизация */
    public auth: boolean = false;

    /** singleton instance */
    private static onlyInstance: Auth;

    constructor() {

        if (!Auth.onlyInstance) {
            Auth.onlyInstance = this;
        } else {
            return Auth.onlyInstance;
        }

        makeObservable(this, {
            auth: observable,
            login: action.bound,
            logout: action.bound
        })
    }

    login(cb: () => void): void {
        this.auth = true;
        cb();
    }

    logout(): void {
        this.auth = false;
    }
}

export default Auth;