import test from 'node:test'
import assert from 'node:assert'
import { clamp } from './utils.js'

test('clamp returns number within the range', () => {
  assert.strictEqual(clamp(5, 0, 10), 5)
})

test('clamp returns min when number is below range', () => {
  assert.strictEqual(clamp(-5, 0, 10), 0)
})

test('clamp returns max when number is above range', () => {
  assert.strictEqual(clamp(15, 0, 10), 10)
})

test('clamp handles negative range', () => {
  assert.strictEqual(clamp(-5, -10, 0), -5)
})

test('clamp works when min and max are swapped', () => {
  assert.strictEqual(clamp(5, 10, 0), 5)
})
