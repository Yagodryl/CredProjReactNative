import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

//reducers
import {listArticlesReducer} from './components/Articles/reducer';
import {articleReducer} from './components/ArticleDetails/reducer';


const rootReducer = combineReducers({
    //microCredit: microCreditReducer,
    articles: listArticlesReducer,
    article: articleReducer,

});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
}

export default configureStore;