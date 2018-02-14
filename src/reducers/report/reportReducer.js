/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  report: [],
  apiError: '',
  successGetReport: false,
};

const report = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REPORT_REQUEST:
      return {
        ...state,
        apiError: '',
      };
    case types.GET_REPORT_REQUEST_FAIL:
      return {
        ...state,
        report: [],
        apiError: action.error ? action.error : 'Could not load report',
        successGetReport: false,
      };
    case types.GET_REPORT_REQUEST_SUCCESS:
      return {
        ...state,
        report: action.payload,
        apiError: '',
        successGetReport: true,
      };
    default:
      return state;
  }
};

export default report;
