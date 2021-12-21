import React from 'react';
//import { Switch } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Bookings from './components/views/Bookings/Bookings';
import BookingsBookingId from './components/views/BookingsBookingId/BookingsBookingId';
import BookingsBookingNew from './components/views/BookingsBookingNew/BookingsBookingNew';
import BookingsEventId from './components/views/BookingsEventId/BookingsEventId';
import BookingsEventNew from './components/views/BookingsEventNew/BookingsEventNew';
import Ordering from './components/views/Ordering/Ordering';
import OrderNew from './components/views/OrderNew/OrderNew';
import OrderId from './components/views/OrderId/OrderId';
import Kitchen from './components/views/Kitchen/Kitchen';

function App() {
  return (
    <BrowserRouter basename={`/panel`}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/bookings`} component={Bookings}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/bookings/booking/:id`} component={BookingsBookingId}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/bookings/booking/new`} component={BookingsBookingNew}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/bookings/event/:id`} component={BookingsEventId}></Route>         
          <Route exact path={`${process.env.PUBLIC_URL}/bookings/event/new`} component={BookingsEventNew}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={Ordering}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/new`} component={OrderNew}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component={OrderId}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen}></Route>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
