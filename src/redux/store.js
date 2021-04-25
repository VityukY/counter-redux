import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import complexCounetrReducer from './Counter/counter-reducer';

const rootReducer = combineReducers({
   counter: complexCounetrReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
