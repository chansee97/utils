import { isObject, isPrimitive } from './is'
/**
 * 将对象转换为query。
 *
 * @template {Record<any, any>} T
 * @param {T} object
 * @returns {string}
 * @example
 * ```
 * // Output: `foo=foo&bar=bar`
 * buildQuery({foo: 'foo', bar: 'bar'});
 * ```
 */
export function buildQuery<T extends Record<any, any>>(object: T): string {
  return new URLSearchParams(object).toString()
}

/**
 * 将query恢复为对象。
 *
 * @param {string} query
 * @returns {Record<any, any>}
 */
export function restoreQuery(query: string): Record<any, any> {
  return Object.fromEntries(new URLSearchParams(query))
}

/**
 * 将对象转换为FormData。
 *
 * @template {Record<any, any>} T
 * @param {T} object
 * @returns {FormData}
 */
export function buildFormData<T extends Record<any, any>>(object: T): FormData {
  const formData = new FormData()
  Object.keys(object).forEach((key) => {
    const value = object[key]
    if (Array.isArray(value)) {
      value.forEach((subValue, i) =>
        formData.append(`${key}[${i}]`, subValue),
      )
    }
    else {
      formData.append(key, object[key])
    }
  })
  return formData
}

/**
 * 使用JSON字符串深度克隆对象。
 *
 * @template {Record<any, any>} T
 * @param {T} val
 * @returns {T}
 */
export function jsonClone<T extends Record<any, any>>(val: T): T {
  return JSON.parse(JSON.stringify(val))
}

/**
 * 使用递归深度克隆对象。
 *
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export function deepClone<T>(obj: T): T {
  if (isPrimitive(obj))
    return obj

  if (typeof obj === 'function')
    return obj

  if (Array.isArray(obj))
    return obj.map(item => deepClone(item)) as any

  const newObj: Record<string, any> = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key))
      newObj[key] = deepClone(obj[key])
  }

  return newObj as T
}

/**
 * 深度合并对象。
 *
 * @template {Record<string | symbol | number, any>} X
 * @param {X} initial
 * @param {X} override
 * @returns {X}
 */
export function merge<X extends Record<string | symbol | number, any>>(initial: X, override: X): X {
  if (!initial || !override)
    return initial ?? override ?? {}

  return Object.entries({ ...initial, ...override }).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [key]: (() => {
          if (isObject(initial[key]))
            return merge(initial[key], value)
          return value
        })(),
      }
    },
    {} as X,
  )
}

/**
 * 清除指定的无效键,默认清除值为undefined和null的键
 *
 * @template {Record<any, any>} T
 * @param {T} obj
 * @param {any[]} [keyWords]
 * @returns {T}
 * @example
 * ```
 * // Output: {a:1,d:2}
 * clearInvalidKeys({a:1,b:null,c:undefined,d:2})
 * ```
 */
export function clearInvalidKeys<T extends Record<any, any>>(obj: T, keyWords: any[] = [undefined, null]): T {
  Object.keys(obj).forEach((key: string) => (keyWords.includes(obj[key]) ? delete obj[key] : {}))
  return obj
}
