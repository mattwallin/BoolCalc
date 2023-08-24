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
    it('returns true when string is "(true)"', () => {
        expect(calc("(true)")).toBeTruthy();
    });
    it('returns true when string is "(false)"', () => {
        expect(calc("(false)")).toBeFalsy();
    });
    it('returns true when string is "((true))"', () => {
        expect(calc("((true))")).toBeTruthy();
    });
    it('returns true when string is "((false))"', () => {
        expect(calc("((false))")).toBeFalsy();
    });
    it('returns true if the string "not true"', () => {
        expect(calc("not true")).toBeFalsy();
    });
    it('returns false if string is "not false"', () => {
        expect(calc("not false")).toBeTruthy();
    });
    it('returns true when string is "(not true)"', () => {
        expect(calc("(not true)")).toBeFalsy();
    });
    it('returns true when string is "(not false)"', () => {
        expect(calc("(not false)")).toBeTruthy();
    });
    it('returns true when string is "((not true))"', () => {
        expect(calc("((not true))")).toBeFalsy();
    });
    it('returns true when string is "((false))"', () => {
        expect(calc("((not false))")).toBeTruthy();
    });
});