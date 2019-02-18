function push(array, ...items) {
  array.push(...items)
}
function add(x, y) {
  return x + y
}
const numbers = [3, 423]
console.log(add(...numbers))

function f(v, w, x, y, z) {}
const args = [0, 1]
f(-1, ...args, 2, ...[3])
const x = 3
const arr = [...(x > 0 ? ['a'] : []), 'b']

function f(x, y, z) {}
let arys = [0, 1, 2]
f(...args)

Math.max(...[14, 3, 77])
Math.max(14, 3, 77)

let arr1 = [0, 1, 2]
let arr2 = [3, 4, 5]
arr1.push(...arr2)
console.log(arr1)

new Date(...[2015, 1, 1])

const a1 = [1, 2]
const a2 = [...a1]

let arr3 = ['43', '4']
console.log([...arr1, arr2, arr3])

const [first, ...rest] = [1, 2, 3, 4, 5]
const [first1, ...rest1] = ['foo']
console.log(rest1)

console.log([...'hello'])

function length(str) {
  return [...str].length
}
console.log(length('x\uD83D\uDE80y'))

Number.prototype[Symbol.iterator] = function*() {
  let i = 0
  let num = this.valueOf()
  while (i < num) {
    yield i++
  }
}
console.log([...5])

let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}

let arr5 = [...Array.from(arrayLike)]
console.log(arr5)

let map = new Map([[1, 'one'], [2, 'two'], [3, 'three']])
let arr6 = [...map.keys()]
console.log(arr6)

const obj = { a: 1, b: 2 }
let arr7 = [...Array.from(obj)]

let arrayLike2 = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
var arr8 = Array.from(arrayLike2)
console.log(arr8)

function foo() {
  var args = Array.from(arguments)
}
let namesSet = new Set(['a', 'b'])
Array.from(namesSet)

function foo1() {
  const args = [...arguments]
}

console.log(Array.from({ length: 3 }))
const toArray = () => (Array.from ? Array.from : obj => [].slice.call(obj))
Array.from(arrayLike, x => x * x)

Array.from([1, , , 2, , 3], n => n || 0)
function typesOf() {
  return Array.from(arguments, value => typeof value)
}
console.log(typesOf(null, [], NaN))

Array.from({ length: 2 }, () => 'jack')

function countSymbols(string) {
  return array.from(string).length
}

Array.of(3, 5, 6, 7)
Array.of(undefined)
function ArrayOf() {
  return [].slice.call(arguments)
}

console.log([1, 2, 3, 4, 5].copyWithin(0, 3))
let i32 = new Int32Array([1, 2, 3, 4, 5])
console.log(i32.copyWithin(0, 2))

console.log([1, 2, -4].find(n => n < 0))
console.log(
  [1, 3, 7, 68].find(function(value, index, arr) {
    return value > 9
  })
)
console.log(
  [1, 3, 7, 68].findIndex(function(value, index, arr) {
    return value > 9
  })
)
function f(v) {
  return v > this.age
}
let person = { name: 'John', age: 20 }
console.log([10, 12, 98, 23].find(f, person))
console.log([NaN].findIndex(y => Object.is(NaN, y)))

console.log(['s', 'd', 'f'].fill(7))
console.log(new Array(3).fill(4))
console.log(['s', 'd', 'f'].fill(7, 1, 2))

var arr8 = new Array(3).fill({ name: 'Mike' })
arr8[0].name = 'Ben'

console.log(arr8)
for (let index of ['a', 'b'].keys()) {
  console.log(index)
}

for (let elem of ['a', 'b'].values()) {
  console.log(elem)
}

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem)
}

let letter = ['a', 'd', 'f']
let entries = letter.entries()
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)

//[(1, 2, 3)].includes(2)
//[(1, 2, 3)].includes(4)
// [(1, 2, NaN)].includes(NaN)
//[(1, 2, 3)].includes(3, 3) // false
//[1, 2, 3].includes(3, -1) // true

const contains = () =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value)
console.log(contains(['foo', 'bar'], 'baz'))

//console.log([1,2,[3,4]].flat())
//console.log([1,2,[3,[4,5]]].flat(2))

//console.log([2,3,4].flatMap((x) => [x,x*2]))