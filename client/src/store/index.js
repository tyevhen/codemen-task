import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../state/index";
import user from '../state/user/reducer';

const rootReducer = combineReducers({
    user,
});

const saga = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga);

const unsubscribe = store.subscribe(() => {
    console.groupEnd();
});

export default store;
