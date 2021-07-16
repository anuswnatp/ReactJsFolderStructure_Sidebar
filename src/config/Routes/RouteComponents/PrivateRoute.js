import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '~/layout/layout';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth: auth, ...rest }) => {
    console.log(auth, '---auth');
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            auth ?
                <Layout {...props}>
                    <Component {...props} />
                </Layout>
                :
                <Redirect to='/signin' />
        )}
        />
    );
};

PrivateRoute.propTypes = {
    auth: PropTypes.bool,
    component: PropTypes.func
};
export default PrivateRoute;
