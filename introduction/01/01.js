"use strict";
const factorial = (n) => {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
};
// Example usage:
console.log(factorial(3)); // Output: 120