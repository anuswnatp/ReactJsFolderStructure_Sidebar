import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import UseCase from '~/containers/Home';
import Login from '~/containers/login';
import PrivateRoute from './RouteComponents/PrivateRoute';
import PublicRoute from './RouteComponents/PublicRoute';
import { isLogin } from '@utils/login';

function Routes() {
    const [auth, setAuth] = useState(true);
    const getAuth = async() =>{
        let status = await isLogin();
        console.log('status', status);
        // togle status
        setAuth(!status);
    };
    useEffect(() => {
        getAuth();
    }, []);
    return (
        <BrowserRouter>
            <Route
            // eslint-disable-next-line no-unused-vars
                render={(props) => (
                    <Switch>
                        // if home redirect to login
                        <Route exact={true} path='/' render={()=><Redirect to='/signin'/>}/>
                        //Private Routes are the ones which are accessible only after login
                        <PrivateRoute auth={auth} component={UseCase} exact={true} path='/auth/home'/>
                        //Public Routes are the ones which are accessible without login
                        <PublicRoute auth={auth} component={Login} exact={true} path='/signin' restricted={true}/>
                    </Switch>
                )}
            />
        </BrowserRouter>
    );
}

export default Routes;
