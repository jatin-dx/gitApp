import 'whatwg-fetch';

export const SET_REPO_DATA = 'SET_REPO_DATA';

export const setRepoData = (data) => ({
  type: SET_REPO_DATA,
  data,
});

export const getRepoData = () => {
  return (dispatch) => {
    fetch('https://api.github.com/users/supreetsingh247/repos')
      .then(data => data.json())
      .then((data) => {
        console.log('data', data);
        dispatch(setRepoData(data));
      })
  }
}

