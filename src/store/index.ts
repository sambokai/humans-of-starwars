import {combineReducers, createStore} from "redux";
import {HistoryState, reducer as HistoryReducer} from "./history";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export type ApplicationState = {
    history: HistoryState,
}

const persistedHistoryReducer = persistReducer({key: 'history', storage}, HistoryReducer);

const rootReducer = combineReducers<ApplicationState>({
    history: persistedHistoryReducer,
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
