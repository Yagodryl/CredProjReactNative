
//action types
export const GET_LIST_CARDS_STARTED = 'cardsList/GET_LIST_CARDS_STARTED';
export const GET_LIST_CARDS_SUCCESS = 'cardsList/GET_LIST_CARDS_SUCCESS';
export const GET_LIST_CARDS_FAILED = 'cardsList/GET_LIST_CARDS_FAILED';


const initialState = {
    data: {},
    loading: false,
    error: {},
}

//reducer
export const cardsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_CARDS_STARTED: {
            return {
                ...state,
                loading: true,
                error: {}
            }
        }
        case GET_LIST_CARDS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case GET_LIST_CARDS_FAILED: {
            return {
                ...state,
                loading: true,
                error: action.error
            }
        }
    }
}

//action creator
export const listCardsListActions = {
    started: () => {
        return {
            type: GET_LIST_CARDS_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_LIST_CARDS_SUCCESS,
            payload: response.data,
        };
    },
    failed: (response) => {
        return {
            type: GET_LIST_CARDS_FAILED,
            error: response.data,
        };
    }
}