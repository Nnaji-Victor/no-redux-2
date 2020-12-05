import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import PrivateRoutes from './Components/PrivateRoutes';
import { history } from './_helpers/history';

const Home = React.lazy(() => import('./Pages/Home'));
const Login = React.lazy(() => import('./Pages/Login'));
const Register = React.lazy(() => import('./Pages/Register'));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>...loading</div>}>
        <Router history={history}>
          <Switch>
            <PrivateRoutes exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
