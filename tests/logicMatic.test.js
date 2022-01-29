const { fibonacci, repeatWord } = require('../Logic.js')

describe('fibonacci(n)', function () {
  it('return n number Fibonacci sequenze', () => {
    const fib1 = fibonacci(0)
    const fib2 = fibonacci(6)
    const fib3 = fibonacci(9)
    const fib4 = fibonacci(2)
    expect(fib1).toBe(0)
    expect(fib2).toBe(8)
    expect(fib3).toBe(34)
    expect(fib4).toBe(1)
  })
})

describe('repeatWord', function (){
    it('return words repetition', () => {
        const text1 = repeatWord('casa perro casa')
        const text2 = repeatWord('casa? casa sol')
        expect(text1).toStrictEqual({"casa": 2, "perro": 1})
        expect(text2).toStrictEqual({"casa": 2, "sol": 1})
    })
})

