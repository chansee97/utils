import { describe, expect, it } from 'vitest'
import { rgbToHex } from '../com'

it('rgbToHex', () => {
  expect(rgbToHex(32, 30, 30)).toEqual('#201e1e')
})