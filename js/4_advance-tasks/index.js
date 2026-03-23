// Task 1
// const firstAndLast = arr => [arr[0], arr[arr.length - 1]]
// console.log(firstAndLast([1,2,3,4,5]))

// Task 2
// const removeMiddle = arr => { arr.splice(Math.floor(arr.length / 2), 1); return arr }
// console.log(removeMiddle([1,2,3,4,5]))

// Task 3
// const swapFirstLast = arr => { [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]]; return arr }
// console.log(swapFirstLast([1,2,3,4,5]))

// Task 4
// const insertAtMiddle = (arr, value) => { arr.splice(Math.floor(arr.length / 2), 0, value); return arr }
// console.log(insertAtMiddle([1,2,3,4], 10))

// Task 5
// const duplicateArray = arr => arr.concat(arr)
// console.log(duplicateArray([1,2,3]))

// Task 6
// const removeDuplicates = arr => arr.filter((v, i) => arr.indexOf(v) === i)
// console.log(removeDuplicates([1,2,2,3,4,4,5]))

// Task 7
// const findSecondLargest = arr => [...new Set(arr)].sort((a, b) => b - a)[1]
// console.log(findSecondLargest([4,9,2,10,6]))

// Task 8
// const findSecondSmallest = arr => [...new Set(arr)].sort((a, b) => a - b)[1]
// console.log(findSecondSmallest([4,9,2,10,6]))

// Task 9
// const removeGreaterThan = (arr, value) => arr.filter(n => n <= value)
// console.log(removeGreaterThan([10,5,20,3,8], 10))

// Task 10
// const removeLessThan = (arr, value) => arr.filter(n => n >= value)
// console.log(removeLessThan([10,5,20,3,8], 10))

// Task 11
// const countOccurrences = (arr, value) => arr.filter(n => n === value).length
// console.log(countOccurrences([1,2,3,2,4,2], 2))

// Task 12
// const arrayIntersection = (arr1, arr2) => arr1.filter(n => arr2.includes(n))
// console.log(arrayIntersection([1,2,3,4], [3,4,5,6]))

// Task 13
// const arrayDifference = (arr1, arr2) => arr1.filter(n => !arr2.includes(n))
// console.log(arrayDifference([1,2,3,4], [3,4]))

// Task 14
// const uniqueMerge = (arr1, arr2) => [...new Set(arr1.concat(arr2))]
// console.log(uniqueMerge([1,2,3], [3,4,5]))

// Task 15
// const removeNegativeNumbers = arr => arr.filter(n => n >= 0)
// console.log(removeNegativeNumbers([5,-2,10,-3,7]))

// Task 16
// const wordsLongerThan = (arr, length) => arr.filter(w => w.length > length)
// console.log(wordsLongerThan(["alex","mohammad","ali","sara"], 4))

// Task 17
// const countLetterInWords = (arr, letter) => arr.filter(w => w.includes(letter)).length
// console.log(countLetterInWords(["apple","banana","car","dog"], "a"))

// Task 18
// const removeShortWords = (arr, length) => arr.filter(w => w.length >= length)
// console.log(removeShortWords(["hi","apple","cat","banana"], 4))

// Task 19
// const findLongestWord = arr => arr.sort((a, b) => b.length - a.length)[0]
// console.log(findLongestWord(["apple","hi","banana"]))

// Task 20
// const findShortestWord = arr => arr.sort((a, b) => a.length - b.length)[0]
// console.log(findShortestWord(["apple","hi","banana"]))

// Task 21
// const sortByLength = arr => arr.sort((a, b) => a.length - b.length)
// console.log(sortByLength(["apple","hi","banana"]))

// Task 22
// const removeEverySecond = arr => arr.filter((_, i) => i % 2 === 0)
// console.log(removeEverySecond([1,2,3,4,5,6]))

// Task 23
// const sumEvenNumbers = arr => arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0)
// console.log(sumEvenNumbers([1,2,3,4,5,6]))

// Task 24
// const sumOddIndex = arr => arr.filter((_, i) => i % 2 !== 0).reduce((a, b) => a + b, 0)
// console.log(sumOddIndex([1,2,3,4,5,6]))

// Task 25
// const reverseWithoutReverse = arr => arr.reduce((acc, val) => { acc.unshift(val); return acc }, [])
// console.log(reverseWithoutReverse([1,2,3,4,5]))

// Task 26
// const findMissingNumber = arr => { const n = arr.length + 1; return (n * (n + 1) / 2) - arr.reduce((a, b) => a + b, 0) }
// console.log(findMissingNumber([1,2,3,5,6]))

// Task 27
// const pairSum = (arr, target) => { for (let i = 0; i < arr.length; i++) { const comp = target - arr[i]; if (arr.includes(comp) && arr.indexOf(comp) !== i) return [arr[i], comp] } }
// console.log(pairSum([2,7,11,15], 9))

// Task 28
// const rotateArray = (arr, steps) => arr.slice(arr.length - steps).concat(arr.slice(0, arr.length - steps))
// console.log(rotateArray([1,2,3,4,5], 2))

// Task 29
// const chunkArray = (arr, size) => { const res = []; for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size)); return res }
// console.log(chunkArray([1,2,3,4,5,6], 2))

// Task 30
const groupByLength = arr => arr.reduce((acc, w) => { (acc[w.length] = acc[w.length] || []).push(w); return acc }, {})
console.log(groupByLength(["hi","cat","dog","apple"]))