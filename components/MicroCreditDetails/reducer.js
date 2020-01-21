
import MicroCreditDetailsService from "./MicroCreditDetailsService"


//action types
export const GET_MICRO_CREDIT_STARTED = 'microCreditDetails/GET_MICRO_CREDIT_STARTED';
export const GET_MICRO_CREDIT_SUCCESS = 'microCreditDetails/GET_MICRO_CREDIT_SUCCESS';
export const GET_MICRO_CREDIT_FAILED = 'microCreditDetails/GET_MICRO_CREDIT_FAILED';


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
export const microCreditDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MICRO_CREDIT_STARTED: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_MICRO_CREDIT_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case GET_MICRO_CREDIT_FAILED: {
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
export const getMicroCreditDetails =(id)=>{
    return dispatch => {
        dispatch(microCreditDetailsActions.started());
        // console.log("----cred----11dsds1-")

        MicroCreditDetailsService.getMicroCredit(id)
        .then(response=>{
            dispatch(microCreditDetailsActions.success(response.val()));
        })
        .catch((response)=>{
            dispatch(microCreditDetailsActions.failed())
        })
    }
}


export const  microCreditDetailsActions = {
    started: () => {
        return {
            type: GET_MICRO_CREDIT_STARTED,
        };
    },
    success: response => {
        return {
            type: GET_MICRO_CREDIT_SUCCESS,
            payload: response,
        };
    },
    failed: (response) => {
        return {
            type: GET_MICRO_CREDIT_FAILED,
            //error: response.data,
        };
    }
}