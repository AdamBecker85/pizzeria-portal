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
import OrderingContainer from './components/views/Ordering/OrderingContainer';
import OrderNew from './components/views/OrderNew/OrderNew';
import OrderId from './components/views/OrderId/OrderId';
import Kitchen from './components/views/Kitchen/Kitchen';
import { StylesProvider } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    secondary: {
      main: '#fff',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={`/panel`}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}></Route>
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}></Route>
                <Route exact path={`${process.env.PUBLIC_URL}/bookings`} component={Bookings}></Route>
                <Route exact path={`${process.env.PUBLIC_URL}/bookings/booking/:id`} component={BookingsBookingId}></Route>
                <Route exact path={`${process.env.PUBLIC_URL}/bookings/booking/new`} component={BookingsBookingNew}></Route>
                <Route exact path={`${process.env.PUBLIC_URL}/bookings/event/:id`} component={BookingsEventId}></Route>         
                <Route exact path={`${process.env.PUBLIC_URL}/bookings/event/new`} component={BookingsEventNew}></Route>
                <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={OrderingContainer}></Route>
                <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/new`} component={OrderNew}></Route>
                <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component={OrderId}></Route>
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen}></Route>
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
