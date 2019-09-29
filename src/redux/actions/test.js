import {FETCH_USERS} from './const';

const fetchUsers = () => ({
  type: FETCH_USERS.REQUEST,
  meta: {
    offline: {
      effect: {
        url: '/?page=1&results=20&seed=joshuadiezmo&exc=login,registered',
      },
      commit: {type: FETCH_USERS.SUCCESS},
      rollback: {type: FETCH_USERS.FAILED},
    },
  },
});

export {fetchUsers};
