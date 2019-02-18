console.log(Object.is('foo', 'foo'))

Object.is(+0, -0)
Object.is(NaN, NaN)
Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === y / 1
    }
    return x !== x && y !== y
  },
  configurable: true,
  enumerable: false,
  writable: true
})

const target = { a: 1 }
const source1 = { b: 2 }
const source2 = { c: 3 }

Object.assign(target, source1, source2)
console.log(target)

const obj = { a: 1 }
Object.assign(obj) === obj

typeof Object.assign(2)
Object.assign(obj, undefined) === obj
Object.assign(obj, null) === obj

const v1 = 'abc'
const v2 = true
const v3 = 10
const obj1 = Object.assign({}, v1, v2, v3)
console.log(obj)

Object.defineProperty({}, 'invisible', {
  enumerable: false,
  value: 'hello'
})
Object.assign({ b: 'c' })

Object.assign(Object.assign([1, 2, 3], [4, 5]))

const source = {
  get foo() {
    return 1
  }
}
const target1 = {}
Object.assign(target1, source)

class Point {
  constructor(x, y) {
    Object.assign(this, x, y)
  }
}

function clone(origin) {
  return Object.assign({}, origin)
}

function clone1(origin) {
  let orignProto = Object.getPrototypeOf(origin)
  return Object.assign(Object.create(orignProto), origin)
}
const merge = (target, ...source) => Object.assign(target, ...source)

const Defaults = {
  logLevel: 0,
  outputFormat: 'html'
}
function processContent(options) {
  options = Object.assign({}, Defaults, options)
  console.log(options)
}
processContent({ logLevel: 33 })

const obj4 = {
  foo: 123,
  get bar() {
    return 'abc'
  }
}
console.log(Object.getOwnPropertyDescriptors(obj4))

function getOwnPropertyDescriptors(obj) {
  const result = {}
  for (let key of Reflect.ownKeys(obj)) {
    result[key] = Object.getOwnPropertyDescriptor(obj)
  }
  return result
}
const source3 = {
  set foo(value) {
    console.log(value)
  }
}

const target3 = {}
Object.assign(target1, source3)
console.log(Object.getOwnPropertyDescriptor(target3, 'foo'))

const source5 = {
  set foo(value) {
    console.log(value)
  }
}

const target5 = {}
Object.defineProperties(target5, Object.getOwnPropertyDescriptors(source5))
console.log(Object.getOwnPropertyDescriptor(target5, 'foo'))

const shallowMerge = (targe, source) =>
  Object.defineProperties(target, Object.getOwnPropertyDescriptor(source))

const clone2 = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)
const shallowClone = obj =>
  Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  )

Object.defineProperty(Object.prototype, '_proto_', {
  get() {
    let _thisObj = Object(this)
    return Object.getPrototypeOf(_thisObj)
  },
  set(proto) {
    if (this === undefined || this === null) {
      throw new TypeError()
    }
    if (!isObject(this)) {
      return undefined
    }
    if (isObject(proto)) {
      return undefined
    }
    let status = Reflect.setPrototypeOf(this, proto)
    if (!status) {
      throw new TypeError()
    }
  }
})
function isObject(value) {
  return Object(value) === value
}

let proto = {}
let obj6 = { x: 10 }
Object.setPrototypeOf(obj6, proto)

function setPrototypeOf(obj, proto) {
  obj._proto_ = proto
  return obj
}
proto.y = 20
proto.z = 40
console.log(obj6.x)
console.log(obj6.z)

console.log(Object.setPrototypeOf(1, {}))
console.log(Object.setPrototypeOf('true', {}))
console.log(Object.setPrototypeOf('foo', {}))

function Rectangle() {}

const rec = new Rectangle()
Object.getPrototypeOf(rec) === Rectangle.prototype //true
Object.setPrototypeOf(rec, Object.prototype)
Object.getPrototypeOf(rec) === Rectangle.prototype //false

console.log(Object.getPrototypeOf(1))
console.log(Object.getPrototypeOf('foo'))
console.log(Object.getPrototypeOf(true))

Object.getPrototypeOf(1) === Number.prototype
Object.getPrototypeOf('foo ') === String.prototype
Object.getPrototypeOf(true) === Boolean.prototype

var obj7 = { foo: 'bar', baz: 42 }
console.log(Object.keys(obj7))

let { keys, values, entries } = Object
let obj8 = { a: 1, b: 2, c: 3 }
for (let key of keys(obj8)) {
  console.log(key)
}
for (let value of values(obj8)) {
  console.log(value)
}
for (let [key, value] of entries(obj8)) {
  console.log([key, value])
}

var item = Math.floor(Math.random() * 1000)
console.log(item)

console.log(Object.values(obj8))
const obj9 = { 100: 'a', 2: 'b', 7: 'c' }
console.log(obj9)

const obj10 = Object.create(
  {},
  {
    p: {
      value: 42,
      enumerable: true
    }
  }
)
console.log(obj10)
console.log(Object.values('foo'))

console.log(Object.entries(obj8))
let obj11 ={one:1,two:2}
for(let [k,v ] of Object.entries(obj11)){
  console.log(
    `${JSON.stringify(k)} :${JSON.stringify(v)}`
  )
}

const obj12 = {foo:'baz',bar :'42'}
const map = new Map(Object.entries(obj12))
console.log(map)

function*entries1(obj){
  for(let key of Object.keys(obj)){
    yield [key,obj[key]]
  }
}
function entries2(obj){
  let arr = []
  for (let key of Object.keys(obj)){
    arr.push([key,obj[key]])
  }
  return arr
}

