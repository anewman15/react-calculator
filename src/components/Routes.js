/*
 eslint-disable no-unused-vars
*/

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopNav from './TopNav';
import Home from './Home';
import Calculator from './Calculator';
import QuoteOfTheDay from './QuoteOfTheDay';

const Routes = () => (
  <BrowserRouter>
  <TopNav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/calculator' component={Calculator} />
      <Route exact path='/quote-of-the-day' component={QuoteOfTheDay} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
