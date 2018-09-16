import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TableSample from './components/TableSample'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Posts from './components/Posts';
import Albums from './components/Albums';

// test
const Routes = () => (
  <Switch>
    <Route exact path="/sample1" component={TableSample} />
    <Route exact path="/posts" component={Posts} />
    <Route exact path="/photos" component={Albums} />
    <Route exact path="/" component={Home} />
    <Route  component={NotFound} />
  </Switch>
);

export default Routes;
