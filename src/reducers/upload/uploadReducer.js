/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  data: [],
  apiError: '',
  successUploadData: false,
};

const upload = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD_REQUEST:
      return {
        ...state,
        apiError: '',
      };
    case types.UPLOAD_REQUEST_FAIL:
      return {
        ...state,
        data: [],
        apiError: action.error ? action.error : 'Could not load report',
        successUploadData: false,
      };
    case types.UPLOAD_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        apiError: '',
        successUploadData: true,
      };
    default:
      return state;
  }
};

export default upload;
