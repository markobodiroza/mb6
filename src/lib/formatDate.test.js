import test from 'node:test'
import assert from 'node:assert'
import { formatDate } from './formatDate.js'

test('formatDate standard date', () => {
  assert.strictEqual(formatDate('2023-01-15'), 'January 15, 2023')
})

test('formatDate another standard date', () => {
  assert.strictEqual(formatDate('2024-12-01'), 'December 1, 2024')
})

test('formatDate leap year date', () => {
  assert.strictEqual(formatDate('2024-02-29'), 'February 29, 2024')
})

test('formatDate single digit day', () => {
  assert.strictEqual(formatDate('2023-03-05'), 'March 5, 2023')
})
