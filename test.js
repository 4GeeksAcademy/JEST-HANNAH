const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
test ('que esta funcion fromEuroToDollar convierta 100 euros su resultado sea 107 dolares', () => {
    const result = fromEuroToDollar (100)
    const expected = (100 * 1.07)
    expect(result).toBe(expected)
})

test ('que esta funcion fromDollarToYen convierta 100 dolares su resultado sea 14626,16 yenes', () => {
    const result = fromDollarToYen (100)
    const expected = (100 / 1.07 * 156.5)
    expect(result).toBeCloseTo(expected)
})

test ('que esta funcion fromYenToPound convierta 1000 yenes su resultado sea 5,55', () => {
    const result = fromYenToPound (1000)
    const expected = (1000 / 156.5 * 0.87)
    expect(result).toBeCloseTo(expected)
})
