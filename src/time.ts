/**
 * 获取当前时间戳
 *
 * @returns {number}
 */
export const timestamp = () => +Date.now()


/**
 * 将秒数解析成按照天、小时、分钟、秒计算的数值
 *
 * @param {number} second 一段秒数
 * @returns {{ days: any; hours: any; minutes: any; seconds: any; }} 返回的时间数据
 * @example 
 * ```
 * // Output: {"days": 4,"hours": 18,"minutes": 36,"seconds": 39}
 * formatDate(412599)
 * ```
 */
export function formatDate(second: number) {
  const minutes = Math.floor(((second % 86400) % 3600) / 60)
  const seconds = Math.floor(((second % 86400) % 3600) % 60)
  return {
    days: Math.floor(second / 86400),
    hours: Math.floor((second % 86400) / 3600),
    minutes: minutes > 9 ? minutes : '0' + minutes,
    seconds: seconds > 9 ? seconds : '0' + seconds
  }
}

/**
 * 生成当前年份往前推n年的年份列表
 *
 * @template [T=number]
 * @param {number} yearLen 年份跨度，默认10
 * @param {?(year: number) => T} [cb] 回调函数，默认返回年份
 * @returns {(number | T)[]}
 */
export function yearList<T = number>(yearLen: number = 10, cb?: (year: number) => T) {
  return Array.from(
    { length: yearLen },
    (_, i) => cb ? cb(new Date().getFullYear() - i) : new Date().getFullYear() - i
  );
}