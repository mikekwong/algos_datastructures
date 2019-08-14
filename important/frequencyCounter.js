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

function sameFrequency (num1, num2) {
  num1 = num1.toString()
  num2 = num2.toString()
  if (num2.length !== num1.length) return false

  let obj1 = {}
  let obj2 = {}

  for (let i = 0; i < num1.length; i++) {
    obj1[num1[i]] = (obj1[num1[i]] || 0) + 1
  }
  for (let j = 0; j < num2.length; j++) {
    obj2[num2[j]] = (obj2[num2[j]] || 0) + 1
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false
  }
  return true
}

console.log(sameFrequency(1823, 2812))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))

// Frequency counter / multiple pointers
// function areThereDuplicates (...args) {
//   let collection = {}
//   for (let i = 0; i < args.length; i++) {
//     collection[args[i]] = (collection[args[i]] || 0) + 1
//   }
//   for (let key in collection) {
//     if (collection[key] > 1) return true
//   }
//   return false
// }
//
// Are there duplicates using object
function areThereDuplicates (...args) {
  let collection = {}
  for (let i = 0; i < args.length; i++) {
    if (!collection[args[i]]) {
      collection[args[i]] = 1
    } else {
      return true
    }
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))

// are there duplicates using multiple pointers
function areThereDupes (...args) {
  // two pointers
  // use greater than to sort alphabet (and num)
  args.sort((a, b) => a > b)
  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) return true
    start++
    next++
  }
  return false
}

console.log(areThereDupes(1, 2, 3))
console.log(areThereDupes(2, 2, 1))
console.log(areThereDupes('a', 'b', 'c', 'a'))

// are there duplciates one liner using sets
function areThereDuplicates () {
  return new Set(arguments).size !== arguments.length
}
