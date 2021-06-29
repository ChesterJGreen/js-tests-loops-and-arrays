// 1. Within the factorials function, write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

function factorials(num) {
  let sum = 1
  for (let x = 1; x <= num; x++) {
    sum *= x
  }
  return sum
}

// ------------------------------------------

// 2. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
  let x = 0;
  for (y = n1; y <= n2; y++) {
    x += y

  }
  return x
}

// ------------------------------------------


// 3. Write a function that will take in a starting number, ending number, and a divisor. Iterate
// over the range of the numbers and return how many numbers can be divided by the divisor.
// Example:
// input: 15, 20, 5
// output: 2

function rangeDivisor(start, end, divisor) {
  let total = 0;
  for (let x = start; x <= end; x++) {
    if (x % divisor == 0) { total++ }

  }
  return total
}
