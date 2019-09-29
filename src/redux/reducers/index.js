import {combineReducers} from 'redux';
import test from './test';

const reducers = {
  test,
};
const combined = combineReducers(reducers);
export default combined;
