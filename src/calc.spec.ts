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
    it('returns true if string is "not false"', () => {
        expect(calc("not false")).toBeTruthy();
    });
    it('returns true if string is "true or not true"', () => {
        expect(calc("true or not true")).toBeTruthy();
    });
    it('returns false if string is "false or not true"', () => {
        expect(calc("false or not true")).toBeFalsy();
    });
    it('returns false if string is "true and false"', () => {
        expect(calc("true and false")).toBeFalsy();
    });
    it('returns true if string is "true or true or true and false"', () => {
        expect(calc("true or true or true and false")).toBeTruthy();
    });
    it('returns true if string is "true or false and not false"', () => {
        expect(calc("true or false and not false")).toBeTruthy();
    });
    it('returns false if string is "(true or true or true) and false"', () => {
        expect(calc("(true or true or true) and false")).toBeFalsy();
    });
});