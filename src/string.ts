/**
 * 将富文本转换为纯文本
 *
 * @param {string} richText
 * @returns {*}
 * @example 
 * ```
 * // Output:"Hello, World!"
 * extractText("<p>Hello, <strong>World!</strong></p>")
 * ```
 */
export function extractText(richText:string) {
  return richText.replace(/<[^<>]+>/g, "").replace(/&nbsp;/gi, "");
}

/**
 * 将字符串首字母转换为大写
 *
 * @param {string} str
 * @returns {*}
 * @example 
 * ```
 * // Output: "Hello"
 * capitalize("hello")
 * ```
 */
export function capitalize(str:string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * 获取字符串byte大小
 * 半角长度为1，全角为3
 *
 * @param {string} str
 * @returns {*}
 * @example 
 * ```
 * // Output: `5`
 * byteSize("12345") * 
 * // Output: `15`
 * byteSize("一二三四五")
 * ```
 */
export function byteSize(str: string) {
  return new Blob([str]).size
}

// port from nanoid
// https://github.com/ai/nanoid
const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

/**
 * 小巧、安全、URL友好、唯一的 JavaScript 字符串ID生成器
 *
 * @param {number} [size=16]
 * @param {string} [dict=urlAlphabet]
 * @returns {string}
 */
export function randomStr(size = 16, dict = urlAlphabet) {
  let id = ''
  let i = size
  const len = dict.length
  while (i--)
    id += dict[(Math.random() * len) | 0]
  return id
}