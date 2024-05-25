/**
 * 随机打乱数组
 *
 * @param {any[]} arr
 * @returns {any[]} 返回打乱后的数组
 */
export function shuffle<T>(arr: T[]) {
  return arr.sort(() => Math.random() - 0.5)
}

/**
 * 数组去重
 *
 * @template T
 * @param {readonly T[]} array
 * @returns {T[]} 返回去重后的数组
 * @example
 * ```
 * // Output: [1, 'a', 4, 5]
 * uniqueArray([1, 'a', 'a', 4, 5, 5])
 * ```
 */
export function uniqueArray<T>(array: readonly T[]): T[] {
  if (!Array.isArray(array))
    throw new Error('The first parameter must be an array')

  if (array.length === 1)
    return array

  return Array.from(new Set(array))
}

/**
 * 统计数组中某个元素出现的次数
 *
 * @template T
 * @param {readonly T[]} array
 * @param {T} value
 * @returns {number}
 * @example
 * ```
 * // Output: 3
 * countOccurrences([1, 2, 2, 2, 4, 5, 5], 2)
 * ```
 */
export function countOccurrences<T>(array: readonly T[], value: T) {
  return array.reduce((count, v) => v === value ? count + 1 : count, 0)
}

/**
 * 数组移动元素位置
 *
 * @template T
 * @param {T[]} arr
 * @param {number} from
 * @param {number} to
 * @returns {T[]}
 */
export function move<T>(arr: T[], from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}

/**
 * Description placeholder
 *
 * @template T
 * @param {T[]} arr
 * @param {number} [quantity]
 * @returns {T[]}
 */
export function sample<T>(arr: T[], quantity: number = 1) {
  return Array.from({ length: quantity }, _ => arr[Math.round(Math.random() * (arr.length - 1))])
}

/**
 * 获取两数组对称差集
 *
 * @template T
 * @param {T[]} a
 * @param {T[]} b
 * @returns {T[]}
 */
export function difference<T>(a: T[], b: T[]) {
  const s = new Set(b)
  return a.filter(x => !s.has(x))
}

/**
 * 获取两数组的交集
 *
 * @template T
 * @param {T[]} a
 * @param {T[]} b
 * @returns {T[]}
 */
export function intersection<T>(a: T[], b: T[]) {
  const s = new Set(b)
  return a.filter(i => s.has(i))
}
