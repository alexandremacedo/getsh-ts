import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} isPrivate />
  </Switch>
);

export default Routes;
