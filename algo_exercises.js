function arrayFlattener (arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = [...newArr, ...arr[i]]
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(arrayFlattener([1, [2, 3], 4]))

function zooInventory (arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`${arr[i][0]} the ${arr[i][1][0]} is ${arr[i][1][1]}.`)
  }
  return newArr
}

console.log(
  zooInventory([
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ])
)

function makeGrid (rowWidth, numOfRows) {
  const makeRow = () => {
    const aRow = []

    for (let i = 1; i <= rowWidth; i++) {
      aRow.push(i)
    }
    return aRow
  }

  const grid = []
  for (let i = 0; i < numOfRows; i++) {
    grid.push(makeRow())
  }
  return grid
}
console.log(makeGrid(3, 4))

function removeColumns (arr, numColsRemove) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].slice(0, arr[i].length - numColsRemove))
  }
  return newArr
}

console.log(removeColumns([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]], 2))

function myJoin (array, separator = ',') {
  // create a string value onto which we can concatenate each element from the array
  let joinedString = ''
  // loop through the entire array
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    // unless this is the first element in the array...
    if (i !== 0) {
      // ...add the separator to the joinedString
      joinedString += separator
    }
    // if the current element is neither defined nor null...
    if (element !== undefined && element !== null) {
      // ...add the element to the joinedString
      joinedString += element
    }
  }
  // return the joinedString after the for loop
  return joinedString
}

console.log(myJoin(["let's", 'make', 'a', 'list'], ' '))
console.log(myJoin(['hello', undefined, 'world'], '-'))

function mySlice (arr, startIdx = 0, endIdx = arr.length) {
  let newArr = []
  if (startIdx < 0) startIdx = arr.length + startIdx
  if (endIdx < 0) endIdx = arr.length + endIdx

  for (let i = startIdx; i < endIdx; i++) {
    newArr.push(arr[i])
  }

  return newArr
}

console.log(mySlice([1, 2, 3], 1, 2))
console.log(mySlice([1, 2, 3], -1))

function rotateArray (arr, rotateNum) {
  let front = arr.slice(-rotateNum)
  let end = arr.slice(0, -rotateNum)
  return [...front, ...end]
}

console.log(rotateArray([1, 2, 3, 4, 5], 1))
console.log(rotateArray([1, 2, 3, 4, 5], -1))
console.log(rotateArray([1, 2, 3, 4, 5], 0))

let transactions = [
  {
    name: 'Tons of glitter',
    amount: 70
  },
  {
    name: 'Porcelain Pink Flamingos',
    amount: 92
  },
  {
    name: 'Chandelier replacement',
    amount: 10000
  },
  {
    name: 'Dinner at TGIF x6',
    amount: 250
  }
]

function lastFridayNight (arr) {
  return arr.reduce((prev, accu) => {
    return prev + accu.amount
  }, 0)
}

console.log(lastFridayNight(transactions))

function compareObjects (obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  for (let key in obj2) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

console.log(compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }))

let letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
let leetChars = [
  '@',
  '8',
  '(',
  '|)',
  '3',
  'ph',
  'g',
  '#',
  'l',
  '_|',
  '|<',
  '1',
  "|'|'|",
  '//',
  '0',
  '|D',
  '(,)',
  '|2',
  '5',
  '+',
  '|_|',
  '|/',
  "|/|/'",
  '><',
  'j',
  '2'
]

function leetTranslator (word) {
  let str = ''
  for (let i = 0; i < word.length; i++) {
    let indexedLetter = letters.indexOf(word[i].toLowerCase())
    str += leetChars[indexedLetter]
  }
  return str
}

console.log(leetTranslator('fullstack'))

let animalNoises = [
  {
    dog: {
      America: 'Woof! Woof!',
      Germany: 'Wau Wau!',
      England: 'Bow wow!',
      Uruguay: 'Jua jua!',
      Afrikaans: 'Blaf!',
      Korea: 'Mong mong!',
      Iceland: 'Voff voff!',
      Albania: 'Ham!',
      Algeria: 'Ouaf ouaf!'
    }
  },
  {
    cat: {
      America: 'Meow',
      Germany: 'Miauw!',
      England: 'mew mew',
      Uruguay: 'Miau Miau!',
      Afrikaans: 'Purr',
      Korea: 'Nyaong!',
      Iceland: 'Kurnau!',
      Albania: 'Miau',
      Algeria: 'Miaou!'
    }
  },
  {
    chicken: {
      America: 'Cluck cluck',
      Germany: 'tock tock tock',
      England: 'Cluck Cluck',
      Uruguay: 'gut gut gdak',
      Afrikaans: 'kukeleku',
      Korea: 'ko-ko-ko',
      Iceland: 'Chuck-chuck!',
      Albania: 'Kotkot',
      Algeria: 'Cotcotcodet'
    }
  }
]

function petSounds (animal, country) {
  let str = ''
  for (let i = 0; i < animalNoises.length; i++) {
    if (animal in animalNoises[i]) {
      str += `${animal[0].toUpperCase() + animal.slice(1)}s in ${country} say ${
        animalNoises[i][animal][country]
      }`
    }
  }
  return str
}

console.log(petSounds('dog', 'Iceland'))

function frequencyAnalysis (str) {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    } else {
      obj[str[i]]++
    }
  }
  return obj
}

console.log(frequencyAnalysis('abca'))

function dogBreeder (name = 'Steve', age = 0) {
  if (typeof name === 'number') {
    age = name
    name = 'Steve'
  }
  return { name: name, age: age }
}

console.log(dogBreeder('Sam', 12))

let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true }
    ]
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true }
    ]
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false }
    ]
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true }
    ]
  }
]

function classCheck (day) {
  let presentStudents = []

  // loop through the students in classRoom
  for (let i = 0; i < classRoom.length; i++) {
    // store each student object in a variable
    let studentObj = classRoom[i]
    // each object has one key, which is the name of the student
    let studentName = Object.keys(studentObj)[0]
    // the only value in studentObj is the array of attendance objects
    let attendanceObjs = studentObj[studentName]
    // loop through the array of attendance objects
    for (let j = 0; j < attendanceObjs.length; j++) {
      // store each attendance object in a variable
      let attendanceObj = attendanceObjs[j]
      // each attendance has one key, which is the name of a day of the week
      let dayName = Object.keys(attendanceObj)[0]
      // if the dayName is the same as the day parameter...
      // ...and the value in the attendanceObj is true...
      if (dayName === day && attendanceObj[dayName]) {
        // ...the student was present on that day!
        presentStudents.push(studentName)
      }
    }
  }

  return presentStudents
}

console.log(classCheck('Monday'))

let addNums = {
  addTen: function (num) {
    return num + 10
  },

  addTwenty: function (num) {
    return num + 20
  },

  someProperty: 'value'
}

const callThemAll = (anObj, value) => {
  const returnedValues = []

  const objectValues = Object.values(anObj)

  for (let i = 0; i < objectValues.length; i++) {
    const currentValue = objectValues[i]

    if (typeof currentValue === 'function') {
      const resultOfFunc = currentValue(value)
      returnedValues.push(resultOfFunc)
    }
  }
  return returnedValues
}

console.log(callThemAll(addNums, 100)) // => [110, 120]

// const mySplice = (anArr, startIdx, deleteCount, ...args) => {
//   // store the beginning of the array
//   const startElements = []
//   // store the deleted elements
//   const deletedElements = []
//   // take everything from before the startIdx and store it in the StartElements array
//   for (let i = 0; i < startIdx; i++) {
//     startElements.push(anArr.shift())
//   }
//   // Then delete everything by removing an element per deletecount from the new start of the array
//   for (let i = 0; i < deleteCount; i++) {
//     deletedElements.push(anArr.shift())
//   }
//   // anArr.unshift(spliceArg)
//   // insert the added elements into the array
//   for (let i = args.length - 1; i >= 0; i--) {
//     const currentArg = args[i]
//     anArr.unshift(currentArg)
//   }
//   // reattach the beginnig elements onto the array
//   for (let i = startElements.length - 1; i >= 0; i--) {
//     const currentStartElement = startElements[i]
//     anArr.unshift(currentStartElement)
//   }
//   // Return the deleted elements
//   return deletedElements
// }

// alternative
function mySplice (array, startIdx, deleteCount, newValue) {
  let removedElements = []
  let keptElements = []

  // Keep all the elements before the start Idx
  for (let i = 0; i < startIdx; i++) {
    let element = array[i]
    keptElements.push(element)
  }
  // Now we'are at the startIdx; add the newValue to the keptElements array
  if (newValue !== undefined) {
    keptElements.push(newValue)
  }
  // Add the correct number of elements to remove to the removedElements array
  for (let i = startIdx; i < startIdx + deleteCount; i++) {
    let element = array[i]
    removedElements.push(element)
  }
  // add the remaining elements to the keptElements array
  for (let i = startIdx + deleteCount; i < array.length; i++) {
    let element = array[i]
    keptElements.push(element)
  }
  // Remove all elements from the original array
  while (array.length) {
    array.pop()
  }
  // push only those element to keep back into the array
  for (let i = 0; i < keptElements.length; i++) {
    let element = keptElements[i]
    array.push(element)
  }
  return removedElements
}

let myArray = [1, 2, 3]

mySplice(myArray, 1, 1, 'apples') // => [2]

console.log(myArray) // [1,'apples', 3]

function reverseArray (arr) {
  const newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
    arr.pop()
  }
  for (let i = 0; i < newArr.length; i++) {
    arr.push(newArr[i])
  }
  return arr
}

// alternative
// function reverseArray(array) {
//   let originalElements = [];

//   // pop all of the elements from the original array, and store them in a new array
//   while (array.length) {
//     originalElements.push(array.pop());
//   }

//   // pop all of the elements out of new array, unshift them back into the original array
//   while (originalElements.length) {
//     array.unshift(originalElements.pop())
//   }

//   return array;
// }
console.log(reverseArray([1, 2, 3, 4]))

// Copy a 2d array
function deeperCopy (arr) {
  let arrCopy = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let nestedCopy = []
      for (let j = 0; j < arr[i].length; j++) {
        nestedCopy.push(arr[i][j])
      }
      arrCopy.push(arr[i], nestedCopy)
    }
  }
  return arrCopy
}
// alternative
// function deeperCopy (originalArray) {
//   let copy = []

//   for (let i = 0; i < originalArray.length; i++) {
//     let element = originalArray[i]
//     // if the current element is another array...
//     if (Array.isArray(element)) {
//       // ...create a new array into which we can copy the elements of the inner array
//       let nestedCopy = []
//       for (let j = 0; j < element.length; j++) {
//         let innerElement = element[j]
//         nestedCopy.push(innerElement)
//       }
//       // push the copy of the inner array into the copy
//       copy.push(nestedCopy)
//       // otherwise, just push the element into the copy
//     } else {
//       copy.push(element)
//     }
//   }
//   return copy
// }

let myArr = [1, [2, 3]]

let copy = deeperCopy(myArr)
copy[1].push(4)

console.log(myArr) // [1, [2, 3]]

let copy2 = myArr.slice()
copy2[1].push(4)

console.log(myArr) // [1, [2, 3, 4]]

function finderFunction (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return i
    }
  }
  return -1
}

let numbers = [1, 3, 5, 64, 7, 12]
let odds = [9, 13, 15, 17]

function isEven (num) {
  return !(num % 2)
}

console.log(finderFunction(numbers, isEven)) // 3
console.log(finderFunction(odds, isEven)) // -1

// Recursion
function countVowels (str) {
  let vowels = [...'aeiou']
  let total = 0
  if (str.length === 0) {
    return 0
  }
  if (vowels.includes(str[0])) {
    total++
  }
  total += countVowels(str.slice(1))
  return total
}

console.log(countVowels('Four score and seven years')) // => 9)

function reversedArray (arr) {
  // base case: if the array has a length of 1, the reverse of the array is the array itself
  if (arr.length === 1) return arr

  const lastElement = arr[arr.length - 1]
  // Keep concatenating the last element with the recursion being sliced, concat makes a shallow copy
  return [lastElement].concat(reversedArray(arr.slice(0, -1)))
}
console.log(reversedArray([1, 2, 3]))

function sumDigits (num) {
  // coerce the number to a string
  let numString = String(num)
  // base case: if string length === 1, there's only 1 digit
  if (numString.length === 1) {
    return num
  }
  // recursive case: must make the number of digits in the number closer to 1
  let sum = 0
  // add the numeric value of the first character in numString to the sum
  sum += Number(numString[0])
  // add the sum of the remaining digits in the string
  // have coerce the string back into a number, since sumDigits accepts a number
  sum += sumDigits(Number(numString.slice(1)))
  return sum
}

console.log(sumDigits(1234))

// Recrusive version of palindrome
function isPalindrome (word) {
  word = word.toLowerCase()
  if (word.length <= 1) {
    return true
  }
  while (word[0] === word[word.length - 1]) {
    return isPalindrome(word.slice(1, -1))
  }
  return false
}

console.log(isPalindrome('Tacocat')) // => true
console.log(isPalindrome('SELFLESS')) // => false
