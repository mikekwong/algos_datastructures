// time complexity - O(n) linear time

function validAnagram (str1, str2) {
  if (str1 === str2) {
    return true
  }
  if (str1.length !== str2.length) {
    return false
  }

  let obj1 = {}
  let obj2 = {}

  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1
  }
  for (let j = 0; j < str2.length; j++) {
    obj2[str2[j]] = (obj2[str2[j]] || 0) + 1
  }
  for (let key in obj1) {
    if (!(key in obj2)) {
      return false
    }
    if (obj1[key] !== obj2[key]) {
      return false
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
