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
