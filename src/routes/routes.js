import React, { } from "react";
import { Switch, Route } from "react-router-dom";

// pages
import Home from 'features/home';
import { User, AddUser, UpdateUser } from 'features/user'
import { NotFound } from 'features/notFound'

const Routers = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/users' component={User} />
      <Route exact path='/add-user' component={AddUser} />
      <Route exact path='/user/:id' component={UpdateUser} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}
export default Routers
