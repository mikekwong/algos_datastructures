// linear search (O(n))
// function findNum (arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i
//     }
//   }
//   return -1
// }

// console.log(findNum([1, 2, 3, 4, 5, 6], 5))

// Logarithmic search O(log(N))
function findNum (arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let midpoint = Math.floor((left + right) / 2)
    let currElement = arr[midpoint]

    if (currElement < target) {
      left = midpoint + 1
    } else if (currElement > target) {
      right = midpoint - 1
    } else {
      return midpoint
    }
  }
  return -1
}

console.log(findNum([1, 2, 3, 4, 5, 6], 5))
