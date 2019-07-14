import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

import Login from './components/Login/Login';
import Dashboard from './components/App/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path="/app" component={Dashboard} />
        <Route path="*" component={() => '404 PAGE NOT FOUND'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
