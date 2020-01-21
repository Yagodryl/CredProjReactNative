
import CreditService from "./CreditService"

//action types
export const GET_LIST_CREDIT_STARTED = 'listCredit/GET_LIST_CREDIT_STARTED';
export const GET_LIST_CREDIT_SUCCESS = 'listCredit/GET_LIST_CREDIT_SUCCESS';
export const GET_LIST_CREDIT_FAILED = 'listCredit/GET_LIST_CREDIT_FAILED';


const initialState = {
    data: {},
    loading: false,
    error: false,
}

//reducer
export const listCreditReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_CREDIT_STARTED: {
            return {
                ...state,
                loading: true,
                error: false
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
                loading: false,
                error: true
            }
        }
        default: return state;
    }
}

//action creator

export const getListCredit =()=>{
    return dispatch => {
        dispatch(listCreditActions.started());
        CreditService.getListCredit()
        .then(response=>{
            dispatch(listCreditActions.success(response.val()));
        })
        .catch((response)=>{
            dispatch(listCreditActions.failed())
        })
    }
}

export const listCreditActions = {
    started: () => {
        return {
            type: GET_LIST_CREDIT_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_LIST_CREDIT_SUCCESS,
            payload: response,
        };
    },
    failed: (response) => {
        return {
            type: GET_LIST_CREDIT_FAILED,
            error: response.data,
        };
    }
}