// Time of BS is O(log N)
function binarySearch (array, target) {
  // First, establish the lower and upper bounds of where the value
  // we're searching for can be. To start, the lower bound is the first
  // value in the array, while the upper bound is the last value:
  let lowerBound = 0
  let upperBound = array.length - 1

  // We begin a loop in which we keep inspecting the middlemost value
  // Between the upper and lower bounds
  while (lowerBound <= upperBound) {
    // We find the midpoint between the upper and lower bounds
    // Round down to nearest integer in case of odd length in arr
    let midpoint = Math.floor((upperBound + lowerBound) / 2)
    // Inspect value at midpoint:
    let midpointValue = array[midpoint]
    // If the value at midpoint is the one we're looking for, we're done
    // If not, we change the lower or upper bound based on whether we need
    // to guess higher or lower
    if (target < midpointValue) {
      upperBound = midpoint - 1
    } else if (target > midpointValue) {
      lowerBound = midpoint + 1
    } else {
      return midpoint
    }
  }
  // once we narrow the bounds until they reach each otehr, that means the value we are looking for are not contained in this array
  return null
}

console.log(binarySearch([1, 2, 3, 4, 5], 3))

// Recursive BS O (log N)
function recBinarySearch (a, key, low, high) {
  // If value doesn't exist
  if (low > high) {
    return -1
  }

  let mid = low + Math.floor((high - low) / 2)
  if (a[mid] === key) {
    return mid
  } else if (key < a[mid]) {
    return recBinarySearch(a, key, low, mid - 1)
  } else {
    return recBinarySearch(a, key, mid + 1, high)
  }
}

function bSearch (a, key) {
  return recBinarySearch(a, key, 0, a.length - 1)
}

let array = [
  10,
  20,
  47,
  59,
  63,
  75,
  88,
  99,
  107,
  120,
  133,
  155,
  162,
  176,
  188,
  199,
  200,
  210,
  222
]

console.log('Key(47) found at: ' + bSearch(array, 47))
console.log('Key(47) found at: ' + bSearch(array, 75))
console.log('Key(47) found at: ' + bSearch(array, 22))

// mergeSort
// O(n log n) time
// O(n) space
const mergeSort = arrayToSort => {
  // Base Case: arrays with fewer than 2 elements are sorted
  if (arrayToSort.length < 2) {
    return arrayToSort
  }
  // Step 1: divide the array in half
  // We need to round down to avoid getting a 'half index'
  const midIndex = Math.floor(arrayToSort.length / 2)

  const left = arrayToSort.slice(0, midIndex)
  const right = arrayToSort.slice(midIndex)

  // Step 2: sort each half
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  // Step 3: merge the sorted halves
  const sortedArray = []
  let currentLeftIndex = 0
  let currentRightIndex = 0

  while (sortedArray.length < left.length + right.length) {
    // sortedLeft's first element comes next
    // if it's less than sortedRight's first
    // element or if sortedRight is exhausted
    if (
      currentLeftIndex < left.length &&
      (currentRightIndex === right.length ||
        sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex])
    ) {
      sortedArray.push(sortedLeft[currentLeftIndex])
      currentLeftIndex++
    } else {
      sortedArray.push(sortedRight[currentRightIndex])
      currentRightIndex++
    }
  }
  return sortedArray
}

console.log(mergeSort([7, 5, 2, 8, 1, 4, 3, 6]))
