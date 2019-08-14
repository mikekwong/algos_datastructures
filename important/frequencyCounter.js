// Tiome complexity O(n^2) Quadratic time
// function same (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   // nested loop
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIdx = arr2.indexOf(arr1[i] ** 2)
//     if (correctIdx === -1) {
//       return false
//     }
//     // splice to clear values already true from 2nd array, so it won't be checked again
//     arr2.splice(correctIdx, 1)
//   }
//   // once we finish loop, return true as all values have been found
//   return true
// }
//
// Refactored - time complexity - O(n) linear time
// Use object for frequency counters to quickly compare
function same (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  // Do 2 checks to see if it matches between the object
  for (let key in frequencyCounter1) {
    // Check if the squared key of counter1 exists in key of counter2, automatically fail if it doesnt
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    // Check if the value (occurences) of freqCounter2 key is not equal to key  of freqCounter1 value
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))
console.log(same([1, 2, 3], [4, 1, 9]))
console.log(same([1, 2, 1], [4, 4, 1]))
