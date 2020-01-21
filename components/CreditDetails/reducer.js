
import CreditDetailsService from "./CreditDetailsService"


//action types
export const GET_CREDIT_STARTED = 'creditDetails/GET_CREDIT_STARTED';
export const GET_CREDIT_SUCCESS = 'creditDetails/GET_CREDIT_SUCCESS';
export const GET_CREDIT_FAILED = 'creditDetails/GET_CREDIT_FAILED';


const initialState = {
    data: { bank:{}, 
        id:'', 
        title:'', 
        description:'', 
        money:'', 
        percent:'', 
        term:'' },
    loading: false,
    error: false,
}

//reducer
export const creditDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CREDIT_STARTED: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_CREDIT_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case GET_CREDIT_FAILED: {
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
export const getCreditDetails =(id)=>{
    return dispatch => {
        dispatch(creditDetailsActions.started());
        CreditDetailsService.getCredit(id)
        .then(response=>{
            dispatch(creditDetailsActions.success(response.val()));
        })
        .catch((response)=>{
            dispatch(creditDetailsActions.failed())
        })
    }
}


export const  creditDetailsActions = {
    started: () => {
        return {
            type: GET_CREDIT_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_CREDIT_SUCCESS,
            payload: response,
        };
    },
    failed: (response) => {
        return {
            type: GET_CREDIT_FAILED,
            //error: response.data,
        };
    }
}