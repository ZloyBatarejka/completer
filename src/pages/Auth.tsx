import { observer } from 'mobx-react';
import React from 'react';
import AuthService from '../stores/auth';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
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
        <Grid className="wrapper">
            <div className="Background"></div>
            <div className="AuthBack"></div>
            <div className="Auth">
                sasa
            </div>
        </Grid>
    )
})
