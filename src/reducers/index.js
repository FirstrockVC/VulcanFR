/**
 * @author Maria Fernanda Serna
 */

import {combineReducers} from 'redux';
import report from './report/reportReducer';
import upload from './upload/uploadReducer';

const rootReducer = combineReducers({report, upload});

export default rootReducer;
