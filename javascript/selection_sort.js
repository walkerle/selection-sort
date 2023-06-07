function selectionSort(arr) {
  // type your code here
  // console.log('arr', arr)

  // FIRST SOLUTION
  // arr.forEach(element => {
  //   arr.sort((a, b) => a - b)
  // })

  // console.log('sortedArr', arr)

  // return arr


  // ALTERNATE SOLUTION
  const newArr = []

  while(arr.length > 0) { // LOOP!!
    let minNum = Math.min(...arr); // find min number
    // console.log(minNum);

    let index = arr.indexOf(minNum); // find index of min number
    // console.log(index);

    arr.splice(index, 1); // remove number from original array
    // console.log('newArr', arr);

    newArr.push(minNum); // add minNum to newArr
    // console.log('newArr', newArr);
  }

  return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Find min value of array, remove index from array and replace to from of index?  What would the loop do?
// min? slice
// slice => NON-DESTRUCTIVE
// .sort()

// ALTERNATE SOLUTION
// Create new sorted array
// loop => while loop on original array
// Math.min() => find min number
// .push => add to new sorted array
// find index of min number
// .splice => DESTRUCTIVE remove from original array