// Write a function which finds the maximum possible sum of a subarray with the length of the nubmer passed to the function
// Time complexity = O(n)
// Space complexity = O(1)
function maxSubarraySum (arr, num) {
  if (num > arr.length) return null
  let total = 0
  for (let i = 0; i < num; i++) {
    total += arr[i]
  }
  let currentTotal = total
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num]
    total = Math.max(total, currentTotal)
  }
  return total
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))
// 300
// i = 2
// 300 + 300 - 100 = 500
// 500
// i = 3
// 500 + 400 - 200
// 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 4))
