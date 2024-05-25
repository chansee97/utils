import { describe, expect, it } from 'vitest'
import { buildQuery, restoreQuery, merge, clearInvalidKeys } from '../object'

it('buildQuery', () => {
  expect(buildQuery({ 0: '0', 1: '1' })).equal('0=0&1=1')
  expect(buildQuery({ 姓名: "张三" })).equal('%E5%A7%93%E5%90%8D=%E5%BC%A0%E4%B8%89')
})

it('restoreQuery', () => {
  expect(restoreQuery('a=1&b=2')).toEqual({ a: '1', b: '2' })
  expect(restoreQuery('0=0&1=1')).toEqual({ 0: '0', 1: '1' })
  expect(restoreQuery('%E5%A7%93%E5%90%8D=%E5%BC%A0%E4%B8%89')).toEqual({ 姓名: "张三" })
})
it('merge', () => {
  expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
  expect(merge({ a: 1 }, { b: 2 })).not.toEqual({ a: '1', b: 2 })
  expect(merge({ a: 1, b: 3 }, { b: 2 })).toEqual({ a: 1, b: 2 })
  expect(merge({ a: 1, b: 3, c: { c1: 1, c2: 2 } }, { b: 2, c: { c1: 1, c2: 4 } }))
    .toEqual({ a: 1, b: 2, c: { c1: 1, c2: 4 } })
})

it('clearInvalidKeys', () => {
  expect(clearInvalidKeys({ a: 1, b: null, c: undefined, d: 2 })).toEqual({ a: 1, d: 2 })
  expect(clearInvalidKeys({ a: 1, b: 2, c: 3 }, [3])).toEqual({ a: 1, b: 2 })
})