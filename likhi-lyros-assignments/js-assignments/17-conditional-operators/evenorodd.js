// conditional/ ternary operators:

//  a condition followed by a ? and 2 expressions each for thruthy and falsy values.
// it is the only operator in js that takes 3 operands.

// syntax: condition ? truthy expression : falsy expression

// Practical Operation: - finding if a number is even or odd

function findEvenOrOdd(number) {
    return number%2 == 0 ? `${number} is even` : `${number} is odd`
}
// here % is a remainder operator, and here checks if the given number is divisible by 2 and returns the number as even or odd.

let value1=findEvenOrOdd(45);
console.log(value1);

let value2=findEvenOrOdd(86);
console.log(value2);