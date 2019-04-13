import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from 'actions/posts';

//дефолтное значение 
const initialState = {
    loading: false,
    error: null,
    article: [],
};

export default handleActions({
    [loadStarted]: (state) => {
        return {
            ...state,
            error: null,
            loading: true,
        };
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            article: state.article.concat(action.payload),
            loading: false,
        };
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            error: action.payload,
            loading:false,
        };
    },
    }, initialState)