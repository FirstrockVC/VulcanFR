/**
 * @author Maria Fernanda Serna
 */

import {connect} from 'react-redux';
import GraphKip from './graphKip';
import { getReport } from './../../reducers/report/actions';

const mapStateToProps = state => ({
  ...state.report,
  ...state.upload,
});

const mapDispatchToProps = dispatch => ({
  getReport: report => {
    dispatch(getReport(report));
  },
});

const GraphKipContainer = connect(mapStateToProps, mapDispatchToProps)(
  GraphKip,
);
export default GraphKipContainer;
