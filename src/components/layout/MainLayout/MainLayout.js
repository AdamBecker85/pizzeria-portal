import PropTypes from 'prop-types';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import Box from '@mui/material/Box';
import PageNav from '../PageNav/PageNav';
import Container from '@mui/material/Container';

const MainLayout = (props) => (
  <div className='MainLayout'>
    <AppBar>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <PageNav />
        </Toolbar>
      </Container>  
    </AppBar>
    <Container maxWidth='lg'>
      <Toolbar/>
      {props.children}
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;