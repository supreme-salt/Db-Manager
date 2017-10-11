import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';

// <Route path="/" component={Search} />
const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
