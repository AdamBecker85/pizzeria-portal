import React from 'react';
import styles from './Ordering.module.scss';
import {Link} from 'react-router-dom';

const Ordering = () => (
  <div className={styles.component}>
    <h2>
      Ordering view
    </h2>
    <Link to={`/ordering/order/new`} activeClassName={'active'}>New order</Link>
    <Link to={`/ordering/order/:id`} activeClassName={'active'}>Order id</Link>
  </div>
);

export default Ordering;