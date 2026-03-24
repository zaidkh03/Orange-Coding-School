// Task 1 - Log Compression System - O(n)
// function compressLogs(logs) {
//     let result = []
//     let i = 0
//     while (i < logs.length) {
//         let count = 1
//         while (i + count < logs.length && logs[i + count].event === logs[i].event) count++
//         result[result.length] = { event: logs[i].event, count }
//         i += count
//     }
//     return result
// }
// console.log(compressLogs([
//     { event:"click", time:1 },
//     { event:"click", time:2 },
//     { event:"scroll", time:3 },
//     { event:"scroll", time:4 },
//     { event:"click", time:5 }
// ]))

// Task 2 - Subarray with Given Sum - O(n²)
// function subarraySum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0
//         for (let j = i; j < arr.length; j++) {
//             sum += arr[j]
//             if (sum === target) return { start: i, end: j }
//             if (sum > target) break
//         }
//     }
//     return -1
// }
// console.log(subarraySum([1,4,20,3,10,5], 33))

// Task 3 - Maximum Profit - O(n)
// function maxProfit(prices) {
//     let minPrice = prices[0]
//     let maxProfitVal = 0
//     for (let i = 1; i < prices.length; i++) {
//         let profit = prices[i] - minPrice
//         if (profit > maxProfitVal) maxProfitVal = profit
//         if (prices[i] < minPrice) minPrice = prices[i]
//     }
//     return maxProfitVal
// }
// console.log(maxProfit([7,1,5,3,6,4]))

// Task 4 - Trap Rain Water - O(n)
// function trapWater(heights) {
//     let n = heights.length
//     let maxLeft = []
//     let maxRight = []
//     let water = 0
//     maxLeft[0] = heights[0]
//     for (let i = 1; i < n; i++)
//         maxLeft[i] = heights[i] > maxLeft[i-1] ? heights[i] : maxLeft[i-1]
//     maxRight[n-1] = heights[n-1]
//     for (let i = n - 2; i >= 0; i--)
//         maxRight[i] = heights[i] > maxRight[i+1] ? heights[i] : maxRight[i+1]
//     for (let i = 0; i < n; i++) {
//         let minSide = maxLeft[i] < maxRight[i] ? maxLeft[i] : maxRight[i]
//         let trapped = minSide - heights[i]
//         if (trapped > 0) water += trapped
//     }
//     return water
// }
// console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1]))

// Task 5 - Longest Unique Subarray - O(n²)
// function longestUnique(arr) {
//     let best = []
//     for (let i = 0; i < arr.length; i++) {
//         let current = []
//         for (let j = i; j < arr.length; j++) {
//             let found = false
//             for (let k = 0; k < current.length; k++)
//                 if (current[k] === arr[j]) { found = true; break }
//             if (found) break
//             current[current.length] = arr[j]
//         }
//         if (current.length > best.length) best = current
//     }
//     return best
// }
// console.log(longestUnique([1,2,3,1,2,3,4,5]))

// Task 6 - Product of Array Except Self - O(n)
// function productExceptSelf(arr) {
//     let n = arr.length
//     let result = []
//     result[0] = 1
//     for (let i = 1; i < n; i++) result[i] = result[i-1] * arr[i-1]
//     let right = 1
//     for (let i = n - 1; i >= 0; i--) {
//         result[i] *= right
//         right *= arr[i]
//     }
//     return result
// }
// console.log(productExceptSelf([1,2,3,4]))

// Task 7 - Spiral Matrix Traversal - O(n*m)
// function spiralMatrix(matrix) {
//     let result = []
//     let top = 0, bottom = matrix.length - 1
//     let left = 0, right = matrix[0].length - 1
//     while (top <= bottom && left <= right) {
//         for (let i = left; i <= right; i++) result[result.length] = matrix[top][i]
//         top++
//         for (let i = top; i <= bottom; i++) result[result.length] = matrix[i][right]
//         right--
//         if (top <= bottom) {
//             for (let i = right; i >= left; i--) result[result.length] = matrix[bottom][i]
//             bottom--
//         }
//         if (left <= right) {
//             for (let i = bottom; i >= top; i--) result[result.length] = matrix[i][left]
//             left++
//         }
//     }
//     return result
// }
// console.log(spiralMatrix([[1,2,3],[4,5,6],[7,8,9]]))

// Task 8 - Minimum Window Subarray - O(n²)
// function minWindow(arr, target) {
//     let bestStart = -1, bestLen = Infinity
//     for (let i = 0; i < arr.length; i++) {
//         let freq = {}
//         for (let k = 0; k < target.length; k++) freq[target[k]] = (freq[target[k]] || 0) + 1
//         let needed = target.length
//         for (let j = i; j < arr.length; j++) {
//             if (freq[arr[j]] > 0) needed--
//             freq[arr[j]] = (freq[arr[j]] || 0) - 1
//             if (needed === 0) {
//                 if (j - i + 1 < bestLen) { bestLen = j - i + 1; bestStart = i }
//                 break
//             }
//         }
//     }
//     if (bestStart === -1) return []
//     let result = []
//     for (let i = bestStart; i < bestStart + bestLen; i++) result[result.length] = arr[i]
//     return result
// }
// console.log(minWindow([1,2,2,3,1,2,3], [1,2,3]))

// Task 9 - Detect Cycle in Array - O(n)
// function detectCycle(arr) {
//     let visited = {}
//     let i = 0
//     let steps = 0
//     while (steps <= arr.length) {
//         if (visited[i]) return true
//         visited[i] = true
//         i = ((i + arr[i]) % arr.length + arr.length) % arr.length
//         steps++
//     }
//     return false
// }
// console.log(detectCycle([2,-1,1,2,2]))

// Task 10 - Reconstruct Queue - O(n²)
function reconstructQueue(people) {
    for (let i = 0; i < people.length - 1; i++)
        for (let j = i + 1; j < people.length; j++)
            if (people[i].height < people[j].height ||
               (people[i].height === people[j].height && people[i].inFront > people[j].inFront)) {
                let temp = people[i]; people[i] = people[j]; people[j] = temp
            }
    let result = []
    for (let i = 0; i < people.length; i++) {
        let pos = people[i].inFront
        for (let j = result.length; j > pos; j--) result[j] = result[j-1]
        result[pos] = people[i]
    }
    return result
}
console.log(reconstructQueue([
    { height:7, inFront:0 },
    { height:4, inFront:4 },
    { height:7, inFront:1 },
    { height:5, inFront:0 },
    { height:6, inFront:1 },
    { height:5, inFront:2 }
]))