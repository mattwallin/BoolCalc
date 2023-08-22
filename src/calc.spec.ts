import calc from "./calc";

describe('calc', () => {
    it('returns false if string is empty', () => {
        expect(calc("")).toBeFalsy();
    });
    it('returns true if the string is equal to true', () => {
        expect(calc("true")).toBeTruthy();
    });
    it('returns true if string is equal to not false', () => {
        expect(calc("not false")).toBeTruthy();
    });
    it('returns false if string includes not true', () => {
        expect(calc("not true")).toBeFalsy();
    });
});