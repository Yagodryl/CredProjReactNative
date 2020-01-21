
import CardDetailsService from "./CardDetailsService"


//action types
export const GET_CREDIT_CARD_STARTED = 'creditCardDetails/GET_CREDIT_CARD_STARTED';
export const GET_CREDIT_CARD_SUCCESS = 'creditCardDetails/GET_CREDIT_CARD_SUCCESS';
export const GET_CREDIT_CARD_FAILED = 'creditCardDetails/GET_CREDIT_CARD_FAILED';


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
export const creditCardDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CREDIT_CARD_STARTED: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_CREDIT_CARD_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case GET_CREDIT_CARD_FAILED: {
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
export const getCreditCardDetails =(id)=>{
    return dispatch => {
        dispatch(creditCardDetailsActions.started());
        CardDetailsService.getCreditCard(id)
        .then(response=>{
            dispatch(creditCardDetailsActions.success(response.val()));
        })
        .catch((response)=>{
            dispatch(creditCardDetailsActions.failed())
        })
    }
}


export const  creditCardDetailsActions = {
    started: () => {
        return {
            type: GET_CREDIT_CARD_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_CREDIT_CARD_SUCCESS,
            payload: response,
        };
    },
    failed: (response) => {
        return {
            type: GET_CREDIT_CARD_FAILED,
            //error: response.data,
        };
    }
}