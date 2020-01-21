
import CardsService from "./CardsService";

//action types
export const GET_LIST_CARDS_STARTED = 'cardsList/GET_LIST_CARDS_STARTED';
export const GET_LIST_CARDS_SUCCESS = 'cardsList/GET_LIST_CARDS_SUCCESS';
export const GET_LIST_CARDS_FAILED = 'cardsList/GET_LIST_CARDS_FAILED';


const initialState = {
    data: {},
    loading: false,
    error: false,
}

//reducer
export const cardsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_CARDS_STARTED: {
            return {
                ...state,
                loading: true,
                error: false
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
                loading: false,
                error: true
            }
        }
        default: return state;
    }
}

//action creator

export const getCardsList =()=>{
    return dispatch => {
        dispatch(listCardsListActions.started());
        CardsService.getListCards()
        .then(response=>{
            dispatch(listCardsListActions.success(response.val()));
        })
        .catch((response)=>{
            dispatch(listCardsListActions.failed())
        })
    }
}



export const listCardsListActions = {
    started: () => {
        return {
            type: GET_LIST_CARDS_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_LIST_CARDS_SUCCESS,
            payload: response,
        };
    },
    failed: () => {
        return {
            type: GET_LIST_CARDS_FAILED,
            //error: response.data,
        };
    }
}