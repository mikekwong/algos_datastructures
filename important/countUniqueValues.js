// write a function which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// Space complexity - O(n)
// Time complexity - O(n)
// // Using 2 pointers from left
function countUniqueValues (arr) {
  if (!arr.length) return 0

  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
    // console.log(i, j)
  }
  return i + 1
}

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12]))
console.log(countUniqueValues([]))
