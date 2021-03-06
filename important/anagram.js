// time complexity - O(n) linear time
// function validAnagram (str1, str2) {
//   if (str1 === str2) {
//     return true
//   }
//   if (str1.length !== str2.length) {
//     return false
//   }

//   let obj1 = {}
//   let obj2 = {}

//   for (let i = 0; i < str1.length; i++) {
//     obj1[str1[i]] = (obj1[str1[i]] || 0) + 1
//   }
//   for (let j = 0; j < str2.length; j++) {
//     obj2[str2[j]] = (obj2[str2[j]] || 0) + 1
//   }
//   for (let key in obj1) {
//     if (!(key in obj2)) {
//       return false
//     }
//     if (obj1[key] !== obj2[key]) {
//       return false
//     }
//   }
//   return true
// }
//
// Check to see if the letters in first word matches letters in second word
function validAnagram (first, second) {
  if (first.length !== second.length) {
    return false
  }
  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists ,increment, otherwise set to 1
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1)
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // cant find letter or letter is zero then its not an anagram
    // e.g. if it encounters an extra letter that 2nd str has that first doesnt (because at that point the value will already be 0), then it'll definitely return false
    if (!lookup[letter]) {
      return false
    } else {
      // if there are duplicate letters in the anagram, then subtract one from the object of respective letter..until eventually all values to the key becomes 0, and then we are done as all values will be 0
      lookup[letter] -= 1
    }
  }
  return true
}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))
