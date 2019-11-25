import React, { } from "react";
import { Switch, Route } from "react-router-dom";

// pages
import Home from 'features/home';
import { User } from 'features/user'
import { NotFound } from 'features/notFound'

const Routers = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/user' component={User} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}
export default Routers
