let a = 1
console.log(a)

for (let codePoint of 'foo') {
  console.log(codePoint)
}

let text = String.fromCodePoint(0x20bb7)
for (let i of text) {
  console.log(i)
}

let s = 'Hello world!'
s.startsWith('Hello')
s.endsWith('!')
s.includes('o')

let q = 'hello world'
q.startsWith('world,6')
q.endsWith('hello', 5)
q.includes('hello', 6)

console.log('hello '.repeat(3))

'x'.padStart(5, 'ab')
'x'.padEnd(4, 'ab')
'1'.padStart(10, '0')
'12'.padStart(10, 'YYY-MM-DD')

let name = 'Bob',
  time = 'today'
console.log(`Hello ${name}, how are you ${time}`)

function fn() {
  return 'Hello World'
}

let obj = { x: 1, y: 2 }
console.log(`${obj.x + obj.y} `)
console.log(`foo ${fn()} bar`)

const data = [
  { first: '<Jane>', last: 'Bond' },
  { first: 'Lars', last: '<Croft>' }
]
const tmpl = addrs => `
<table>
${addrs
  .map(
    addr => `
  <tr><td>${addr.first}</td></tr>
  <tr><td>${addr.last}</td></tr>
`
  )
  .join('')}
</table>`
console.log(tmpl(data))

