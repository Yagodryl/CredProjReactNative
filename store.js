import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

//reducers
import {articlesReducer} from './components/Articles/reducer';


const rootReducer = combineReducers({
    //microCredit: microCreditReducer,
    articles: articlesReducer
});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
}

export default configureStore;