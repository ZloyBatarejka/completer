import { observer } from 'mobx-react';
import React from 'react';
import AuthService from '../stores/auth';
import { useHistory } from "react-router-dom";
const authService = new AuthService();


export const Auth = observer(() => {

    const history = useHistory();

    /** cb для редиректа */
    const redirect = (): void => {
        history.push('/');
    }

    /** вызываем метод сервиса */
    const login = (): void => {
        authService.login(redirect)
    }

    return (
        <div>
            <button onClick={login}>Залогинится</button>
        </div>
    )
})
