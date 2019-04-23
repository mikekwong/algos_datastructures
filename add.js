function addUpTo (n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}
// big O = n (basd on N of general # of steps because of for loop)
console.log(addUpTo(4))

function addUpToNew (n) {
  return n * (n + 1) / 2
}
console.log(addUpToNew(6))
