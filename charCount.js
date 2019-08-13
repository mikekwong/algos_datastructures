// In this case we only care about lowercase numbers
// function charCount (str) {
// make object to return at end
// loop over string, for each character
// ..if char is number/letter AND is a key in object, add one to count
//  iif it is a number/letter AND not in object, add it and set value to 1
//  if char is something else (space, period, etc.) don't do anything
// return object at end
//   let count = {}
//   str.split(' ').join('')
//   for (let char of str) {
//     char = char.toLowerCase()
//       if (count[char]) {
//         count[char]++
//       } else {
//         count[char] = 1
//       }
//   }
//   return count
// }

// function charCount (str) {
//   let obj = {}
//   for (let char of str) {
//     char = char.toLowerCase()
//     if (/[a-z0-9]/.test(char)) {
//       obj[char] = obj[char]++ || 1
//     }
//   }
//   return obj
// }

// function charCount (str) {
//   let obj = {}
//   for (let char of str) {
//     char = char.toLowerCase()
//     if (isAlphaNumeric(char)) {
//       obj[char] = obj[char]++ || 1
//     }
//   }
//   return obj
// }

// slightly faster solution using charCode VS regEx above
// Harder solution to come by to remember code #s
function isAlphaNumeric (char) {
  var code = char.charCodeAt(0)
  if (
    !(code > 47 && code < 58) && // numeric (0 - 9)
    !(code > 64 && code < 91) && // upper alpha (A - Z)
    !(code > 96 && code < 123) // lower alpha (a - z)
  ) {
    return false
  }
  return true
}

console.log(charCount('hello'))
console.log(charCount('Your PIN number is 1234!!'))
