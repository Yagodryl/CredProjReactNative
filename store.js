import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

//reducers
import * as microCreditReducer from './components/MicroCredit/reducer';

const rootReducer = combineReducers({
    microCredit: microCreditReducer
});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
}

export default configureStore;