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
