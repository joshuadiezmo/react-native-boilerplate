import {applyMiddleware, compose, createStore} from 'redux';
import axios from '../../utils/axiosInstance';
import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import reducer from '../reducers';
import ReduxThunk from 'redux-thunk';

const effect = (effect, _action) => axios(effect);
const discard = (error, _action, _retries) => {
  const {request, response} = error;
  if (!request) {
    throw error;
  }
  if (!response) {
    return false;
  }
  return response.status >= 400 && response.status < 500;
};

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(ReduxThunk),
    offline({
      ...offlineConfig,
      effect,
      discard,
    }),
  ),
);

export default store;
