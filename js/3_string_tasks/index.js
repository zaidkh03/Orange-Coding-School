// 1

// let str1 = "Hello"
// let str2 = "World"
// console.log(str1.concat(" ",str2))

// 2

// let str = "JavaScript"
// console.log(str.length)

// 3

// let str = "Programming"
// console.log(str.charAt(0))

// 4

// let str = "coding is fun"
// console.log(str.slice(0, str.indexOf(" ")))

// 5

// let str = "cat"
// console.log(str.replace('a', 'e'))

// 6

// let str = "javascript"
// console.log(str.toLocaleUpperCase())

// 7

// let str = "apple,banana,orange"
// console.log(str.split(","))

// 8

// let arr = ["hello", "world"]
// console.log(arr.join(" "))

// 9

// let str = "     hello world "
// console.log(str.trim())

// 10

// let str = "hello world"
// let word = "world"
// console.log(str.includes(word))

// 11

// let str = "hello"
// let splited = str.split("")
// let reversed = splited.reverse()
// let joined = reversed.join('')
// console.log(joined)

// 12

// let str = "elephant"
// let char = 'e'
// let count = 0
// for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == char) {
//         count++
//     }
// }
// console.log(count)

// 13

// let str = "racecar"
// let palindrome = true

// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//         palindrome = false
//         break
//     }
// }
// console.log(palindrome)

// 14

// let str = "hello world iprsnv werpgni"
// let newStr = str.split(" ")

// for (let index = 0; index < newStr.length; index++) {
//     newStr[index] = newStr[index][0].toUpperCase() + newStr[index].slice(1)
// }
// newStr = newStr.join(" ")
// console.log(newStr)

// 15

// let num = 12.3456
// num = parseFloat(num.toFixed(2))
// console.log(num)

// 16

// let str = "There are 3 apples and 2 oranges"
// let numArr = []
// for (let index = 0; index < str.length; index++) {
//     if (str[index] >= '0' && str[index] <= '9') {
//         numArr.push(str[index])
//     }
// }
// console.log(numArr)

// 17
// console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test("example@email.com"))

// 18
// console.log("This is a bad word".replace("bad", "good"))

// 19
// console.log([...new Set("aabbc")].join(''))

// 20
// console.log("hello".split('').sort().join(''))

// 21
// const a = "listen", b = "silent"
// console.log(a.split('').sort().join('') === b.split('').sort().join(''))

// 22
// console.log("The quick brown fox".split(' ').reverse().join(' '))

// 23
// console.log("Web development is fascinating".split(' ').reduce((a, b) => a.length >= b.length ? a : b))

// 24
// const s = "A man, a plan, a canal, Panama!".toLowerCase().replace(/[^a-z]/g, '')
// console.log(s === s.split('').reverse().join(''))

// 25
// const freq = {}
// for (const c of "mississippi") freq[c] = (freq[c] || 0) + 1
// console.log(freq)

// 26
// console.log("Hello World".replace(/[aeiou]/gi, c => ({a:1,e:2,i:3,o:4,u:5})[c.toLowerCase()]))

// 27
// console.log("JavaScript is fun".startsWith("Java"))

// 28
// console.log("image.png".endsWith("png"))

// 29
// console.log("ha".repeat(3))

// 30
console.log("Hello World".indexOf("o"))