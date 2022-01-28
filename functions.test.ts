const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("contain letter f", () => {
        expect(shuffleArray("food")).toContain("f")
    });

    test("does not contain r", () => {
        expect(shuffleArray("candy")).not.toContain("r")
    })
})