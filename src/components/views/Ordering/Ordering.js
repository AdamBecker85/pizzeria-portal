import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ordering.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

class Ordering extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.array,
    updateStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(row){
    const status = row.status;

    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => {this.props.updateStatus(row.id, 'thinking');}}> thinking</Button>
            <Button onClick={() => {this.props.updateStatus(row.id, 'ordered');}}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => {this.props.updateStatus(row.id, 'ordered');}}>new order</Button>
        );
      case 'ordered':
        return (
          <>
            <Button onClick={() => {this.props.updateStatus(row.id, 'prepared');}}>prepared</Button>
          </>
        );
      case 'prepared':
        return (
          <Button onClick={() => {this.props.updateStatus(row.id, 'delivered');}}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button 
            onClick={() => {this.props.updateStatus(row.id, 'paid');}}>paid</Button>
        );
      case 'paid':
        return (
          <Button 
            onClick={() => {this.props.updateStatus(row.id, 'free');}}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <div className={styles.component}>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Order</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tables.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>
                      {row.status}
                    </TableCell>
                    <TableCell>
                      {row.order && (
                        <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                          {row.order}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {this.renderActions(row)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Button className={styles.button} variant="contained" href={`/bookings/order/:id`}>Booking Id</Button>
          <Button className={styles.button} variant="contained" href={`/bookings/order/new`}>Booking New</Button>
        </div>
      );
    }
  }
}

export default Ordering;


