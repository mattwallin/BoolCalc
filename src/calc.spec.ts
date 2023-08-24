import calc from "./calc";

describe('calc', () => {
    it('returns false if string is empty', () => {
        expect(calc("")).toBeFalsy();
    });
});