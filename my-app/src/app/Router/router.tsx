import React from 'react';
import { 
    BrowserRouter,
    Switch,
    Route,
    Link 
} from 'react-router-dom';
import ProductPage  from '../components/page/product/product';
import HomePage from '../components/page/index/index';
import LoginPage from '../components/auth/login';
import UserPage from '../components/page/user/user.page';

export default function App()
{
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/product" component = {ProductPage} />
        <Route path="/user" component = {UserPage} />
      </Switch>
    </div> 
  )
}