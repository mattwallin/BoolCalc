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
    it('returns false when string is "(false)"', () => {
        expect(calc("(false)")).toBeFalsy();
    });
    it('returns true when string is "((true))"', () => {
        expect(calc("((true))")).toBeTruthy();
    });
    it('returns false when string is "((false))"', () => {
        expect(calc("((false))")).toBeFalsy();
    });
    it('returns false if the string "not true"', () => {
        expect(calc("not true")).toBeFalsy();
    });
    it('returns true if string is "not false"', () => {
        expect(calc("not false")).toBeTruthy();
    });
    it('returns false when string is "(not true)"', () => {
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
    it('returns true if the string "true and true"', () => {
        expect(calc("true and true")).toBeTruthy();
    });
    it('returns false if string is "false and false"', () => {
        expect(calc("false and false")).toBeFalsy();
    });
        it('returns false if the string "true and false"', () => {
        expect(calc("true and false")).toBeFalsy();
    });
    it('returns false if string is "false and true"', () => {
        expect(calc("false and true")).toBeFalsy();
    });
    it('returns true when string is "(true and true)"', () => {
        expect(calc("(true and true)")).toBeTruthy();
    });
    it('returns false when string is "(false and false)"', () => {
        expect(calc("(false and false)")).toBeFalsy();
    });
    it('returns false when string is "(true and false)"', () => {
        expect(calc("(true and false)")).toBeFalsy();
    });
    it('returns false when string is "(false and false)"', () => {
        expect(calc("(false and false)")).toBeFalsy();
    });
    it('returns true when string is "((true and true))"', () => {
        expect(calc("((true and true))")).toBeTruthy();
    });
    it('returns false when string is "((false and false))"', () => {
        expect(calc("((false and false))")).toBeFalsy();
    });
    it('returns true when string is "((true) and true)"', () => {
        expect(calc("((true) and true)")).toBeTruthy();
    });
    it('returns false when string is "((false) and false)"', () => {
        expect(calc("((false) and false)")).toBeFalsy();
    });
    it('returns false if the string "not true and not true"', () => {
        expect(calc("not true and not true")).toBeFalsy();
    });
    it('returns true if string is "not false and not false"', () => {
        expect(calc("not false and not false")).toBeTruthy();
    });
    it('returns false if the string "not true and not false"', () => {
        expect(calc("not true and not true")).toBeFalsy();
    });
    it('returns true if string is "not false and true"', () => {
        expect(calc("not false and not false")).toBeTruthy();
    });

    it('returns false when string is "(not true) and true"', () => {
        expect(calc("(not true) and true")).toBeFalsy();
    });
    it('returns true when string is "(not false) and not false"', () => {
        expect(calc("(not false) and not false")).toBeTruthy();
    });
    it('returns false when string is "((not true) and not false)"', () => {
        expect(calc("((not true) and not false)")).toBeFalsy();
    });
    it('returns false when string is "((false) and not true)"', () => {
        expect(calc("((false) and not true)")).toBeFalsy();
    });
});