import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const fetchPictures = () => dispatch => {
    dispatch({ type: START_FETCHING});

    axios
    .get(
        'https://aws.random.cat/meow'

    )
    .then(res => {console.log(res); dispatch({type: FETCH_SUCCESS, payload: res.data.file})})
    .catch(err => dispatch({type:FETCH_FAILURE, payload: err.response}));
};