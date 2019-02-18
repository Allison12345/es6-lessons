const m = new Map()
const o = { p: 'Hello World' }

m.set(o, 'content')
m.get(o)

m.has(o)
m.delete(o)
m.has(o)

const map = new Map([['name', '张三'], ['title', 'Author']])
map.size
map.has('name')
map.get('name')
map.has('title')
map.get('title')

const items = [['name', '张三'], ['title', 'Author']]
const map1 = new Map()
items.forEach(([key, value]) => map1.set(key, value))
console.log(map1.size)

const set = new Set([['foo', 1], ['bar', 2]])
const m1 = new Map(set)
console.log(m1.get('foo'))

const m2 = new Map([['baz', 3]])
const m3 = new Map(m2)
console.log(m3.get('baz'))

const map2 = new Map()
map2.set(['aaa'], 'aaa').set(1, 'bbb')
console.log(map2.get(1))

const map3 = new Map()

map3.set(['a'], 555)
console.log(map3.get(['a']))

const map4 = new Map()

const k1 = ['a']
const k2 = ['a']

map4.set(k1, 111).set(k2, 222)

map4.get(k1) // 111
map4.get(k2)

const map7 = new Map()
map7.set('foo', true)
map7.set('bar', false)

console.log(map7.size)

let map8 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c')
console.log(map8)

const m4 = new Map()
const hello = function() {
  console.log('hello world')
}
m4.set(hello, 'hello es6')
console.log(m4.get(hello))

const map9 = new Map([['F', 'no'], ['T', 'yes']])

for (let key of map9.keys()) {
  console.log(key)
}

for (let value of map9.values()) {
  console.log(value)
}

for (let item of map9.entries()) {
  console.log(item[0], item[1])
}

for (let [key, value] of map9.entries()) {
  console.log(key, value)
}

for (let [key, value] of map9) {
  console.log(key, value)
}

const reporter = {
  report: function(key, value) {
    console.log('Key: %s, Value: %s', key, value)
  }
}
map.forEach(function(value, key, map) {
  this.report(key, value)
}, reporter)

const myMap = new Map().set(true, 7).set({ foo: 3 }, ['abc'])

console.log([...myMap])

function strMapToObj(strMap) {
  let obj = Object.create(null)
  for (let [k, v] of strMap) {
    obj[k] = v
  }
  return obj
}
const myMap1 = new Map()
  .set('yes', true)
  .set('no', false);
console.log(strMapToObj(myMap1))

function objToStrMap(obj){
  let strMap = new Map()
  for(let k of Object.keys(obj)){
    strMap.set(k,obj[k])
  }
  return strMap
}

console.log(objToStrMap({yes: true, no: false}))

function strMapToJson(strMap){
  return JSON.stringify(strMapToObj(strMap))
}

let myMap2 = new Map().set('yes', true).set('no', false);
console.log(strMapToJson(myMap2))

function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}

let myMap3 = new Map().set(true, 7).set({foo: 3}, ['abc']);
console.log(mapToArrayJson(myMap3))

function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr))
}
console.log(jsonToStrMap('{"yes": true, "no": false}'))

function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

console.log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'))