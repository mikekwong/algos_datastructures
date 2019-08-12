// Create products of original array that multiples with every number except current index and place into array copy
// Time complexity O(n^2)
function findProduct (arr) {
  var result = []
  var left = 1,
    currentproduct
  // To store product of all previous values from currentIndex
  for (var i = 0; i < arr.length; i++) {
    currentproduct = 1
    // To store current product for index i
    // compute product of values to the right of i index of list
    for (var j = i + 1; j < arr.length; j++) {
      currentproduct = currentproduct * arr[j]
    }
    // currentproduct * product of all values to the left of i index
    result.push(currentproduct * left)
    // Updating `left`
    left = left * arr[i]
  }

  return result
}
console.log(findProduct([1, 2, 3, 4]))
console.log(findProduct([4, 2, 1, 5, 0]))

// Efficient appraoch: O(n)
// The algorithm for this solution is to first create a new list with the products of all the elements to the left of each element as done on lines 4-6. Then multiply each element in that list to the product of all the elements to the right of the list by traversing it in reverse as done on lines 10-12.
function findProduct2 (arr) {
  var left = 1,
    product = []
  for (let ele of arr) {
    product.push(left)
    left = left * ele
  }

  let right = 1
  for (let i = arr.length - 1; i >= 0; i--) {
    product[i] *= right
    right *= arr[i]
  }
  return product
}

console.log(findProduct2([1, 2, 3, 4]))
console.log(findProduct2([4, 2, 1, 5, 0]))
