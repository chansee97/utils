import { describe, expect, it } from 'vitest'
import { capitalize, extractText, byteSize } from '../string'


it('extractText', () => {
  expect(extractText("<p>Hello, <em>world</em>!&nbsp;</p>")).equal('Hello, world!')
  expect(extractText('<h1>Title</h1><p>Paragraph</p>')).equal('TitleParagraph')
  expect(extractText('&nbsp;&nbsp;&nbsp;Multiple spaces')).equal('Multiple spaces')
})

it('capitalize', () => {
  expect(capitalize('hello world')).equal('Hello world')
  expect(capitalize('123')).toEqual('123')
  expect(capitalize('你好')).equal('你好')
  expect(capitalize('āÁĂÀ')).toEqual('Āáăà')
  expect(capitalize('\a')).toEqual('A')
})

it('byteSize', () => {
  expect(byteSize('123')).equal(3)
  expect(byteSize('123四五')).equal(9)
  expect(byteSize('一二三四五')).equal(15)
})