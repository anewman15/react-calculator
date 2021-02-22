/*
 eslint-disable no-unused-vars
*/

import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import QuoteOfTheDay from './QuoteOfTheDay';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/calculator' component={Calculator} />
    <Route exact path='/quote-of-the-day' component={QuoteOfTheDay} />
  </Switch>
);

export default Routes;
