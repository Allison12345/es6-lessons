const foo = 'bar'
const baz = { foo }
console.log(baz)

function f(x, y) {
  return { x, y }
}

const o = {
  method() {
    return 'helllo'
  }
}
//等同于
const o1 = {
  method: function() {
    return 'hello'
  }
}

const person = {
  name: 'John',
  birth: '2349/02/04',
  hello() {
    console.log('my name is ', this.name)
  }
}

let ms = {}
function getItem(key) {
  return key in ms ? ms[key] : null
}
function setItem(key, value) {
  return (ms[key] = value)
}
function clear() {
  ms = {}
}
module.export = { getItem, setItem, clear }

const cart = {
  _wheels: 4,
  get _wheels() {
    return this._wheels
  },
  set wheels(value) {
    if (value < this._wheels) {
      throw new Error('数值太小')
    }
    this._wheels = value
  }
}

const obj = {
  class() {}
}
//等同于
const obj1 = {
  class: function() {}
}

const obj2 = {
  *m() {
    yield 'hello world'
  }
}

let propKey = 'foo'
let obj3 = {
  [propKey]: true,
  ['a' + 'bc']: 123
}
console.log(obj3['propKey'])

let lastWord = 'last word'
const a = {
  'first word': 'hello',
  [lastWord]: 'word'
}
console.log(a['first word'])
console.log(a[lastWord])
console.log(a['last word'])

let obj4 = {
  ['h' + 'ello']() {
    return 'hi'
  }
}
console.log(obj4.hello)

const person1 = {
  sayName() {
    console.log('hello')
  }
}
console.log(person1.sayName.name)

const obj6 = {
  get foo() {},
  set foo(x) {}
}
const descriptor = Object.getOwnPropertyDescriptor(obj6, 'foo')
console.log(descriptor.get.name)
console.log(descriptor.set.name)

var doSomething = function() {}
console.log(doSomething.bind().name)

const key1 = Symbol('descript')
const key2 = Symbol()
let obj7 = {
  [key1]() {},
  [key2]() {}
}
console.log(obj7[key1].name)
console.log(obj7[key2].name)

let obj8 = { foo: 123 }
console.log(Object.getOwnPropertyDescriptor(obj8, 'foo'))

const proto = {
  foo: 'hello'
}
const obj9 = {
  foo: 'world',
  find() {
    return super.foo
  }
}

Object.setPrototypeOf(obj9, proto)
console.log(obj9.find())

const proto1 = {
  x: 'hello',
  foo() {
    console.log(this.x)
  }
}
const obj10 = {
  x: 'world',
  foo() {
    super.foo()
  }
}
Object.setPrototypeOf(obj10, proto1)
console.log(obj10.foo())

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
console.log(z)

let obj11 = { a: { b: 1 } }
let { ...c } = obj11
console.log(c.a.b)

let o11 = { a: 1 }
let o2 = { b: 2 }
o2._proto_ = o11
let { ...o3 } = o2
console.log(o3)
console.log(o3.a)

function basefunction({ a, b }) {}
function wrapperFunction({ x, y, ...restConfig }) {
  return basefunction(restConfig)
}

let z1 = { a: 3, b: 4 }
let n = { ...z1 }
console.log(z1)

let foo1 = { ...['a', 'b', 'c'] }
console.log(foo1)

console.log({ ...'hello' })

const clone1 = {
  _proto_: Object.getPrototypeOf(obj)
}
const clone2 = Object.assign(Object.create(Object.getPrototypeOf(obj)), obj)
const clone3 = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)

//let ab = { ...a, ...b }
//等同于
//let ab1 = Object.assign({}, a, b)

let aWithOverrides = { ...a, x: 1, y: 2 }
// 等同于
let aWithOverrides1 = { ...a, ...{ x: 1, y: 2 } }
// 等同于
let x2 = 1,
  y2 = 2,
  aWithOverrides2 = { ...a, x2, y2 }
// 等同于
let aWithOverrides3 = Object.assign({}, a, { x: 1, y: 2 })

let previousVersion = {name:'old Name'}
let newVersion = {
  ...previousVersion,
  name: 'new Name'
}

const obj12 = {
  ...(x > 1 ? { a: 1 } : {}),
  b: 2
}

let aWithXGetter = {
  ...a,
  get x() {
    throw new Error('not throw yet')
  }
}

let runtimeError = {
  ...a,
  ...{
    get x() {
      throw new Error('throw now')
    }
  }
}
