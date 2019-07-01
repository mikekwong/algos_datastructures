// Find if all bigrams exist
// function canFind (bigrams, words) {
//   const newObj = {}
//   for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < bigrams.length; j++) {
//       if (words[i].includes(bigrams[j])) {
//         newObj[bigrams[j]] = 1
//       }
//     }
//   }
//   return Object.keys(newObj).length === bigrams.length
// }

// clever approach
function canFind (bigrams, words) {
  return bigrams.every(x => words.some(y => y.includes(x)))
}

console.log(canFind(['at', 'be', 'th', 'au'], ['beautiful', 'the', 'hat']))
console.log(
  canFind(['ay', 'be', 'ta', 'cu'], ['maybe', 'beta', 'abet', 'course'])
)

function translatePigLatin (str) {
  // Create variables to be used
  var pigLatin = ''
  var regex = /[aeiou]/gi
  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way'
  } else if (!str.match(regex)) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay'
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0])
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.slice(vowelIndice) + str.slice(0, vowelIndice) + 'ay'
  }
  return pigLatin
}

console.log(translatePigLatin('glove'))
console.log(translatePigLatin('california'))

function myReplace (str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before)
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1)
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after)

  return str
}

console.log(
  myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
)
console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'))

function fearNotLetter (str) {
  const ALPHA = 'abcdefghijklmnopqrstuvwxyz'
  let firstIndex = ALPHA.indexOf(str[0])
  let lastIndex = ALPHA.indexOf(str[str.length - 1])
  let sequenceMatch = ALPHA.slice(firstIndex, lastIndex + 1)
  return (
    [...sequenceMatch]
      .filter(letter => {
        return str.indexOf(letter) === -1 && letter
      })
      .join('') || undefined
  )
}

console.log(fearNotLetter('abce')) // d
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz')) // undefined

function uniteUnique (arr) {
  const combinedArr = Array.from(arguments)
  const newArr = []
  for (let i = 0; i < combinedArr.length; i++) {
    for (let j = 0; j < combinedArr[i].length; j++) {
      if (!newArr.includes(combinedArr[i][j])) {
        newArr.push(combinedArr[i][j])
      }
    }
  }
  return newArr
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

var addToArrayForm = function (A, K) {
  // convert A to a number, sum to K, then conver to string again
  let total = Number(A.join('')) + K + ''
  // convert total to an array, map through each number to conver them into an array of nums
  return total.split('').map(num => Number(num))
}
console.log(addToArrayForm([2, 1, 5], 806))


