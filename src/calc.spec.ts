import calc from "./calc";

describe('calc', () => {
    it('returns false if string is empty', () => {
        expect(calc("")).toBeFalsy();
    });
    it('returns true if the string "true"', () => {
        expect(calc("true")).toBeTruthy();
    });
    it('returns false if string is "false"', () => {
        expect(calc("false")).toBeFalsy();
    });
});