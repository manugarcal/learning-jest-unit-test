const subtract = require('./subtract')

test('properly subtracting two numnbers', () => {
    expect(
        subtract(5, 5)
    ).toBe(0)
})