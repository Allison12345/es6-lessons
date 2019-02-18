const s = new Set()
const s1 = [2, 3, 4, 5, 2, 4, 6, 3]
s1.forEach(x => s.add(x))
for (let i of s) {
  console.log(i)
}

const set1 = new Set([1, 2, 3, 4, 5, 6, 6, 4, 5, 6])
console.log([...set1])

const items = new Set([1, 2, 3, 4, 5, 5, 5, 5])
items.size
console.log([...new Set(s1)])
console.log([...new Set('ababbc')].join(''))

let set = new Set()
let a = NaN
let b = NaN
set.add(a)
set.add(b)
console.log(set)

let set3 = new Set()

set3.add({})
set3.size // 1

set3.add({})
set3.size // 2

let s4 = new Set()
s4.add(1)
  .add(2)
  .add(2)
s4.size // 2
s4.has(1) // true
s4.has(2) // true
s4.has(3) // false
s4.delete(2)
console.log(s4.has(2)) // false

const properties = {
  width: 1,
  height: 1
}
//if (properties[someName]) {}

const properties1 = new Set()
properties1.add('width')
properties1.add('height')
//if (properties1.has(someName))
const item1 = new Set([1, 2, 3, 4, 5])
const array = Array.from(item1)

function dedupe(array) {
  return Array.from(new Set(array))
}
console.log([1, 3, 4, 5, 6, 7, 3, 4, 5])

let set4 = new Set(['red', 'green', 'blue'])

for (let item of set4.keys()) {
  console.log(item)
}

for (let item of set4.values()) {
  console.log(item)
}

for (let item of set4.entries()) {
  console.log(item)
}

Set.prototype[Symbol.iterator] === Set.prototype.values

let set5 = new Set(['red', 'green', 'blue'])

for (let x of set5) {
  console.log(x)
}

let set6 = new Set([1, 4, 9])
set6.forEach((value, key) => console.log(key + '' + value))

let arr5 = [1, 3, 4, 5, 2, 4, 5]
let unique = [...new Set(arr5)]
console.log(arr5)

let set7 = new Set([1, 2, 3])
se8 = new Set([...set].map(x => x * 2))
let set9 = new Set([1, 2, 3, 4, 5])
set10 = new Set([...set].filter(x => x % 2 == 0))

let aa = new Set([1, 2, 3])
let bb = new Set([4, 3, 2])
let union = new Set([...aa, ...bb])
let intersect = new Set([...aa].filter(x => bb.has(x)))
let difference = new Set([...aa].filter(x => !bb.has(x)))

let set11 = new Set([1, 2, 3])
set12 = new Set([...set11].map(val => val * 2))

let set13 = new Set([1, 2, 3])
set14 = new Set(Array.from(set13, val => val * 2))

const wsa = [[1, 2], [3, 4]]
const ws = new WeakSet(wsa)
console.log(ws)

const ws1 = new WeakSet()
const obj = {}
const foo = {}

//ws1.add(window)
//ws1.add(obj)

//ws1.has(window)
//ws1.has(foo)

//ws1.delete(window)
//ws1.has(window)

const foos = new WeakSet()
class Foo {
  constructor(){
    foos.add(this)
  }
  method(){
    if(!foos.has(this)){
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用')
    }
  }
}