
//action types
export const GET_CARDS_LIST_STARTED = 'cardsList/GET_CARDS_LIST_STARTED';
export const GET_CARDS_LIST_SUCCESS = 'cardsList/GET_CARDS_LIST_SUCCESS';
export const GET_CARDS_LIST_FAILED = 'cardsList/GET_CARDS_LIST_FAILED';


const initialState = {
    data: {},
    loading: false,
    error: {},
}

//reducer
export const cardsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS_LIST_STARTED: {
            return {
                ...state,
                loading: true,
                error: {}
            }
        }
        case GET_CARDS_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case GET_CARDS_LIST_FAILED: {
            return {
                ...state,
                loading: true,
                error: action.error
            }
        }
    }
}

//action creator
export const cardsListActions = {
    started: () => {
        return {
            type: GET_CARDS_LIST_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_CARDS_LIST_SUCCESS,
            payload: response.data,
        };
    },
    failed: (response) => {
        return {
            type: GET_CARDS_LIST_FAILED,
            error: response.data,
        };
    }
}