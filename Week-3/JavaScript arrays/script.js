
let numbers = [4, 2, 9, 1, 8];

function divideArray(array) {
  let evenNums = [];
  let oddNums = [];
for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
         evenNums.push(array[i]);
      } else {
         oddNums.push(array[i]);
      }
}
console.log("Even Numbers:");

if (evenNums.length <= 0) {
    console.log("None");
  } else {
    const sortedEvens = evenNums.sort((a, b) => a - b);
    sortedEvens.forEach((n) => console.log(n))
  }
  
  console.log("Odd Numbers:")

  if (oddNums.length <= 0) {
    console.log("None");
  } else {
    const sortedOdds = oddNums.sort((a, b) => a - b);
    sortedOdds.forEach((n) => console.log(n))
  }
}
divideArray(numbers);
  