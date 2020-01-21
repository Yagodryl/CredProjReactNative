import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

//reducers
import {listArticlesReducer} from './components/Articles/reducer';
import {articleReducer} from './components/ArticleDetails/reducer';
import {listMicroCreditReducer} from './components/MicroCredit/reducer';
import {microCreditDetailsReducer} from './components/MicroCreditDetails/reducer';


const rootReducer = combineReducers({
    //microCredit: microCreditReducer,
    articles: listArticlesReducer,
    article: articleReducer,
    listMicroCredit: listMicroCreditReducer,
    microCreditDetails: microCreditDetailsReducer,

});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
}

export default configureStore;