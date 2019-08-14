// find first matching pair of nums in a sorted array that sum to 0
// naiive approach
// time complexity = O(n^2)
// space complexity = O(1)
// function sumZero (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3]))

// Refactor using pointers (starting from left of arr and right of arr)
// // Time complexity O(n)
// Space complexity O(1)

function sumZero (arr) {
  let left = 0
  let right = arr.length - 1
  // fail safe in case we get to 0
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

console.log(sumZero([-2, -1, 0, 1, 2, 3]))
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]))
