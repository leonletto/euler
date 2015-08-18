//6 - Sum Square Differences
// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sumOfSquares = 0;
var squareOfSums = 0;
var howManyNumbers = 100

for (var x = 1;x<=howManyNumbers;x++){
	sumOfSquares = sumOfSquares + x*x;
}

for (var y = 1;y<=howManyNumbers;y++){
	squareOfSums = squareOfSums + y;
}

squareOfSums = squareOfSums * squareOfSums;

console.log(squareOfSums-sumOfSquares);





// console.log("total is " + sum);