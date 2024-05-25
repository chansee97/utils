# @chansee97/utils

个人的工具函数集合，有点乱，但是贵在适合

## 安装

```sh
npm i @chansee97/utils
```

## 示例

```js
import { isEmpty } from '@chansee97/utils'

isEmpty('') // true
isEmpty(null) // true
isEmpty(undefined) // true
isEmpty(0) // false
isEmpty([]) // true
isEmpty({}) // true
isEmpty('123') // false
isEmpty('  ') // false
isEmpty(123) // false
```
