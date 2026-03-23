// const doubleNumbers = arr => arr.map(n => n * 2)
// console.log(doubleNumbers([1,2,3]))

// const numbersToStrings = arr => arr.map(n => String(n))
// console.log(numbersToStrings([1,2,3]))

// const upperCaseNames = arr => arr.map(n => n.toUpperCase())
// console.log(upperCaseNames(["ali","sara"]))

// const addFive = arr => arr.map(n => n + 5)
// console.log(addFive([10,20,30]))

// const getNames = arr => arr.map(o => o.name)
// console.log(getNames([{name:"Ali",age:20},{name:"Sara",age:25}]))

// const wordLengths = arr => arr.map(w => w.length)
// console.log(wordLengths(["apple","dog"]))

// const valTimesIndex = arr => arr.map((n, i) => n * i)
// console.log(valTimesIndex([2,3,4]))

// const makeUsernames = arr => arr.map(o => "@" + o.username)
// console.log(makeUsernames([{username:"ahmad"},{username:"sara"}]))

// const squareNumbers = arr => arr.map(n => n ** 2)
// console.log(squareNumbers([2,3,4]))

// const firstLetters = arr => arr.map(w => w[0])
// console.log(firstLetters(["Ali","Sara"]))

// const sumNumbers = arr => { let sum = 0; arr.forEach(n => sum += n); return sum }
// console.log(sumNumbers([10,20,30]))

// const countEven = arr => { let count = 0; arr.forEach(n => { if (n % 2 === 0) count++ }); return count }
// console.log(countEven([1,2,3,4]))

// const timesTen = arr => arr.map(n => n * 10)
// console.log(timesTen([1,2,3]))

// const addAdult = arr => arr.map(o => ({ ...o, adult: o.age >= 18 }))
// console.log(addAdult([{name:"Ali",age:20},{name:"Sara",age:15}]))

// const addTax = arr => arr.map(n => n * 1.1)
// console.log(addTax([100,200]))

// const countBig = arr => { let count = 0; arr.forEach(n => { if (n > 50) count++ }); return count }
// console.log(countBig([20,60,80]))

// const labelNumbers = arr => arr.map(n => `Number: ${n}`)
// console.log(labelNumbers([5,10]))

// const productNames = arr => arr.map(o => o.product)
// console.log(productNames([{product:"Laptop",price:1000},{product:"Phone",price:500}]))

// const addIndex = arr => arr.map((n, i) => n + i)
// console.log(addIndex([5,5,5]))

const isEvenArray = arr => arr.map(n => n % 2 === 0)
console.log(isEvenArray([1,2,3,4]))