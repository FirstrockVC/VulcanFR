/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import convert from '../../api/convert';

export function getReportRequest() {
  return {
    type: types.GET_REPORT_REQUEST,
  };
}

export function getReportRequestFail(error) {
  return {
    type: types.GET_REPORT_REQUEST_FAIL,
    error,
  };
}

export function getReportRequestSuccess(payload) {
  return {
    type: types.GET_REPORT_REQUEST_SUCCESS,
    payload,
  };
}

export function getReport (report) {
  return dispatch => {
    dispatch(getReportRequest());
    return convert
      .generateReport(report)
      .then(response => response.json())
      .then(response => {
        if (response.statusCode >= 400) {
          return dispatch(getReportRequestFail('Could not load report'));
        } else {
          return dispatch(getReportRequestSuccess(response));
        }
      });
  };
}
