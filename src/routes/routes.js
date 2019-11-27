import React, { } from "react";
import { Switch, Route } from "react-router-dom";

// pages
import Home from 'features/home';
import { User, AddUser, UpdateUser } from 'features/user'
import { Category, AddCategory, UpdateCategory } from 'features/category'
import { CurrencyUnit, AddCurrencyUnit, UpdateCurrencyUnit } from 'features/currencyUnit'
import { Faq, AddFaq, UpdateFaq } from 'features/faq'
import { Token } from 'features/token'
import { NotFound } from 'features/notFound'

const Routers = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />

      <Route exact path='/users' component={User} />
      <Route exact path='/add-user' component={AddUser} />
      <Route exact path='/user/:id' component={UpdateUser} />

      <Route exact path='/categories' component={Category} />
      <Route exact path='/add-category' component={AddCategory} />
      <Route exact path='/category/:id' component={UpdateCategory} />

      <Route exact path='/currencies' component={CurrencyUnit} />
      <Route exact path='/add-currency' component={AddCurrencyUnit} />
      <Route exact path='/currency/:id' component={UpdateCurrencyUnit} />

      <Route exact path='/faqs' component={Faq} />
      <Route exact path='/add-faq' component={AddFaq} />
      <Route exact path='/faq/:id' component={UpdateFaq} />

      <Route exact path='/tokens' component={Token} />

      <Route path='*' component={NotFound} />
    </Switch>
  )
}
export default Routers
