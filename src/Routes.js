import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/calculator/App';
import Quote from './components/quote/Quote';
import Home from './components/home/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={App} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
