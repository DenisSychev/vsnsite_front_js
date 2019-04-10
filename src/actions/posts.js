import { createAction } from 'redux-actions';

//действия - применяются в reducers
export const loadStarted = createAction('[Posts] Load start');
export const loadCompleted = createAction('[Posts] Load complete');
export const loadFailed = createAction('[Posts] Load fail');

export const loadPosts = (dispatch) => {
    dispatch(loadStarted());
    fetch(`https://vsnsite-service.herokuapp.com/api/publications`)
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadCompleted(posts));
        })
        .catch((error) => {
            dispatch(loadFaled(error));
        })
};