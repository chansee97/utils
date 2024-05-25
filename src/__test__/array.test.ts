import { describe, expect, it } from 'vitest'
import { shuffle, uniqueArray, countOccurrences } from '../array'

it('shuffle', () => {
  expect(shuffle([1, 2, 3, 4, 5])).not.equal([1, 2, 3, 4, 5])
})


it('uniqueArray', () => {
  expect(uniqueArray([1, 2, 3, 4, 5, 5])).toEqual([1, 2, 3, 4, 5])
  expect(uniqueArray([1, 'a', 'a', 4, 5, 5])).toEqual([1, 'a', 4, 5])
  expect(uniqueArray([1, 'a', 'a', null, null, undefined, 5])).toEqual([1, "a", null, undefined, 5,])
  expect(uniqueArray([1, 5, false, true, false])).toEqual([1, 5, false, true])
})

it('countOccurrences', () => {
  expect(countOccurrences([1, 2, 2, 2, 4, 5, 5], 2)).toEqual(3)
  expect(countOccurrences([1, null, null, 2, 4, 5, 5], null)).toEqual(2)
  expect(countOccurrences([1, 'a', 'a', 'a', 2, 4, 5, 5], 'a')).toEqual(3)
})