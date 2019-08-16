// using multiple pointers
// if 2 values from array that average to val return true else return false
// Time O(n)
// Space O(1)
function averagePair (arr, val) {
  arr.sort((a, b) => a - b)
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === val) return true
    else if (avg < val) start++
    else end--
  }
  return false
}

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([], 4))

// multiple pointers
// Time O(n + m)... or O(n)
// Space O(1)
// function that takes two strings and checks whether the chars in the first string form a subsequence of chars in second string..should check if chars in first string appear somewhere in second str without their order changing
function isSubsequence (str1, str2) {
  let i = 0
  let j = 0
  if (!str1) return true
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++
    if (i === str1.length) return true
    j++
  }
  return false
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))

// recursive
// not O(1)
function isSubSequence (str1, str2) {
  if (str1.length === 0) return true
  if (str2.length === 0) return false
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubSequence(str1, str2.slice(1))
}
