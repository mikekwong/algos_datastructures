// Given a large array of integers and a window of size w, find the current maximum value in the window as the window slides through the entire array.
//
// Runtime Complexity O(n)
// Memory Complexity O(n) = n = window size

function maxSlideWindow (arr, size) {
  let result = []
  if (arr.length === 0) {
    return
  }
  if (size > arr.length) {
    return
  }
  let window = []
  // find out max for first window
  for (let i = 0; i < size; i++) {
    while (window.length && arr[i] >= arr[window[window.length - 1]]) {
      window.pop()
    }
    window.push(i)
  }
  result.push(arr[window[0]])
  for (let i = size; i < arr.length; i++) {
    // Remove all numbers that are smaller than current number from tail of list
    while (window.length && arr[i] >= arr[window[window.length - 1]]) {
      window.pop()
    }

    // remove first number if it doesn't fall into the window anymore
    if (window.length && window[0] <= i - size) {
      window.shift()
    }
    window.push(i)
    result.push(arr[window[0]])
  }
  return result
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Array = ' + array)
console.log('Max = ' + maxSlideWindow(array, 3))
