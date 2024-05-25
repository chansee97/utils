import { describe, expect, it } from 'vitest'
import * as _ from '../is'

it('getType', () => {
  expect(_.getType(1)).toEqual('Number')
  expect(_.getType('')).toEqual('String')
  expect(_.getType(true)).toEqual('Boolean')
  expect(_.getType(Symbol('a'))).toEqual('Symbol')
  expect(_.getType(BigInt("0x1fffffffffffff"))).toEqual('BigInt')
  expect(_.getType(undefined)).toEqual('Undefined')
  expect(_.getType(null)).toEqual('Null')
  expect(_.getType({})).toEqual('Object')
  expect(_.getType([])).toEqual('Array')
  expect(_.getType(new Date())).toEqual('Date')
  expect(_.getType(/a/g)).toEqual('RegExp')
  expect(_.getType(new Set())).toEqual('Set')
  expect(_.getType(new Map())).toEqual('Map')
  expect(_.getType(function () { })).toEqual('Function')
})

describe('测试所有类型判断', () => {
  it('isBool', () => {
    expect(_.isBool(true)).toEqual(true)
    expect(_.isBool(Boolean(true))).toEqual(true)
    expect(_.isBool(Boolean(false))).toEqual(true)
  })
  it('isString', () => {
    expect(_.isString('')).toEqual(true)
    expect(_.isString(String(1))).toEqual(true)
  })
  it('isNumber', () => {
    expect(_.isNumber(1)).toEqual(true)
    expect(_.isNumber(Number('1'))).toEqual(true)
  })
  it('isBigInt', () => {
    expect(_.isBigInt(BigInt(999999999999999999))).toEqual(true)
    expect(_.isBigInt(999999999999999999)).toEqual(false)
  })
  it('isSymbol', () => {
    expect(_.isSymbol(Symbol('a'))).toEqual(true)
  })
  it('isUndefined', () => {
    expect(_.isUndefined(undefined)).toEqual(true)
  })
  it('isNull', () => {
    expect(_.isNull(null)).toEqual(true)
  })
  it('isArray', () => {
    expect(_.isArray([])).toEqual(true)
  })
  it('isObject', () => {
    expect(_.isObject({})).toEqual(true)
  })
  it('isRegExp', () => {
    expect(_.isRegExp(/a/)).toEqual(true)
    expect(_.isRegExp(new RegExp('a'))).toEqual(true)
  })
  it('isDate', () => {
    expect(_.isDate(new Date())).toEqual(true)
  })
  it('isFunction', () => {
    expect(_.isFunction(function () { })).toEqual(true)
  })
})

it('isPrimitive', () => {
  expect(_.isPrimitive(true)).toEqual(true)
  expect(_.isPrimitive('')).toEqual(true)
  expect(_.isPrimitive(1)).toEqual(true)
  expect(_.isPrimitive(undefined)).toEqual(true)
  expect(_.isPrimitive(null)).toEqual(true)
  expect(_.isPrimitive(BigInt(999999999999999999))).toEqual(true)
  expect(_.isPrimitive(Symbol('a'))).toEqual(true)
  expect(_.isPrimitive([])).toEqual(false)
  expect(_.isPrimitive({})).toEqual(false)
  expect(_.isPrimitive(new Blob())).toEqual(false)
})

it('isPromise', () => {
  expect(_.isPromise(new Promise(() => { }))).toEqual(true)
  expect(_.isPromise(Promise.resolve())).toEqual(true)
})


it('int&float', () => {
  expect(_.isInt(1)).toEqual(true)
  expect(_.isFloat(1)).toEqual(false)
  expect(_.isInt(1.1)).toEqual(false)
  expect(_.isFloat(1.1)).toEqual(true)
  expect(_.isFloat('1.1')).toEqual(false)
  expect(_.isFloat('1.1')).toEqual(false)
})



it('isEmpty', () => {
  expect(_.isEmpty(true)).toEqual(true)
  expect(_.isEmpty(false)).toEqual(true)
  expect(_.isEmpty(undefined)).toEqual(true)
  expect(_.isEmpty(null)).toEqual(true)
  expect(_.isEmpty(0)).toEqual(true)
  expect(_.isEmpty(1)).toEqual(false)
  expect(_.isEmpty(new Date())).toEqual(false)
  expect(_.isEmpty(function () { })).toEqual(false)
  expect(_.isEmpty([])).toEqual(true)
  expect(_.isEmpty([1])).toEqual(false)
  expect(_.isEmpty(new Set())).toEqual(true)
  expect(_.isEmpty(new Set([1]))).toEqual(false)
  expect(_.isEmpty(new Map())).toEqual(true)
  expect(_.isEmpty(new Map([]))).toEqual(true)
  expect(_.isEmpty(new Map([['a',1]]))).toEqual(false)
  expect(_.isEmpty({})).toEqual(true)
  expect(_.isEmpty({ a: 1 })).toEqual(false)
})

it('isEqual', () => {
  expect(_.isEqual(1,1)).toEqual(true)
  expect(_.isEqual(1,2)).toEqual(false)
  expect(_.isEqual('1', '1')).toEqual(true)
  expect(_.isEqual('1', '2')).toEqual(false)
  expect(_.isEqual(true, true)).toEqual(true)
  expect(_.isEqual(true, false)).toEqual(false)
  expect(_.isEqual(null, null)).toEqual(true)
  expect(_.isEqual(undefined, undefined)).toEqual(true)
  expect(_.isEqual(null, undefined)).toEqual(false)
  expect(_.isEqual([], [])).toEqual(true)
  expect(_.isEqual([1], [1])).toEqual(true)
  expect(_.isEqual([1], [2])).toEqual(false)
  expect(_.isEqual({}, {})).toEqual(true)
  expect(_.isEqual({ a: 1 }, { a: 1 })).toEqual(true)
  expect(_.isEqual({ a: 1 }, { a: 2 })).toEqual(false)
  expect(_.isEqual(new Date(), new Date())).toEqual(true)
  expect(_.isEqual(new Date(1), new Date(1))).toEqual(true)
  expect(_.isEqual(new Date(1), new Date(2))).toEqual(false)
})