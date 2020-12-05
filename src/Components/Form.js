import React from 'react'
import { Link } from 'react-router-dom';
import { asyncConstants } from '../_helpers/constants';
import { history } from '../_helpers/history';

const Form = ({onSubmit, status, error}) => {
    const location = history.location.pathname.split('/')[1];
    const [submitted, setSubmitted] = React.useState(false);

    const [user, setUser] = React.useState({
        username: '',
        password: ''
    });

    function handleSubmit(event) {
        event.preventDefault()
        setSubmitted(true);
        if(user.username && user.password){
            onSubmit({
                username: user.username,
                password: user.password,
            })
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    return (
      <div className="jumbotron d-flex align-items-center" style={{height: '100vh', width: '100vw', marginBottom: 0}}>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-md-6 col-md-offset-3">
          {error && <div className="alert alert-danger" style={{display: 'block', marginBottom: '10px'}}>{error}</div>}
          <h2 style={{textTransform: "capitalize"}}>{location}</h2>
          <form name="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                id="username"
                aria-label="username"
                value={user.username}
                onChange={handleChange}
                className={
                  "form-control" +
                  (submitted && !user.username ? " is-invalid" : "")
                }
              />
              {submitted && !user.username && (
                <div className="invalid-feedback">Username is required</div>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                aria-label="password"
                type="password"
                name="password"
                id="password-field"
                value={user.password}
                onChange={handleChange}
                className={
                  "form-control" +
                  (submitted && !user.password ? " is-invalid" : "")
                }
              />
              {submitted && !user.password && (
                <div className="invalid-feedback">Password is required</div>
              )}
            </div>
            <div className="form-group">
              <button className="btn btn-primary" disabled={status === asyncConstants.PENDING ? true : false}>
                {status === asyncConstants.PENDING ? <span className="spinner-border spinner-border-sm mr-1" role="alert"></span> : null}
                {location}
              </button>
              <Link to={location === 'register' ? "/login" : "/register"} className="btn btn-link">
                {location === 'register' ? "Login" : "Cancel"}
              </Link>
            </div>
          </form>
        </div>
          </div>
        </div>
      </div>
    )
}

export default Form
