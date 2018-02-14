/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import convert from '../../api/convert';

export function uploadRequest() {
  return {
    type: types.UPLOAD_REQUEST,
  };
}

export function uploadRequestFail(error) {
  return {
    type: types.UPLOAD_REQUEST_FAIL,
    error,
  };
}

export function uploadRequestSuccess(payload) {
  return {
    type: types.UPLOAD_REQUEST_SUCCESS,
    payload,
  };
}

export function uploadData (events, period) {
  return dispatch => {
    dispatch(uploadRequest());
    return convert
      .uploadData(events,period )
      .then(response => response.json())
      .then(response => {
        if (response.statusCode >= 400) {
          return dispatch(uploadRequestFail('Could not load report'));
        } else {
          return dispatch(uploadRequestSuccess(response));
        }
      });
  };
}
