// 1

// let result = ""
// let n = 16
// for (let i = 1; i <= n; i++) {
//     result += i
//     if (i != n) {
//         result += "-"
//     }
// }
// console.log(result)

// 2

// let result = 0
// let n = 30
// for (let i = 0; i <= n; i++) {
//     result += i
// }
// console.log(result)

// 3

// let result = ""
// let n = 50
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         result += i + " "
//     }
// }
// console.log(result)

// 4

// let result = ""
// for (let i = 10; i > 0; i--) {
//     result += i + " "
// }
// console.log(result)

// 5

// let result = ""
// let n = 6
// for (let i = 0; i < n; i++) {
//     let char = String.fromCharCode(65 + i)

//     for (let j = 0; j < n; j++) {
//         // if (j >= n - i - 1) {
//         //     result += char + " "
//         // } else {
//         //     result += "A "
//         // }
//         result += j >= n - i - 1 ? char + " ": "A "
//     }
//     result += "\n"
// }
// console.log(result)

// 6

// let result = ""
// let n = 5
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (j >= n - i - 1) {
//             result += i + 1 + " "
//         } else {
//             result += "1 "
//         }
//         // result += j >= n - i - 1 ? i + 1 + " ": "1 "
//     }
//     result += "\n"
// }
// console.log(result)

// 7

// let result = ""
// let n = 5
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         // if (j == i) {
//         //     result += i + 1 +  " "
//         // } else {
//         //     result += "0 "
//         // }
//         result += j == i ? i + 1 +  " ": "0 "
//     }
//     result += "\n"
// }
// console.log(result)

// 8

// function factorial(n) {
//     if (n < 0) {
//         return "must be positive"
//     }
//     if (n == 0 || n == 1) {
//         return 1
//     }
//     let result = 1
//     for (let i = 1; i <= n; i++) {
//         result *= i
//     }
//     return result
// }
// console.log(factorial(5))

// 9

// function fibonacci(n) {
//     let num1 = 0
//     let num2 = 1
//     let next
//     let result = ""

//     for (let i = 0; i <= n; i++) {
//         result += num1 + " "
//         next = num1 + num2
//         num1 = num2
//         num2 = next
//     }
//     return result
// }

// console.log(fibonacci(10))

// 10

// function occurrence(str, char) {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == char.toUpperCase() || str.charAt(i) == char.toLowerCase()) {
//             count++
//         }
//     }
//     return count
// }

// console.log(occurrence("Orange Coding School", 'c'))

// 11

// let n = 5
// for (let i = 1; i <= n; i++) {
//     let result = ""
//     for (let j = 1; j <= n; j++) {
//         result += i + " + " + j + " = " + i*j + "  "
//     }
//     console.log(result)
// }

// 12

// let lines = 5
// let num = 1

// for (let i = 1; i <= lines; i++) {
//     let result = ""
//     for (let j = 1; j <= i; j++) {
//         result += num + " "
//         num++
//     }
//     console.log(result)
// }

// 13

// let result = ""
// for (let i = 1; i <= 100; i++) {
//     if (i % 7 == 0) {
//         result += i + " "
//     }
// }
// console.log(result)

// 14

// let result = 0
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 != 0) {
//         result += i
//     }
// }
// console.log(result)

// 15

// let result = ""
// for (let i = 1; i <= 10; i++) {
//     result += i * i + " "
// }
// console.log(result)

// 16

// let result = ""
// for (let i = 1; i <= 30; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         result += "FizzBuzz "
//     } else if (i % 3 == 0) {
//         result += "Fizz "
//     } else if (i % 5 == 0) {
//         result += "Buzz "
//     } else {
//         result += i + " "
//     }
// }
// console.log(result)

// 17

// let result = ""
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         result += "* "
//     }
//     result +="\n"
// }
// console.log(result)

// 18

// let result = ""
// for (let i = 0; i < 5; i++) {
//     for (let j = 5; j > i; j--) {
//         result += "* "
//     }
//     result +="\n"
// }
// console.log(result)

// 19

// let result = ""
// for (let i = 0; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         result += j
//     }
//     result +="\n"
// }
// console.log(result)

// 20

// let result = ""
// for (let i = 0; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         result += i
//     }
//     result +="\n"
// }
// console.log(result)

// 21

// for (let i = 1; i <= 200; i++) {
//     let temp = i;
//     let sum = 0;
//     while (temp > 0) {
//         sum += temp % 10;
//         temp = Math.floor(temp / 10);
//     }
//     if (sum === 5) {
//         console.log(i);
//     }
// }

// 22

// for (let i = 1; i < 100; i++) {

//     num1 = Math.floor(i / 10)
//     num2 = i % 10
//     if ((num1 > num2) && num2 != 0) {
//         console.log(`${num1}${num2}`)
//     }
// }

// 23

// for (let i = 1; i < 100; i++) {

//     num1 = Math.floor(i / 10)
//     num2 = i % 10
//     if ((num1 == num2)) {
//         console.log(`${num1}${num2}`)
//     }
// }

// 24

// for (let i = 1; i <= 300; i++) {
//     let temp = i
//     let product = 1
//     let hasZero = false

//     while (temp > 0) {
//         let digit = temp % 10
//         if (digit === 0) {
//             hasZero = true
//             break
//         }
//         product *= digit
//         temp = Math.floor(temp / 10)
//     }
//     if (!hasZero && i % product == 0) {
//         console.log(`n = ${i} / product = ${product} / ${i} % ${product} = ${i % product} `)
//     }
// }

// 25

// for (let i = 1; i <= 100; i++) {
//     num1 = Math.floor(i / 10)
//     num2 = i % 10

//     if ((num1 == num2) && (num1 + num2 == num1 * num2)) {
//         console.log(i)
//     }
// }

// 26

// for (let i = 1; i <= 500; i++) {
//     let temp = i
//     let reverse = 0

//     while (temp > 0) {
//         let digit = temp % 10
//         reverse = reverse * 10 + digit
//         temp = Math.floor(temp / 10)
//     }

//     if (reverse % 3 == 0) {
//         console.log(i)
//     }
// }

// 27

// for (let i = 1; i <= 200; i++) {
//     num1 = Math.floor(i / 10)
//     num2 = i % 10

//     if ((num2 - num1 == 2) && i > 9) {
//         console.log(i)
//     }
// }

// 28

