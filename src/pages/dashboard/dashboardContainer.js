/**
 * @author Maria Fernanda Serna
 */

import {connect} from 'react-redux';
import Dashboard from './dashboard';
import { uploadData,cleanReport } from './../../reducers/upload/actions';

const mapStateToProps = state => ({
  ...state.upload,
  ...state.report
});

const mapDispatchToProps = dispatch => ({
  uploadData: (events, period) => {
    dispatch(uploadData(events, period));
  },
  cleanReport: () => {
    dispatch(cleanReport());
  },
});

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(
  Dashboard,
);
export default DashboardContainer;
