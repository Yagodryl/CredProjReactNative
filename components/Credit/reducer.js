
//action types
export const GET_LIST_CREDIT_STARTED = 'credit/GET_LIST_CREDIT_STARTED';
export const GET_LIST_CREDIT_SUCCESS = 'credit/GET_LIST_CREDIT_SUCCESS';
export const GET_LIST_CREDIT_FAILED = 'credit/GET_LIST_CREDIT_FAILED';


const initialState = {
    data: {},
    loading: false,
    error: {},
}

//reducer
export const creditReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_CREDIT_STARTED: {
            return {
                ...state,
                loading: true,
                error: {}
            }
        }
        case GET_LIST_CREDIT_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case GET_LIST_CREDIT_FAILED: {
            return {
                ...state,
                loading: true,
                error: action.error
            }
        }
    }
}

//action creator
export const listCreditActions = {
    started: () => {
        return {
            type: GET_LIST_CREDIT_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_LIST_CREDIT_SUCCESS,
            payload: response.data,
        };
    },
    failed: (response) => {
        return {
            type: GET_LIST_CREDIT_FAILED,
            error: response.data,
        };
    }
}