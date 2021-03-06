
import ArticlesService from './ArticlesService';

//action types
export const GET_LIST_ARTICLES_STARTED = 'articles/GET_LIST_ARTICLES_STARTED';
export const GET_LIST_ARTICLES_SUCCESS = 'articles/GET_LIST_ARTICLES_SUCCESS';
export const GET_LIST_ARTICLES_FAILED = 'articles/GET_LIST_ARTICLES_FAILED';


const initialState = {
    data: {},
    loading: false,
    error: false,
}

//reducer
export const listArticlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_ARTICLES_STARTED: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_LIST_ARTICLES_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case GET_LIST_ARTICLES_FAILED: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        default: return state;
    }
}

//action creator

export const getArticles = () =>{
    return dispatch =>{
        dispatch(listArticlesActions.started());
        ArticlesService.getArticles()
        .then(response=>{
            //console.log(response.val());
            dispatch(listArticlesActions.success(response.val()));
        })
        .catch((response)=>{
            dispatch(listArticlesActions.failed());
            console.log(response.val());
        })
    }
}



export const listArticlesActions = {
    started: () => {
        return {
            type: GET_LIST_ARTICLES_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_LIST_ARTICLES_SUCCESS,
            payload: response,
        };
    },
    failed: (response) => {
        return {
            type: GET_LIST_ARTICLES_FAILED,
            // error: response,
        };
    }
}