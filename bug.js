function foo(a, b) {
  return a + b;
}

console.log(foo(undefined, 5)); // Output: NaN
console.log(foo(null, 5)); // Output: 5
console.log(foo(undefined, undefined)); //Output: NaN