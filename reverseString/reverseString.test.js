const reverseString = require('./reverseString')

test('returning a reversed string', () => {
    expect(reverseString('father')).toBe('rehtaf')
})