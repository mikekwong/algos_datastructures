// Time complexity = O(2n) = O(n) linear
function countUpAndDown (n) {
  console.log('Going up!')
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
  console.log('At the top!\nGoing down...')
  for (let j = n - 1; j >= 0; j--) {
    console.log(j)
  }
  console.log('Back down. Bye!')
}
console.log(countUpAndDown(4))

// time complexity = O(n^2) quadratic
function printAllPairs (n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}
console.log(printAllPairs(3))

// O(n)
function logAtLeast5 (n) {
  for (let i = 1; i < Math.max(5, n); i++) {
    console.log(i)
  }
}

// O(1)
function logAtLeast5 (n) {
  for (let i = 1; i < Math.min(5, n); i++) {
    console.log(i)
  }
}
