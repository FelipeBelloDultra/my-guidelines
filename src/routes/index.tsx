import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Programming from '../pages/Programming';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/" component={Programming} />
  </Switch>
);

export default Routes;
