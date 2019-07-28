// mutate original array to reverse array
// Complexity = O(n) time and O(1) space
function reverse (arrayOfChars) {
  let leftIdx = 0
  let rightIdx = arrayOfChars.length - 1

  while (leftIdx < rightIdx) {
    // Swap Chars
    const temp = arrayOfChars[leftIdx]
    arrayOfChars[leftIdx] = arrayOfChars[rightIdx]
    arrayOfChars[rightIdx] = temp

    // move towards middle
    leftIdx++
    rightIdx--
  }
  return arrayOfChars
}
console.log(reverse(['a', 'b', 'c', 'd', 'e']))
