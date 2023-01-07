const calculator = require('./calculator')

test('addition', () => {
    expect(calculator.add(5,4)).toBe(9)
})

test('subtraction', () => {
    expect(calculator.subtract(20,5)).toBe(15)
})

test('division', () => {
    expect(calculator.divide(30,3)).toBe(10)
})

test('multiply', () => {
    expect(calculator.multiply(5,4)).toBe(20)
})

