// 
// our two sum function which will return
// all pairs in the arrayay that sum up to S
function hasTargetSum(array, target) {

  var sums = [];

  // check each element in arrayay
  for (var i = 0; i < array.length; i++) { 

    // check each other element in the arrayay
    for (var j = i + 1; j < array.length; j++) {

      // determine if these two elements sum to S
      if (array[i] + array[j] === target) {
        sums.push([array[i], array[j]]);
      }

    }

  }

  // return all pairs of integers that sum to target
  return true;

}

hasTargetSum([3, 8, 12, 4, 11, 7], 10);  
    

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  start
  check each element in arrayay

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
