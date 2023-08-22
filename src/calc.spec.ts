import calc from "./calc";

describe('calc', () => {
    it('returns false if no string is entered', () => {
        expect(calc("")).toBeFalsy();
    });
    it('returns true if the string is equal to true', () => {
        expect(calc("true")).toBeTruthy();
    });
});