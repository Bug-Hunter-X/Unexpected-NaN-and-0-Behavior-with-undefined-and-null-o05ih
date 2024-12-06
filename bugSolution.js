function foo(a, b) {
  // Use optional chaining and nullish coalescing to handle undefined and null values
  const aVal = a ?? 0; 
  const bVal = b ?? 0; // Use 0 as default if a or b are null or undefined
  return aVal + bVal;
}

console.log(foo(undefined, 5)); // Output: 5
console.log(foo(null, 5)); // Output: 5
console.log(foo(undefined, undefined)); // Output: 0