
import ArticleService from './ArticleService';

//action types
export const GET_ARTICLE_STARTED = 'article/GET_ARTICLE_STARTED';
export const GET_ARTICLE_SUCCESS = 'article/GET_ARTICLE_SUCCESS';
export const GET_ARTICLE_FAILED = 'article/GET_ARTICLE_FAILED';


const initialState = {
    data: {},
    loading: false,
    error: false,
}

//reducer
export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLE_STARTED: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_ARTICLE_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case GET_ARTICLE_FAILED: {
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

export const getArticle = (id) =>{
    return dispatch =>{
        dispatch(articleActions.started());
        ArticleService.getArticle(id)
        .then(response=>{
          //  console.log(response.val());
            dispatch(articleActions.success(response.val()));
        })
        .catch((response)=>{
            dispatch(articleActions.failed());
            console.log(response.val());
        })
    }
}



export const articleActions = {
    started: () => {
        return {
            type: GET_ARTICLE_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_ARTICLE_SUCCESS,
            payload: response,
        };
    },
    failed: (response) => {
        return {
            type: GET_ARTICLE_FAILED,
            // error: response,
        };
    }
}