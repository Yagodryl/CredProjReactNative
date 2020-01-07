import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

//reducers


const rootReducer = combineReducers({

});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
}

export default configureStore;