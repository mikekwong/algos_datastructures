// Time complexity: O(n^2) approach
function findSumSlow (arr, value) {
  for (let j of arr) {
    for (let k of arr) {
      if (j + k == value) return [j, k]
    }
  }
  return false
}
console.log(findSumSlow([1, 2, 3, 4], 5))

// More efficient approach (longer but sorting first then BS) (BS = O (log N))
// Time complexity O (n Log n) overall (due to most sorting taking O (n Log n))

function binarySearch (arr, item) {
  let first = 0,
    mid
  let last = arr.length - 1
  let found = false
  while (first <= last && !found) {
    mid = Math.floor((first + last) / 2)
    if (arr[mid] === item) {
      found = mid
    } else {
      if (item < arr[mid]) {
        last = mid - 1
      } else {
        first = mid + 1
      }
    }
  }
  return found
}

function findSum (arr, value) {
  arr.sort((a, b) => a - b)
  let index
  for (let j of arr) {
    index = binarySearch(arr, value - j)
    if (index) return [j, value - j]
  }
  return false
}

console.log(findSum([1, 2, 3, 4], 7))
console.log(findSum([1, 2, 3, 4], 10))

// Moving indices
// Also O (N log N)

function findSum1 (arr, value) {
  arr.sort((a, b) => a - b)

  let index1 = 0,
    index2 = arr.length - 1,
    sum = 0

  while (index1 !== index2) {
    sum = arr[index1] + arr[index2]

    if (sum < value) {
      index1++
    } else if (sum > value) {
      index2--
    } else {
      return [arr[index1], arr[index2]]
    }
  }
  return false
}

console.log(findSum1([1, 2, 3, 4], 5))
console.log(findSum1([1, 2, 3, 4], 10))

// Most efficient using Sets and methods of Sets
// time efficiency: O(n)
//
// we scan the whole array once and store visited elements in a hash set. During the scan, for every element arr[i] in arr, we check if value - arr[i] is present in the hash set i.e. value - arr[i] is already visited. If value - arr[i] is found in the hash set, it means there is a pair (arr[i], value - arr[i]) in arr whose sum is equal to the given value. If we have exhausted all elements in the array and didn’t find any such pair, the function will return false.

function findSum2 (arr, value) {
  let foundValues = new Set()
  let results = []
  for (let i in arr) {
    // If difference of index from target is found
    if (foundValues.has(value - arr[i])) {
      results.push(value - arr[i], arr[i])
      return results
    }
    foundValues.add(arr[i])
  }
  return false
}

console.log(findSum2([1, 2, 4], 5))
console.log(findSum2([1, 2, 3, 4], 10))
