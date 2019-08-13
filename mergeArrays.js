const myArray = [3, 4, 6, 10, 11, 15]
const alicesArray = [1, 5, 8, 12, 14, 19]

// Time cost (O n log n), where n is the total length of our output array (the sum of the lengths of our inputs).

// function mergeArrays (myArray, alicesArray) {
//   return [...myArray, ...alicesArray].sort((a, b) => a - b)
// }
//
// function mergeArrays (myArray, alicesArray) {
//   const mergedArray = []

//   let currentIndexAlices = 0
//   let currentIndexMine = 0
//   let currentIndexMerged = 0

//   while (currentIndexMerged < myArray.length + alicesArray.length) {
//     const firstUnmergedAlices = alicesArray[currentIndexAlices]
//     const firstUnmergedMine = myArray[currentIndexMine]

//     // Case: next comes from my array
//     if (firstUnmergedMine < firstUnmergedAlices) {
//       mergedArray[currentIndexMerged] = firstUnmergedMine
//       currentIndexMine++
//     } else {
//       mergedArray[currentIndexMerged] = firstUnmergedAlices
//       currentIndexAlices++
//     }
//     currentIndexMerged++
//   }
//   return mergedArray
// }
//
function mergeArrays (myArray, alicesArray) {
  const mergedArray = []

  let headOfMyArray = 0
  let headOfAlicesArray = 0

  while (mergedArray.length !== myArray.length + alicesArray.length) {
    // Case: 0th comes from my array
    if (myArray[headOfMyArray] < alicesArray[headOfAlicesArray]) {
      mergedArray.push(myArray[headOfMyArray])
      headOfMyArray++
      // Case: 0th comes from Alice's array
    } else {
      mergedArray.push(alicesArray[headOfAlicesArray])
      headOfAlicesArray++
    }
  }

  // Eventually we'll want to return the merged array
  return mergedArray
}

console.log(mergeArrays(myArray, alicesArray))

