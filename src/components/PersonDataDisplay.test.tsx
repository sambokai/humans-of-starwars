import React from 'react';
import {shallow} from "enzyme";
import PersonDataDisplay from "./PersonDataDisplay";
import {PERSON_GENDER} from "../__generated__/globalTypes";

const mockPerson = {
    id: "1",
    name: "Luke Skywalker",
    homeWorld: "Tatooine",
    gender: PERSON_GENDER.MALE,
    films: [
        {title: "Movie A", releaseDate: new Date(2000, 1)},
        {title: "Movie B", releaseDate: new Date(2000, 2)}
    ]
};

describe('PersonDataDisplay component', () => {
    it('should render correctly', () => {
        const wrapper = shallow((
            <PersonDataDisplay id={mockPerson.id} name={mockPerson.name}/>
        ));

        expect(wrapper).toMatchSnapshot();
    });

    describe('when given a homeworld name', () => {
        it('should render correctly', () => {
            const wrapper = shallow((
                <PersonDataDisplay id={mockPerson.id} name={mockPerson.name} homeworldName={mockPerson.homeWorld}/>
            ));

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when given a gender', () => {
        it('should render correctly', () => {
            const wrapper = shallow((
                <PersonDataDisplay id={mockPerson.id} name={mockPerson.name} gender={mockPerson.gender}/>
            ));

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when given both a homeworld and a gender', () => {
        it('should render correctly', () => {
            const wrapper = shallow((
                <PersonDataDisplay id={mockPerson.id} name={mockPerson.name} gender={mockPerson.gender} homeworldName={mockPerson.gender}/>
            ));

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when given a list of films', () => {
        it('should render correctly', () => {
            const wrapper = shallow((
                <PersonDataDisplay id={mockPerson.id} name={mockPerson.name} appearedInFilms={mockPerson.films}/>
            ));

            expect(wrapper).toMatchSnapshot();
        });
    });
});
