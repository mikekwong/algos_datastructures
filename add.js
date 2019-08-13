// This is slower, because it'll always be O(n) linear time
function addUpTo (n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}
// big O = n (basd on N of general # of steps because of for loop)
console.log(addUpTo(4))

// This is faster, because it'll alwasy be 3 operations, constant time (O(1))
function addUpToNew (n) {
  return n * (n + 1) / 2
}
console.log(addUpToNew(4))
