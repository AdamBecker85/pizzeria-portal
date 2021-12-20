import React from 'react';
import styles from './Bookings.module.scss';
import {Link} from 'react-router-dom';

const Bookings = () => (
  <div className={styles.component}>
    <h2>
      Bookings view
    </h2>
    <Link to={`/bookings/booking/:id`} activeClassName={'active'}>Booking abc</Link>
    <Link to={`/bookings/booking/new`} activeClassName={'active'}>New booking</Link>
    <Link to={`/bookings/event/:id`} activeClassName={'active'}>Event abc</Link>
    <Link to={`/bookings/event/new`} activeClassName={'active'}>New event</Link>
  </div>
);

export default Bookings;