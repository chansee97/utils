const toString = (v: any) => Object.prototype.toString.call(v)

export const getType = (val: any) => {
  const result = /\s(.*?)\]/.exec(toString(val))
  if (result) {
    return result[1]
  }
  throw new Error('Unable to obtain the type of the incoming parameter')
}

export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'

export const isBool = (val: unknown) => typeof val === 'boolean'
export const isString = (val: unknown) => typeof val === 'string'
export const isNumber = (val: unknown) => typeof val === 'number'
export const isBigInt = (val: any) => typeof val === 'bigint'
export const isSymbol = (val: any) => typeof val === 'symbol'
export const isUndefined = (val: any) => typeof val === 'undefined'
export const isNull = (val: any) => toString(val) === '[object Null]'
export const isArray = Array.isArray
export const isObject = (val: any) => toString(val) === '[object Object]'
export const isRegExp = (val: any) => toString(val) === '[object RegExp]'
export const isDate = (val: any) => toString(val) === '[object Date]'
export const isFunction = (val: any) => toString(val) === '[object Function]'

export const isPrimitive = (value: any): boolean => {
  return (
    value === null ||
    (typeof value !== 'object' && typeof value !== 'function')
  )
}

export const isPromise = (val: any) => {
  if (!val) return false
  if (!val.then) return false
  if (!isFunction(val.then)) return false
  return true
}

export const isWindow = (val: any) => toString(val) === '[object Window]'
export const isBrowser = typeof window !== 'undefined'

export const isInt = (val: any) => isNumber(val) && val % 1 === 0
export const isFloat = (val: any) => isNumber(val) && val % 1 !== 0

export const isEmpty = (val: any) => {
  if (isBool(val)) return true
  if (val === null || val === undefined) return true
  if (isNumber(val)) return val === 0
  if (isDate(val)) return isNaN(val.getTime())
  if (isFunction(val)) return false
  if (isSymbol(val)) return false
  const length = (val as any).length
  if (isNumber(length)) return length === 0
  const size = (val as any).size
  if (isNumber(size)) return size === 0
  const keys = Object.keys(val).length
  return keys === 0
}

export const isEqual = <T>(x: T, y: T) => {
  if (Object.is(x, y)) return true
  if (x instanceof Date && y instanceof Date) {
    return x.getTime() === y.getTime()
  }
  if (x instanceof RegExp && y instanceof RegExp) {
    return x.toString() === y.toString()
  }
  if (
    typeof x !== 'object' ||
    x === null ||
    typeof y !== 'object' ||
    y === null
  ) {
    return false
  }
  const keysX = Reflect.ownKeys(x as unknown as object) as (keyof typeof x)[]
  const keysY = Reflect.ownKeys(y as unknown as object)
  if (keysX.length !== keysY.length) return false
  for (let i = 0; i < keysX.length; i++) {
    if (!Reflect.has(y as unknown as object, keysX[i])) return false
    if (!isEqual(x[keysX[i]], y[keysX[i]])) return false
  }
  return true
}

