// write a function called minSubArrayLen which accepts an array of positive integers and a positive integer
// // return minimal length of a contiguous subarray of which the sum is greater than or erqual to the integer passed to the func, otherwise return 0
// Time complexity - O(n)
// Space complexity - O(1)
function minSubArrayLen (nums, sum) {
  let total = 0
  let start = 0
  let end = 0
  let minLen = Infinity

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then move window to the right
    if (total < sum && end < nums.length) {
      total += nums[end]
      end++
    }
    // if current window adds up to at least the sum given then we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start)
      total -= nums[start]
      start++
    } else {
      break
    }
  }
  return minLen === Infinity ? 0 : minLen
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 because [4,3] is smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 because [62] is greater than 52
