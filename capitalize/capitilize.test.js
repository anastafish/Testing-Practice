const capitalize = require('./capitalize')

test('capitilize the first letter of the word', () => {
    expect(capitalize('father')).toBe('Father')
})