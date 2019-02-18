let s = Symbol()
console.log(typeof s)

let s1 = Symbol('foo')
let s2 = Symbol('baz')
console.log(s1)

const obj = {
  toSting() {
    return 'abc'
  }
}
const sym = Symbol(obj.toSting())
console.log(sym)

let s11 = Symbol('foo')
let s22 = Symbol('foo')
console.log(s11 === s22)

let sym2 = Symbol('My symbol')
console.log(String(sym2))
let sym3 = Symbol()
console.log(Boolean(sym3))
console.log(!sym3)

let mySymbol = Symbol()
let a = {}
a[mySymbol] = 'hello'
let a1 = {
  [mySymbol]: 'hello'
}
let a2 = {}
Object.defineProperty(a, mySymbol, { value: 'hello' })

const mySymbol1 = Symbol()
const a3 = {}
a3.mySymbol = 'hello'
console.log(a3['mySymbol'])

let s3 = Symbol()
let obj1 = {
  [s3]: function(arg) {
    return arg
  }
}
console.log(obj1[s3](123))

const log = {}

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
}
console.log(log.levels.DEBUG, 'debug message')
console.log(log.levels.INFO, 'info message')

const COLOR_RED = Symbol()
const COLOR_GREEN = Symbol()

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN
    case COLOR_GREEN:
      return COLOR_RED
    default:
      throw new Error('undefined color')
  }
}
getComplement(COLOR_GREEN)

function getArea(shape, options) {
  let area = 0
  switch (shape) {
    case 'Triangle':
      area = 0.5 * options.wisth * options.height
      break
  }
  return area
}
getArea('Triangle', { width: 100, height: 100 })

const shapeType = {
  Triangle: Symbol()
}
function getArea1(shape, options) {
  let area = 0
  switch (shape) {
    case shapeType.Triangle:
      area = 0.5 * options.width * options.height
      break
  }
  console.log(area)
}
getArea1(shapeType.Triangle, { width: 100, height: 100 })

const obj2 = {}
let a4 = Symbol('a')
let b4 = Symbol('b')
obj2[a4] = 'hello'
obj2[b4] = 'world'
const objectSymbols = Object.getOwnPropertySymbols(obj2)
console.log(objectSymbols)

let obj3 = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
}
console.log(Reflect.ownKeys(obj3))

let size = Symbol('size')
class Collection {
  constructor() {
    this[size] = 0
  }
  add(item) {
    this[this[size]] = item
  }
  static sizeOf(instance) {
    return instance[size]
  }
}

let x = new Collection()
console.log(Collection.sizeOf(x))
x.add('foo')
console.log(Collection.sizeOf(x))

Symbol.for('foo') === Symbol.for('foo') //true
let s33 = Symbol.for('bar')
console.log(Symbol.keyFor(s33))

const FOO_KEY = Symbol('foo')
function A() {
  this.foo = 'hello'
}
if (!global[FOO_KEY]) {
  global[FOO_KEY] = new A()
}
module.export = global[FOO_KEY]

class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array
  }
}
;[1, 2, 3] instanceof new MyClass()

console.log([1, 2, 3] instanceof new MyClass())

class Even {
  [Symbol.hasInstance](obj) {
    return Number(obj) % 2 === 0
  }
}
console.log(2 instanceof new Even())

let obj4 = { length: 2, 0: 'c', 1: 'd' }


obj4[Symbol.isConcatSpreadable] = true

class A1 extends Array {
  constructor(args) {
    super(args)
    this[Symbol.isConcatSpreadable] = true
  }
}
class A2 extends Array {
  constructor(args) {
    super(args)
  }
  get [Symbol.isConcatSpreadable]() {
    return false
  }
}
let a12 = new A1()
a12[0] = 3
a12[1] = 4
let a22 = new A2()
a22[0] = 5
a22[1] = 6
console.log([1, 2].concat(a12).concat(a22))

class MyArray extends Array {
  static get [Symbol.species]() {
    return Array
  }
}
const a5 = new MyArray()
const b5 = a5.map(x => x)
console.log(b5 instanceof MyArray)
console.log(b5 instanceof Array)

class T1 extends Promise {
}

class T2 extends Promise {
  static get [Symbol.species]() {
    return Promise;
  }
}

new T1(r => r()).then(v => v) instanceof T1 // true
new T2(r => r()).then(v => v) instanceof T2 // false


class MyMatcher{
  [Symbol.match](string){
    return 'helloworld'.indexOf(string)
  }
}
console.log('e'.match(new MyMatcher()))

const x6 = {};
x6[Symbol.replace] = (...s) => console.log(s);

'Hello'.replace(x6, 'World')

class MySearch {
  constructor(value){
    this.value = value
  }
  [Symbol.search](string){
    return string.indexOf(this.value)
  }
}
console.log('foobar'.search(new MySearch('foo')))

