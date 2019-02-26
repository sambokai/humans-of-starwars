// Actions

import {Reducer} from "redux";

const ADD_VISITED_PERSON = '@@history/ADD_VISITED_PERSON';


// Action Creator

export const addVisitedPerson = (id: string, name: string) => ({type: ADD_VISITED_PERSON, payload: {id, name}});


// State

export interface HistoryState {
    visitedPersons: VisitedPerson[]
}

export interface VisitedPerson {
    id: string;
    name: string;
}

const initialState: HistoryState = {
    visitedPersons: [],
};


// Reducer

export const reducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VISITED_PERSON:
            const distinct: VisitedPerson[] = [
                action.payload,
                ...state.visitedPersons.filter((person: VisitedPerson) => person.id !== action.payload.id)
            ];
            return {...state, visitedPersons: distinct};

        default:
            return state
    }
};
