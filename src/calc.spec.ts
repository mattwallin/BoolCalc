import calc from "./calc";

describe('calc', () => {
    it('returns false if string is empty', () => {
        expect(calc("")).toBeFalsy();
    });
    it('returns true if the string includes true', () => {
        expect(calc("true")).toBeTruthy();
    });
    it('returns false if string includes false', () => {
        expect(calc("false")).toBeFalsy();
    });
    it('returns true if string includes not false', () => {
        expect(calc("not false")).toBeTruthy();
    });
    it('returns false if string includes not true', () => {
        expect(calc("true or not true")).toBeTruthy();
    });
    it('returns true if string is "true or false"', () => {
        expect(calc("false or not true")).toBeFalsy();
    });
});