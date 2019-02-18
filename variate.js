let [, , third] = ['foo', 'bar', 'baz']
let [q, , w] = [1, 2, 3]
let [head, ...tail] = [1, 2, 3, 4, 5]
let [x, y, ...z] = ['a', , 234.3, 2, 4, 5]

let [e, r] = [1, 2, 3]
let [a, [b, t], d] = [1, [2, 3], 4]
let [i, o, u] = new Set(['a', 'b', 'c'])

let [foo = true] = []
//默认值
let [g, s = '1'] = ['a']
let [h, f = '1'] = ['a', undefined]

let { foe: baz } = { foe: 'aaa', bar: 'bbb' }
let obj = { p: ['hello', { z: 'world' }] }
let {
  p,
  p: [c, { v }]
} = obj

function example() {
  return [1, 2, 3]
}
let [n, m, l] = example()
function exampley() {
  return { aijiao: 1, aijian: 2 }
}
let { aijiao, aijian } = exampley()

let jsonDate = {
  id: 42,
  status: 'ok',
  data: [24785398475]
}
let { id, status, data: number } = jsonDate

//set default
aiax = function(
  url,
  {
    async = true,
    beforeSend = function() {},
    cache = true,
    complete = function() {},
    crossDomain = false,
    global = true
  }
) {}

const map = new Map()
map.set('first', 'hello')
map.set('second', 'world')
for (let [key, value] of map) {
  console.log(key + ' is ' + value)
}
//获取健名
for (let [key] in map) {
}
//获取键值
for (let [, value] in map) {
}
//const { SourceMapConsumer, SourceNode } = require('source-map')
console.log(id, status, number)
