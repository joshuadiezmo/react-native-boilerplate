import {FETCH_USERS} from '../actions/const';
import {PERSIST_REHYDRATE} from '@redux-offline/redux-offline/lib/constants';

const initialState = {};

function reducer(state = initialState, action) {
  const nextState = {...state};

  switch (action.type) {
    case PERSIST_REHYDRATE: {
      return {...action.payload.test};
    }
    case FETCH_USERS.REQUEST: {
      return {...nextState, fetchUserLoading: true};
    }

    case FETCH_USERS.SUCCESS: {
      const {data = {}} = action.payload;
      return {...nextState, fetchUserLoading: false, data};
    }

    case FETCH_USERS.FAILED: {
      return {...nextState, fetchUserLoading: false};
    }

    default: {
      return state;
    }
  }
}

export default reducer;
