import { connect } from 'react-redux';
import Ordering from './Ordering';
import { getAll, fetchFromAPI, getLoadingState, updateStatusToAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateStatus: (row, status) => dispatch(updateStatusToAPI(row, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);