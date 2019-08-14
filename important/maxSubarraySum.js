// Sliding window pattern
//
// function taht accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array
// Time complexity O(n^2)
function maxSubarraySum (arr, num) {
  if (num === 1) return Math.max(...arr)

  // If num of consecutive integer target exceeds array length
  if (num > arr.length) return null

  // If array was all negative numbers just to cover all cases
  var max = -Infinity
  // end of iteration is determined by last possible sequence of window based on sequence length
  for (let i = 0; i < arr.length - num + 1; i++) {
    // temp will store our sum each time through summing all the numbers from the window
    temp = 0
    for (let j = 0; j < num; j++) {
      // keep summing as j loops through to end of window
      temp += arr[i + j]
    }
    // only assign temp to max so long as temp sum is bigger than the previous sum
    if (temp > max) {
      max = temp
    }
  }
  // once outer loop finishes, return max
  return max
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
console.log(maxSubarraySum([4, 2, 1, 6], 1))

// Sliding window
// Refactor
// time complexity = O(n)
function maxSubarraySumRefactor (arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    // Initial value of maxSum is the sum of first index leading to index of num
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    // add the next value in index and subtract first index in window and reassign it to tempSum
    tempSum = tempSum - arr[i - num] + arr[i]
    // maxSum collects bigger value of the 2
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}
// i = 3
// 17 = 17 + 2 - 2 = 17
// i =4
// ... = 17 -6 +1  = 12
// i = 5
// ... = 12 - 9 + 8 = 11
// i = 6
// ... = 11 - 2 + 5 = 14
// i = 7
// ... = 14 - 1 + 6 = 19

console.log(maxSubarraySumRefactor([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
console.log(maxSubarraySumRefactor([1, 2, 5, 2, 8, 1, 5], 4))
console.log(maxSubarraySumRefactor([4, 2, 1, 6], 1))
