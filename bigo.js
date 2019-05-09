// TIME COMPLEXITY

// This function runs in O(1) time (or "constant time") relative to its input. The input array could be 1 item or 1,000 items, but this function would still just require one "step."

function printFirstItem (items) {
  console.log(items[0])
}

// O(n) time (or "linear time"), where n is the number of items in the array. If the array has 10 items, we have to print 10 times. If it has 1,000 items, we have to print 1,000 times.

function printAllitems (items) {
  items.forEach(item => {
    console.log(item)
  })
}

// O(n^2) = Quadratic time. Here we're nesting two loops. If our array has n items, our outer loop runs n times nad our inner loop runs n times for each iteration of the outer loop, giving us n^2 total prints. If the array has 10 items, we have to print 100 times. If it has 1,000 items, we have to print 1,000,000 times.

function printAllPossibleOrderedPairs (items) {
  items.forEach(firstItem => {
    items.forEach(secondItem => {
      console.log(firstItem, secondItem)
    })
  })
}

// N could be the actual input, or the size of the input.
// Both are O(n) runtime, even if one takes an integer and another as an array for input
function sayHiNTimes (n) {
  for (let i = 0; i < n; i++) {
    console.log('hi')
  }
}

function printAllItems (items) {
  items.forEach(item => {
    console.log(item)
  })
}

// Drop the constants
// This is why big O notation rules. When you're calculating the big O complexity of something, you just throw out the constants. So like:
// This is O(2n), which we call O(n)

function printAllItemsTwice (items) {
  items.forEach(item => {
    console.log(item)
  })

  // Once more, with feeling
  items.forEach(item => {
    console.log(item)
  })
}

// This is O(1 + n/2 + 100), which we call O(n)

function printFirstItemThenFirstHalfThenSayHi100Times (items) {
  console.log(items[0])

  const middleIndex = Math.floor(items.length / 2)
  let index = 0

  while (index < middleIndex) {
    console.log(items[index])
    index++
  }

  for (let i = 0; i < 100; i++) {
    console.log('hi')
  }
}

// Drop less significant terms
// Run time is O(n + n^2), which is just called O(n^2). Even if it was O(n^2/2 + 100n), it would be O(n^2).
function printAllNumbersThenAllPairSums (number) {
  console.log('these are the numbers:')
  numbers.forEach(number => {
    console.log(number)
  })

  console.log('and these are their sums:')
  numbers.forEach(firstNumber => {
    numbers.forEach(secondNumber => {
      console.log(firstNumber + secondNumber)
    })
  })
}

// worst case scenarios and best case
// Here we might have 100 items in our haystack, but the first item might be the needle, in which case we would return in just 1 iteration of our loop.
// In general this is O(n) runtime. But to be specific, worst case is O(n) and best case is O(1) runtime.
function contains (haystack, needle) {
  // Does the haystack contain the needle?
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true
    }
  }

  return false
}

// SPACE COMPLEXITY (memory cost)
// Sometimes we want to optimize for using less memory instead of (or in addition to) using less time. Talking about memory cost (or "space complexity") is very similar to talking about time cost. We simply look at the total size (relative to the size of the input) of any new variables we're allocating.
// This is O(1) space as we used a fix # of variables
function sayHiNTimes (n) {
  for (let i = 0; i < n; i++) {
    console.log('hi')
  }
}

// This function takes O(n) space (the size of hiArray scales with the size of the input)

function arrayOfHiNTimes (n) {
  const hiArray = []
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi'
  }
  return hiArray
}

// Usually when we talk about space complexity, we're talking about additional space, so we don't include space taken up by the inputs. For example, this function takes constant space even though the input has n items:

function getLargestItem (items) {
  let largest = Number.MAX_VALUE
  items.forEach(item => {
    if (item > largest) {
      largest = item
    }
  })
  return largest
}
