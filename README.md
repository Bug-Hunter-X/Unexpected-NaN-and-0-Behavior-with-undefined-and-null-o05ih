# Unexpected NaN and 0 Behavior with undefined and null in JavaScript

This repository demonstrates an often overlooked quirk in JavaScript's handling of `undefined` and `null` values within function parameters. When a function receives `undefined` as an argument and it's involved in a mathematical operation, the result becomes `NaN`.  However, `null` is treated as 0 in such situations.

The `bug.js` file showcases this behavior. The `bugSolution.js` file provides a solution using optional chaining and nullish coalescing to handle these cases more robustly.