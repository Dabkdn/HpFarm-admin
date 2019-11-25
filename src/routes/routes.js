import React, { } from "react";
import { Switch, Route } from "react-router-dom";

// pages
import Home from 'features/home';
import { NotFound } from 'features/notFound'

const Routers = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}
export default Routers
