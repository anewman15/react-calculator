/*
 eslint-disable no-unused-vars
*/

import { BrowserRouter } from 'react-router-dom';
import TopNav from './TopNav';
import Routes from './Routes';

const Main = () => (
  <>
    <TopNav />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default Main;