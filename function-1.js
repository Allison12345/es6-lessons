function log(x, y = 'world') {
  console.log(x, y)
}
log('hello')

function Point(x = 0, y = 0) {
  ;(this.x = x), (this.y = y)
}
const p = new Point()
console.log(p)

let x = 99
function foo(p = x + 1) {
  console.log(p)
}
foo()

function zoo({ x, y = 5 } = {}) {
  console.log(x, y)
}
zoo({})
zoo({ x: 1, y: 2 })
zoo({ x: 1 })
zoo()

function fetch(url, { body = '', method = 'GET', headers = {} }) {
  console.log(method)
}
fetch('http://example.com', {})
function fetch1(url, { body = '', method = 'GET', headers = {} } = {}) {
  console.log(method)
}
fetch1('http://example.com')

function f(x, y = 5, z) {
  return [x, y, z]
}
console.log(f(1, undefined, 2))

var y = 1
function f(y, x = y) {
  console.log(x)
}
f(2)

let z = 1
function f1(y = z) {
  let z = 2
  console.log(y)
}
f1()

let a = 1
function f2(
  a,
  y = function() {
    a = 2
  }
) {
  a = 3
  y()
  console.log(a)
}
f2()

function throwIfMissing() {
  throw new Error('Missing parameter')
}
function f3(mustBeProvied = throwIfMissing()) {
  return mustBeProvied
}
f3(4)

function f4(optional = undefined) {}

function add(...values) {
  let sum = 0
  for (var val of values) {
    sum += val
  }
  return sum
}
console.log(add(2, 4, 5))

function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort()
}
const sortNumbers1 = (...numbers) => numbers.sort()

function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item)
    console.log(item)
  })
}
var c = []
push(c, 1, 2, 3)
console.log(c)

const doSomething = function() {
  'use strict'
  return function(value = 42) {
    return value
  }
}

var f = () => 5
var sum = (num1, num2) => num1 + num2

let getTempItem = id => ({ id: id, name: 'Temp' })

let fn = () => void doesNotReturn()
const full = ({ first, last }) => first + '' + last[(1, 2, 3)].map(x => x * x)

const numbers = (...nums) => nums
console.log(numbers(1, 2, 3, 4, 5))
const headAndTail = (head, ...tail) => [head, tail]
console.log(headAndTail(1, 2, 3, 4, 5))

function f5() {
  setTimeout(() => {
    console.log('id:', this.id)
  }, 100)
}
var id = 12
console.log({ id: 42 })

function Timer() {
  this.s1 = 0
  this.s2 = 0
  setInterval(() => this.s1++, 1000)
  setInterval(function() {
    this.s2++
  }, 1000)
}
var timer = new Timer()
setTimeout(() => console.log('s1', timer.s1), 3200)
setTimeout(() => console.log('s2', timer.s2), 3200)

var handler = {
  id: '123456',
  init: function() {
    document.addEventListener(
      'click',
      event => this.doSomething(event.type),
      false
    )
  },
  doSomething: function(type) {
    console.log('handling' + type + 'for' + this.id)
  }
}
console.log(handler)

function f6() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id)
      }
    }
  }
}
var f7 = f6.call({id:1})
console.log(f7)