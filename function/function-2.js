let insert = value => ({
  into: array => ({
    after: afterValue => {
      array.splice(array.indexOf(afterValue) + 1, 0, value)
      return array
    }
  })
})
console.log(
  insert(2)
    .into([1, 3])
    .after(1)
)

const plus1 = a => a + 1
const mult2 = a => a * 2

console.log(mult2(plus1(5)))

function factorial(n, total) {
  if (n === 1) return total
  return factorial(n - 1, n * total)
}
console.log(factorial(5, 1))

function tailFactorial(n, total) {
  if (n === 1) return total
  return tailFactorial(n - 1, n * total)
}
function factorial1(n) {
  return tailFactorial(n, 1)
}

function fibonacci2(n, ac1 = 1, ac2 = 1) {
  if (n <= 1) {
    return ac2
  }
  return fibonacci2(n - 1, ac2, ac1 + ac2)
}
console.log(fibonacci2(5))

function trampoline(f) {
  while (f && f instanceof Function) {
    f = f()
  }
  return f
}

function sum(x, y) {
  if (y > 0) {
    return sum.bind(null, x + 1, y - 1)
  } else {
    return x
  }
}

console.log(trampoline(sum(1, 100000)))

function tco(f) {
  var value
  var active = false
  var accumulated = []
  return function accumlator() {
    accumulated.push(arguments)
    if (!active) {
      active = true
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift())
      }
      active = false
      return value
    }
  }
}
var sum1 = tco(function(x, y) {
  if (y > 0) {
    return sum(x + 1, y - 1)
  } else {
    return x
  }
})
console.log(sum1(1, 100000))

function clownsEverywhere(param1, param2,) {}
