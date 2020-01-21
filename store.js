import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

//reducers
import {listArticlesReducer} from './components/Articles/reducer';
import {articleReducer} from './components/ArticleDetails/reducer';
import {listMicroCreditReducer} from './components/MicroCredit/reducer';
import {microCreditDetailsReducer} from './components/MicroCreditDetails/reducer';
import {listCreditReducer} from './components/Credit/reducer';
import {creditDetailsReducer} from "./components/CreditDetails/reducer";
import {cardsListReducer} from "./components/Cards/reducer";

const rootReducer = combineReducers({
    //microCredit: microCreditReducer,
    articles: listArticlesReducer,
    article: articleReducer,
    listMicroCredit: listMicroCreditReducer,
    microCreditDetails: microCreditDetailsReducer,
    listCredit: listCreditReducer,
    creditDetails: creditDetailsReducer,
    cardsList: cardsListReducer
});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
}

export default configureStore;