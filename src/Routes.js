import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import SinglePhoto from './containers/SinglePhoto';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/photos/:id" component={SinglePhoto} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
