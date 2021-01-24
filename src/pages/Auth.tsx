import React from 'react';
import { observer } from 'mobx-react';
import { useHistory } from "react-router-dom";
import { TextField } from '@material-ui/core';
import FloatingButton from 'src/components/floatingButton/FloatingButton';
import 'src/styles/auth.scss';
import AuthService from 'src/stores/auth';

const authService = new AuthService();

export const Auth = observer(() => {

    /** хистори  для редиректа*/
    const history = useHistory();

    /** cb для редиректа */
    const redirect = (): void => {
        history.push('/');
    }

    /** вызываем метод сервиса */
    const login = (): void => {
        authService.login(redirect)
    }

    const y = 'gsdf';
    const z = 'df';

    return (
        <div className="wrapper">
            <div className="Background"></div>
            <div className="AuthBack"></div>
            <div className="Auth">
                <TextField fullWidth label="Email" variant="outlined" style={{marginBottom: 45}}/>
                <TextField fullWidth label="Password" variant="outlined" style={{marginBottom: 80}}/>
                <div className = 'Auth-buttons'>
                    <FloatingButton label="Войти" callback={login.bind(this)}/>
                    <FloatingButton label="Регистрация" callback={() => {console.log(z)}}/>
                </div>
            </div>
        </div>
    )
})
