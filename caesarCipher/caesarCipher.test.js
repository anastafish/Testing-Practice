const caesarCipher = require('./caesarCipher')

test('caesarCipher', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza')
})