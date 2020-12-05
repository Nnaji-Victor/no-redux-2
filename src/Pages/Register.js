import React from 'react'
import Form from '../Components/Form'
import { asyncConstants } from '../_helpers/constants';
import { history } from '../_helpers/history';
import useAsync from '../_hooks/use-async';
import { authServices } from '../_services/auth-services';

const Register = () => {
    const {status, error, run} = useAsync()

    const handleRegister = (data) =>{
       run(authServices.register(data));
    }

    React.useEffect(() => {
        if(status === asyncConstants.RESOLVED){
            history.push("/login");
        }
    }, [status])

    return (
        <Form onSubmit={handleRegister} status={status} error={error}/>
    )
}

export default Register
