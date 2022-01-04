import React from 'react';
import styles from './PageNav.module.scss';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const PageNav = () => (
  <nav className={styles.component}>
    <Button className={styles.link} color="secondary" component={NavLink} exact to={`${process.env.PUBLIC_URL}/`}>Dashboard</Button>
    <Button className={styles.link} color="secondary" component={NavLink} to={`${process.env.PUBLIC_URL}/login`}>Login</Button>
    <Button className={styles.link} color="secondary" component={NavLink} to={`${process.env.PUBLIC_URL}/bookings`}>Bookings</Button>
    <Button className={styles.link} color="secondary" component={NavLink} to={`${process.env.PUBLIC_URL}/ordering`}>Ordering</Button>
    <Button className={styles.link} color="secondary" component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`}>Kitchen</Button>    
  </nav>
);

export default PageNav;