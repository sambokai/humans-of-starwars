import {ADD_VISITED_PERSON, addVisitedPerson, HistoryState, reducer} from "./history";
import {AnyAction} from "redux";


describe('Action creators', () => {
    it('should create an action to add a person to the list of previously visited persons', () => {
        const person = {
            id: "1000",
            name: "Luke Skywalker",
        };

        const expectedAction = {
            type: ADD_VISITED_PERSON,
            payload: person,
        };


        expect(addVisitedPerson(person.id, person.name)).toEqual(expectedAction);
    });
});

describe('Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {} as AnyAction)).toEqual(
            {
                visitedPersons: [],
            }
        )
    });

    describe('when receiving ADD_VISITED_PERSON action', () => {
        it('should add the person to the history', () => {
            const person = {
                id: "1000",
                name: "Luke Skywalker",
            };

            const previousState: HistoryState = {visitedPersons: []};

            expect(
                reducer(previousState, {} as AnyAction).visitedPersons
            ).not.toContain(person);

            const action = {type: ADD_VISITED_PERSON, payload: person};
            expect(
                reducer(previousState, action).visitedPersons
            ).toContain(person);
        });

        describe('and person is already listed in history', () => {
            it('should move the person to the top of the history and not add the duplicate', () => {
                const luke = {
                    id: "1000",
                    name: "Luke Skywalker",
                };

                const anakin = {
                    id: "2000",
                    name: "Anakin Skywalker"
                };

                const previousState: HistoryState = {visitedPersons: [anakin, luke]};

                expect(
                    reducer(previousState, {} as AnyAction)
                ).toEqual(previousState);

                const addLuke = {type: ADD_VISITED_PERSON, payload: luke};
                expect(
                    reducer(previousState, addLuke)
                ).toEqual({visitedPersons: [luke, anakin]});
            });
        });
    });

});
