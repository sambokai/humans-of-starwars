import {PERSON_DETAIL} from './routes';

describe('route', () => {
    describe('PERSON_DETAIL', () => {
        it('should return the template route if no method arguments provided', () => {
            expect(PERSON_DETAIL()).toEqual("/person/:id")
        });

        it('should return the url with id if provided as argument', () => {
            const id = "123xyz";
            expect(PERSON_DETAIL(id)).toEqual(`/person/${id}`)
        });
    });
});
