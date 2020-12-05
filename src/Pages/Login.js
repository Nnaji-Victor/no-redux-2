import React from 'react'
import Form from '../Components/Form'
import { history } from '../_helpers/history';
import useAsync from '../_hooks/use-async';
import { authServices } from '../_services/auth-services';

const Login = () => {
    const {data: user, status, error, run} = useAsync();
    
    const handleLogin = (data) =>{
       run(authServices.login(data));
    }

    React.useEffect(() => {
        if(user){
            history.push('/');
        }
    }, [user])

    return (
        <Form onSubmit={handleLogin} status={status} error={error}/>
    )
}

export default Login
