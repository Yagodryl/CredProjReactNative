
//action types
export const GET_ARTICLES_STARTED = 'articles/GET_ARTICLES_STARTED';
export const GET_ARTICLES_SUCCESS = 'articles/GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAILED = 'articles/GET_ARTICLES_FAILED';


const initialState = {
    data: {},
    loading: false,
    error: {},
}

//reducer
export const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLES_STARTED: {
            return {
                ...state,
                loading: true,
                error: {}
            }
        }
        case GET_ARTICLES_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case GET_ARTICLES_FAILED: {
            return {
                ...state,
                loading: true,
                error: action.error
            }
        }
    }
}

//action creator
export const articlesActions = {
    started: () => {
        return {
            type: GET_ARTICLES_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_ARTICLES_SUCCESS,
            payload: response.data,
        };
    },
    failed: (response) => {
        return {
            type: GET_ARTICLES_FAILED,
            error: response.data,
        };
    }
}