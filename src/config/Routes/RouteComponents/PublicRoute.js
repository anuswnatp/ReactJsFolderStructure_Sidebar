
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({component: Component, auth: auth, restricted, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            auth && restricted ?
                <Redirect to='/auth/home' />
            :
            <Component {...props} />
        )}
        />
    );
};

PublicRoute.propTypes = {
    auth: PropTypes.bool,
    component: PropTypes.func,
    restricted: PropTypes.bool
};

export default PublicRoute;
