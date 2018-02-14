/**
 * @author Maria Fernanda Serna
 */

import {connect} from 'react-redux';
import Dashboard from './dashboard';
import { uploadData } from './../../reducers/upload/actions';

const mapStateToProps = state => ({
  ...state.upload,
});

const mapDispatchToProps = dispatch => ({
  uploadData: (events, period) => {
    dispatch(uploadData(events, period));
  },
});

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(
  Dashboard,
);
export default DashboardContainer;
