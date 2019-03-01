import {combineReducers, createStore} from "redux";
import {HistoryState, reducer as HistoryReducer} from "./history";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistPartial} from "redux-persist/es/persistReducer";

export type ApplicationState = {
    history: HistoryState & PersistPartial,
}

const persistedHistoryReducer = persistReducer({key: 'history', storage}, HistoryReducer);

const rootReducer = combineReducers<ApplicationState>({
    history: persistedHistoryReducer,
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
