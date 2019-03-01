import React from 'react';
import {shallow} from "enzyme";

import {CoStars} from "./CoStars";

const mockStars = [
    {id: "1", name: "Luke Skywalker"},
    {id: "2", name: "Jango Fett"},
];

describe('CoStars component', () => {
    describe('when given a list of characters', () => {
        it('should render correctly', () => {
            const wrapper = shallow((
                <CoStars stars={mockStars}/>
            ));

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when given an empty list', () => {
        it('should render nothing', () => {
            const wrapper = shallow((
                <CoStars stars={[]}/>
            ));

            expect(wrapper.type()).toBeNull();
        });
    });
});
