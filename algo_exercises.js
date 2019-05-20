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
