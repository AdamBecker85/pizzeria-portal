import React from 'react';
import styles from './Login.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Login = () => (
  <div className={styles.component}>
    <TextField
      className={styles.login}
      required
      id="outlined-login-input"
      label="Login"
    />
    <TextField
      className={styles.password}
      required
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
    />
    <Button to={'/'} component={NavLink} variant="contained" className={styles.button}>
      Login
    </Button>
  </div>
);

export default Login;