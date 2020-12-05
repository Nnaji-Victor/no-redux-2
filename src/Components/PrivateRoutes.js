import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useLocalStorage } from '../_hooks';

const PrivateRoutes = ({ component: Component, ...rest }) => {
    const [user] = useLocalStorage('user');
    return (
        <Route {...rest}
         render={props => (
            user ? <Component{...props} /> 
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )}

        />
    )
}

export default PrivateRoutes
