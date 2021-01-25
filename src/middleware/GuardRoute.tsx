import React from 'react';
import { Route, RouteProps, Redirect } from "react-router-dom";
import AuthService from 'src/stores/auth';

const authService = new AuthService();

const GuardedRoute: React.FC<RouteProps> = ({component: Component, ...rest}) => {

    if (!Component) return null;

    return (
        <div>
            <Route {...rest} render={ props => authService.auth ? 
            <Component  {...props} /> 
            : <Redirect to={{pathname: '/auth',state: {from: props.location} }}/> }/>
        </div>
    )
}

export default GuardedRoute;