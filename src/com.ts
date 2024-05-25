
/**
 * 下载二进制数据
 *
 * @param {*} content
 * @param {?string} [name]
 */
export function downloadBlob(content: any, name?: string) {
  if (typeof content == 'undefined') {
    throw new Error('The second parameter content is a must')
  }
  if (!(content instanceof Blob)) {
    content = new Blob([content])
  }
  const link = URL.createObjectURL(content)
  downloadFile(link, name)
}


/**
 * 根据下载链接下载文件
 *
 * @param {string} url
 * @param {?string} [name]
 */
export function downloadFile(url: string, name?: string) {
  const aLink: HTMLAnchorElement = document.createElement('a')
  if (name) {
    aLink.download = name
  }
  aLink.href = url
  aLink.click()
}

/**
 * 复制文本到剪贴板
 *
 * @param {string} content
 * @param {?() => void} resolve
 * @param {?(err: any) => void} err
 */
export function copyText(content: string, resolve?: () => void, err?: (err: any) => void) {
  navigator.clipboard.writeText(content)
    .then(() => {
      resolve && resolve()
    })
    .catch((error) => {
      err && err(error)
    })
}

/**
 * 防抖函数
 *
 * @param {T} func
 * @param {number} wait
 * @param {boolean} [immediate=false]
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean = false,
): (...args: Parameters<T>) => void {
  let timeoutId: number | undefined

  return function debounced(...args: Parameters<T>): void {
    if (timeoutId !== undefined)
      clearTimeout(timeoutId)

    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timeoutId
      timeoutId = window.setTimeout(() => {
        timeoutId = undefined
      }, wait)

      if (callNow)
        func(...args)
    }
    timeoutId = window.setTimeout(() => {
      func(...args)
      timeoutId = undefined
    }, wait)
  }
}


/**
 * 节流函数
 *
 * @param {T} func
 * @param {number} wait
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let isThrottled = false

  return function throttled(...args: Parameters<T>): void {
    if (!isThrottled) {
      func(...args)
      isThrottled = true

      setTimeout(() => {
        isThrottled = false
      }, wait)
    }
  }
}


/**
 * 获取浏览器query参数
 *
 * @param {string} key
 * @returns {*}
 * @example 
 * ```
 * // 假设当前URL为：https://example.com/?name=John&age=25
 * // Output: "John"
 * herfQuery('name')
 * ```
 */
export function herfQuery(key: string) {
  return new URLSearchParams(location.search).get(key)
} 

/**
 * 获取范围内随机数
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function randomInRange(min: number, max: number) { 
  return Math.random() * (max - min) + min;
} 

/**
 * 将rgb颜色转换为16进制
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 * @example 
 * ```
 * // Output: '#201e1e'
 * rgbToHex(32,30,30)
 * ```
 */
export function rgbToHex(r: number, g: number, b: number) { 
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) }`;
} 

/**
 * 获取随机hex格式颜色
 *
 * @returns {string}
 * @example 
 * ```
 * // Output: '#8f34ec'
 * randomHex()
 * ```
 */
export function randomHex() { 
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
} 

/**
 * 异步暂停方法，后续代码延迟执行
 *
 * @param {number} ms
 * @param {?() => void} callback
 * @returns {void) => any}
 */
export function sleep(ms: number, callback?: () => void) {
  return new Promise<void>(resolve =>

    setTimeout(async () => {
      await callback?.()
      resolve()
    }, ms),
  )
}
