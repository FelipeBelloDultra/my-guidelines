import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Programming from '../pages/Programming';
import VersionControl from '../pages/VersionControl';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/programming" component={Programming} />
    <Route path="/version" component={VersionControl} />
  </Switch>
);

export default Routes;
