import calc from "./calc";

describe('calc', () => {
    it('returns true if a string is entered', () => {
        expect(calc("ok")).toBeTruthy();
    });
});