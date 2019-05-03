// function findLongestWordLength (str) {
//   var words = str.split(' ')
//   var maxLength = 0

//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length
//     }
//   }
//   return maxLength
// }
//
function findLongestWordLength (s) {
  return s.split(' ').reduce((x, y) => {
    return Math.max(x, y.length)
  }, 0)
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
)

// function largestOfFour (arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(Math.max(...arr[i]))
//   }
//   return newArr
// }

// More efficient
function largestOfFour (arr) {
  return arr.map(num => Math.max(...num))
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
)

function confirmEnding (str, target) {
  return str.slice(str.length - target.length) === target
}

console.log(confirmEnding('Bastian', 'n'))

// function repeatStringNumTimes (str, num) {
//   let newStr = ''
//   if (num > 0) {
//     for (let i = 0; i < num; i++) {
//       newStr += str
//     }
//   }
//   return newStr
// }
//
function repeatStringNumTimes (str, num) {
  if (num < 0) return ''
  if (num === 1) return str
  else return str + repeatStringNumTimes(str, num - 1)
}

console.log(repeatStringNumTimes('abc', 3))

function truncateString (str, num) {
  let newStr = ''
  if (str.length > num) {
    newStr = str.slice(0, num)
  }
  if (str.length === num || str.length < num) {
    return str
  }
  return (newStr += '...')
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8))

function findElement (arr, func) {
  return (
    arr.filter(num => {
      return func(num) && num
    })[0] || undefined
  )
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0))

// find next positive int that does not occur
function solution (A) {
  var min = 1
  // explicit sort for larger values
  A.sort((a, b) => a - b)

  for (let i in A) {
    if (A[i] > -1 && A[i] === min) {
      min++
    }
  }
  return min
}

console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1, 2, 3]))
console.log(solution([-1, -3]))

// finders keepers
function findElement (arr, func) {
  return arr.filter(func)[0]
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))

function titleCase (str) {
  let convertToArray = str.toLowerCase().split(' ')
  let result = convertToArray.map(val => {
    // get first letter of each index to capitalize using charAt
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
  })
  return result.join(' ')
}

console.log(titleCase("i'm a liTtle teA pot"))
console.log(titleCase('together a liTtle teA pot'))

// copy each element of first array into second array in order
function frankenSplice (arr1, arr2, n) {
  let localArr = arr2.slice()
  for (let i = 0; i < arr1.length; i++) {
    localArr.splice(n, 0, arr1[i])
    n++
  }
  return localArr
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

// falsy bouncer
// return values that aren't falsey
function bouncer (arr) {
  return arr.filter(item => !!item)
}

console.log(bouncer([7, 'ate', '', false, 9]))

function getIndexToIns (arr, num) {
  arr.push(num)
  return arr.sort((a, b) => a - b).indexOf(num)
}

console.log(getIndexToIns([40, 60], 50))

// // Mutations
// function mutation (arr) {
//   var test = arr[1].toLowerCase()
//   var target = arr[0].toLowerCase()
//   for (var i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false
//   }
//   return true
// }
//
// declarative
function mutation (arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(letter => arr[0].toLowerCase().indexOf(letter) !== -1)
}

console.log(mutation(['hello', 'hello']))

function chunkArrayInGroups (arr, size) {
  let newArr = []
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size))
  }
  return newArr
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))
