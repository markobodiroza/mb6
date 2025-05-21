import { clamp } from './utils.js'; // Adjusted path assuming test file is in the same directory

console.log('Starting tests for utils.js...');

// --- Tests for clamp ---
console.log('\nTesting clamp function...');

// Test case 1: Number within the range
let num1 = 5, min1 = 0, max1 = 10;
let result1 = clamp(num1, min1, max1);
let expected1 = 5;
console.assert(result1 === expected1, `clamp Test Failed: clamp(${num1}, ${min1}, ${max1}), Expected '${expected1}', Got '${result1}'`);
if (result1 === expected1) {
  console.log(`  PASS: clamp(${num1}, ${min1}, ${max1}) === ${expected1}`);
}

// Test case 2: Number below the range
let num2 = -5, min2 = 0, max2 = 10;
let result2 = clamp(num2, min2, max2);
let expected2 = 0;
console.assert(result2 === expected2, `clamp Test Failed: clamp(${num2}, ${min2}, ${max2}), Expected '${expected2}', Got '${result2}'`);
if (result2 === expected2) {
  console.log(`  PASS: clamp(${num2}, ${min2}, ${max2}) === ${expected2}`);
}

// Test case 3: Number above the range
let num3 = 15, min3 = 0, max3 = 10;
let result3 = clamp(num3, min3, max3);
let expected3 = 10;
console.assert(result3 === expected3, `clamp Test Failed: clamp(${num3}, ${min3}, ${max3}), Expected '${expected3}', Got '${result3}'`);
if (result3 === expected3) {
  console.log(`  PASS: clamp(${num3}, ${min3}, ${max3}) === ${expected3}`);
}

// Test case 4: Negative numbers in range
let num4 = -5, min4 = -10, max4 = 0;
let result4 = clamp(num4, min4, max4);
let expected4 = -5;
console.assert(result4 === expected4, `clamp Test Failed: clamp(${num4}, ${min4}, ${max4}), Expected '${expected4}', Got '${result4}'`);
if (result4 === expected4) {
  console.log(`  PASS: clamp(${num4}, ${min4}, ${max4}) === ${expected4}`);
}

// Test case 5: Min and max swapped
let num5 = 5, min5 = 10, max5 = 0;
let result5 = clamp(num5, min5, max5);
let expected5 = 5;
console.assert(result5 === expected5, `clamp Test Failed: clamp(${num5}, ${min5}, ${max5}), Expected '${expected5}', Got '${result5}'`);
if (result5 === expected5) {
  console.log(`  PASS: clamp(${num5}, ${min5}, ${max5}) === ${expected5}`);
}

console.log('\nutils.js tests complete. Check console for any assertion failures.');
console.log('To run these tests, execute: node src/lib/utils.test.js');
