import { isNumber } from './is'

/**
 * 统一化路径，抹平win与 mac、linux 路径差异
 *
 * @param {string} path 需要统一的路径
 * @returns {string}
 * @example
 * ```
 * // Output: 'C:/Users/John/Documents/file.txt'
 * normalizePath(“C:\\Users/John/Documents/file.txt”)
 * ```
 */
export function normalizePath(path: string): string {
  return path.replace(/[\\/]/g, '/')
}

/**
 * 统一化存储单位，字节转化为英文缩写`bytes`, `KB`, `MB`, `GB`
 *
 * @param {number} bytes 需要转换的字节大小
 * @returns {string} 转化后的字节字符串
 * @example
 * ```
 * // Output: '1 MB'
 * normalizeSizeUnits(1048576)
 * ```
 */
export function normalizeSizeUnits(bytes: number): string {
  if (bytes === 0)
    return '0 bytes'

  const units = ['bytes', 'KB', 'MB', 'GB']
  const index = Math.floor(Math.log(bytes) / Math.log(1024))
  const size = +(bytes / 1024 ** index).toFixed(2)
  const unit = units[index]

  return `${size} ${unit}`
}

/**
 * 标准化数字，千分位
 *
 * @param {(number | string)} num 原始数字
 * @returns {*} 千分位分割后的字符串
 * @example
 * ```
 * // Output: '999,999,999,999'
 * normalizeNumber(999999999999)
 * ```
 */
export function normalizeNumber(num: number | string) {
  const number = Number(num)
  if (isNumber(number))
    return String(number).replace(/(\d)(?=(\d{3})+$)/g, '$1,')

  return num
}
