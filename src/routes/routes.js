import React, { } from "react";
import { Switch, Route } from "react-router-dom";

// pages
import Home from 'features/home';
import { User, AddUser, UpdateUser } from 'features/user'
import { Category, AddCategory, UpdateCategory } from 'features/category'
import { CurrencyUnit, AddCurrencyUnit, UpdateCurrencyUnit } from 'features/currencyUnit'
import { Login } from 'features/login'
import { Faq, AddFaq, UpdateFaq } from 'features/faq'
import { Token } from 'features/token'
import { NotFound } from 'features/notFound'

import { RequiredAdmin } from 'components/authentication'

const Routers = () => {
  return (
    <Switch>
      <Route exact path='/' component={RequiredAdmin(Home)} />
      <Route exact path='/home' component={RequiredAdmin(Home)} />

      <Route exact path='/login' component={Login} />

      <Route exact path='/users' component={RequiredAdmin(User)} />
      <Route exact path='/add-user' component={RequiredAdmin(AddUser)} />
      <Route exact path='/user/:id' component={RequiredAdmin(UpdateUser)} />

      <Route exact path='/categories' component={RequiredAdmin(Category)} />
      <Route exact path='/add-category' component={RequiredAdmin(AddCategory)} />
      <Route exact path='/category/:id' component={RequiredAdmin(UpdateCategory)} />

      <Route exact path='/currencies' component={RequiredAdmin(CurrencyUnit)} />
      <Route exact path='/add-currency' component={RequiredAdmin(AddCurrencyUnit)} />
      <Route exact path='/currency/:id' component={RequiredAdmin(UpdateCurrencyUnit)} />

      <Route exact path='/faqs' component={RequiredAdmin(Faq)} />
      <Route exact path='/add-faq' component={RequiredAdmin(AddFaq)} />
      <Route exact path='/faq/:id' component={RequiredAdmin(UpdateFaq)} />

      <Route exact path='/tokens' component={RequiredAdmin(Token)} />

      <Route path='*' component={NotFound} />
    </Switch>
  )
}
export default Routers
