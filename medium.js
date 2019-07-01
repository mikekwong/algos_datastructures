// function changeEnough (arr, amountDue) {
//   const quarter = 0.25
//   const dime = 0.1
//   const nickel = 0.05
//   const penny = 0.01
//   const totalFromArr =
//     quarter * arr[0] + dime * arr[1] + nickel * arr[2] + penny * arr[3]
//   return totalFromArr >= amountDue
// }

const changeEnough = (change, amountDue) => {
  change[0] *= 0.25
  change[1] *= 0.1
  change[2] *= 0.05
  change[3] *= 0.01

  return change.reduce((acc, val) => acc + val, 0) >= amountDue
}

console.log(changeEnough([2, 100, 0, 0], 14.11))
console.log(changeEnough([0, 0, 20, 5], 0.75))
console.log(changeEnough([30, 40, 20, 5], 12.55))

function progressDays (runs) {
  let total = 0
  for (let i = 1; i < runs.length; i++) {
    if (runs[i - 1] < runs[i]) {
      total++
    }
  }
  return total
}

console.log(progressDays([3, 4, 1, 2]))

// function checkEquals (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   for (let i = arr1.length; i--;) {
//     if (arr1[i] !== arr2[i]) {
//       return false
//     }
//   }
//   return true
// }

function checkEquals (arr1, arr2) {
  return arr1.every((item, i) => item === arr2[i])
}

console.log(checkEquals([1, 2], [1, 3]))
console.log(checkEquals([1, 2], [1, 2]))

// check if the input has at least one occurence of all digits (0-9)
function isPandigital (num) {
  let obj = {}
  num = num.toString()
  for (let i = 0; i < num.length; i++) {
    if (obj[num[i]]) {
      obj[num[i]]++
    } else {
      obj[num[i]] = 1
    }
  }
  return Object.keys(obj).length === 10
}

console.log(isPandigital(98140723568910))
console.log(isPandigital(90864523148909))

// check if input as same # of x and os
function XO (str) {
  let newObj = {}
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (newObj[str[i]]) {
      newObj[str[i]]++
    } else {
      newObj[str[i]] = 1
    }
  }
  return newObj['x'] === newObj['o']
}

console.log(XO('xooxx'))

function inBox (arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i].includes('*')) {
      return true
    }
  }
  return false
}
console.log(inBox(['###', '#*#', '###']))
console.log(inBox(['####', '#  #', '#  #', '####']))

function missingNum (arr) {
  const numCollection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  arr = arr.sort()
  for (let i = 0; i < numCollection.length; i++) {
    if (arr.indexOf(numCollection[i]) === -1) {
      return numCollection[i]
    }
  }
}
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))

function capMe (arr) {
  return arr.map(name => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
  })
}
console.log(capMe(['mavis', 'senaida', 'letty']))

function removeDups (arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(removeDups(['John', 'Taylor', 'John']))
console.log(removeDups([1, 0, 1, 0]))

function isBalanced (str) {
  str = str.split('')
  let newObj = {}
  for (let i = 0; i < str.length; i++) {
    if (newObj[str[i]]) {
      newObj[str[i]]++
    } else {
      newObj[str[i]] = 1
    }
  }
  return Object.values(newObj).every(count => count === 1)
}

console.log(isBalanced('{[()]}'))
console.log(isBalanced('{[([)]]}'))

function flatten (arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr.push(...flatten(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(flatten([['a', 'b'], ['c', 'd']]))
