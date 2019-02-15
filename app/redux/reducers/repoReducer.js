import {
  SET_REPO_DATA,
} from '../actions/repoActions';

const initialState = {
  repos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_REPO_DATA:
      return { ...state, repos: action.data };
    default:
      return state;
  }
}
