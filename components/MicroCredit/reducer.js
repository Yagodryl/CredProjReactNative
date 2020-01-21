
import MicroCreditService from "./MicroCreditService"


//action types
export const GET_LIST_MICRO_CREDIT_STARTED = 'listMicroCredit/GET_LIST_MICRO_CREDIT_STARTED';
export const GET_LIST_MICRO_CREDIT_SUCCESS = 'listMicroCredit/GET_LIST_MICRO_CREDIT_SUCCESS';
export const GET_LIST_MICRO_CREDIT_FAILED = 'listMicroCredit/GET_LIST_MICRO_CREDIT_FAILED';


const initialState = {
    data: {},
    loading: false,
    error: false,
}

//reducer
export const listMicroCreditReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_MICRO_CREDIT_STARTED: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_LIST_MICRO_CREDIT_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case GET_LIST_MICRO_CREDIT_FAILED: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        default: return state;
    }
}

//action creators
export const getListrMicroCredit =()=>{
    return dispatch => {
        dispatch(listMicroCreditActions.started());
        MicroCreditService.getMicroCreditList()
        .then(response=>{
            dispatch(listMicroCreditActions.success(response.val()));
        })
        .catch((response)=>{
            dispatch(listMicroCreditActions.failed())
        })
    }
}


export const listMicroCreditActions = {
    started: () => {
        return {
            type: GET_LIST_MICRO_CREDIT_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_LIST_MICRO_CREDIT_SUCCESS,
            payload: response,
        };
    },
    failed: (response) => {
        return {
            type: GET_LIST_MICRO_CREDIT_FAILED,
            //error: response.data,
        };
    }
}