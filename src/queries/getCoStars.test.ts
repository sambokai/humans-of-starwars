import {minConsecutiveSequence} from "./getCoStars";

describe("minConsecutiveSequence", () => {
    describe("when given an empty array", () => {
        it('should return false', () => {
            const empty: number[] = [];

            const result = minConsecutiveSequence(2, empty);

            expect(result).toEqual(false);
        });
    });

    describe("when given an array with a single entry ", () => {
        describe('and a minimal length of 1', () => {
            it('should return true ', () => {
                const nums = [1];
                const minLength = 1;

                const result = minConsecutiveSequence(minLength, nums);

                expect(result).toEqual(true);
            });
        });

        describe('and a minimal length of more than 1', () => {
            it('should return true ', () => {
                const nums = [1];
                const minLength = 2;

                const result = minConsecutiveSequence(minLength, nums);

                expect(result).toEqual(false);
            });
        });
    });

    describe("when given an array with duplicate integers", () => {
        it('should assert whether the array includes a sub-sequence ' +
            'of consecutive numbers with a specified minimal length', () => {
            const nums = [5, 2, 5, 3, 2, 1];
            const minLength = 2;

            const result = minConsecutiveSequence(minLength, nums);

            expect(result).toEqual(true);
        });
    });

    describe("when given an array with multiple occurrences of the same integer", () => {
        describe('and a minimal length of 1', () => {
            it('return true', () => {
                const nums = [1 ,1, 1];
                const minLength = 1;

                const result = minConsecutiveSequence(minLength, nums);

                expect(result).toEqual(true);
            });
        });

        describe('and a minimal length of 2', () => {
            it('return true', () => {
                const nums = [1 ,1, 1];
                const minLength = 2;

                const result = minConsecutiveSequence(minLength, nums);

                expect(result).toEqual(false);
            });
        });
    });
});
