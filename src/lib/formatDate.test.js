import { formatDate, formatMonthYear } from './formatDate.js';

console.log('Starting tests for formatDate.js...');

// --- Tests for formatDate ---
console.log('\nTesting formatDate function...');

// Test case 1: Standard date
let testDate1 = '2023-01-15';
let result1 = formatDate(testDate1);
let expected1 = 'January 15, 2023';
console.assert(result1 === expected1, `formatDate Test Failed: Input '${testDate1}', Expected '${expected1}', Got '${result1}'`);
if (result1 === expected1) {
  console.log(`  PASS: formatDate('${testDate1}') === '${expected1}'`);
}

// Test case 2: Another standard date (different month/year)
let testDate2 = '2024-12-01';
let result2 = formatDate(testDate2);
let expected2 = 'December 1, 2024';
console.assert(result2 === expected2, `formatDate Test Failed: Input '${testDate2}', Expected '${expected2}', Got '${result2}'`);
if (result2 === expected2) {
  console.log(`  PASS: formatDate('${testDate2}') === '${expected2}'`);
}

// Test case 3: Leap year date (February 29)
let testDate3 = '2024-02-29';
let result3 = formatDate(testDate3);
let expected3 = 'February 29, 2024';
console.assert(result3 === expected3, `formatDate Test Failed: Input '${testDate3}', Expected '${expected3}', Got '${result3}'`);
if (result3 === expected3) {
  console.log(`  PASS: formatDate('${testDate3}') === '${expected3}'`);
}

// Test case 4: Short month name, single digit day
let testDate4 = '2023-03-05';
let result4 = formatDate(testDate4);
let expected4 = 'March 5, 2023';
console.assert(result4 === expected4, `formatDate Test Failed: Input '${testDate4}', Expected '${expected4}', Got '${result4}'`);
if (result4 === expected4) {
  console.log(`  PASS: formatDate('${testDate4}') === '${expected4}'`);
}


// --- Tests for formatMonthYear ---
console.log('\nTesting formatMonthYear function...');

// Test case 1: Standard date
let testDateMY1 = '2023-07-20';
let resultMY1 = formatMonthYear(testDateMY1);
let expectedMY1 = 'July 2023';
console.assert(resultMY1 === expectedMY1, `formatMonthYear Test Failed: Input '${testDateMY1}', Expected '${expectedMY1}', Got '${resultMY1}'`);
if (resultMY1 === expectedMY1) {
  console.log(`  PASS: formatMonthYear('${testDateMY1}') === '${expectedMY1}'`);
}

// Test case 2: Another standard date (different month/year)
let testDateMY2 = '2022-02-05';
let resultMY2 = formatMonthYear(testDateMY2);
let expectedMY2 = 'February 2022';
console.assert(resultMY2 === expectedMY2, `formatMonthYear Test Failed: Input '${testDateMY2}', Expected '${expectedMY2}', Got '${resultMY2}'`);
if (resultMY2 === expectedMY2) {
  console.log(`  PASS: formatMonthYear('${testDateMY2}') === '${expectedMY2}'`);
}

// Test case 3: December
let testDateMY3 = '2025-12-31';
let resultMY3 = formatMonthYear(testDateMY3);
let expectedMY3 = 'December 2025';
console.assert(resultMY3 === expectedMY3, `formatMonthYear Test Failed: Input '${testDateMY3}', Expected '${expectedMY3}', Got '${resultMY3}'`);
if (resultMY3 === expectedMY3) {
  console.log(`  PASS: formatMonthYear('${testDateMY3}') === '${expectedMY3}'`);
}

console.log('\nformatDate.js tests complete. Check console for any assertion failures.');
console.log('To run these tests, execute: node src/lib/formatDate.test.js');
