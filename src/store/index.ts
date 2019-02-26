import {combineReducers, createStore} from "redux";
import {HistoryState, reducer as HistoryReducer} from "./history";

export type ApplicationState = {
    history: HistoryState,
}

const rootReducer = combineReducers<ApplicationState>({
    history: HistoryReducer,
});

export const store = createStore(rootReducer);

