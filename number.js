Number.isFinite(15)
Number.isFinite(NaN)
Number.isFinite(Infinity)
Number.isFinite('foo')

Number.isNaN(NaN)
Number.isNaN(23)
Number.isNaN(9 / NaN)
Number.isNaN('true' / 'true')

isFinite(34)
isFinite('34')
Number.isFinite(34)
Number.isFinite('34')

isNaN(NaN)
isNaN('NaN')
Number.isNaN(NaN)
Number.isNaN('NaN')

Number.parseFloat('1232.54#')
Number.parseInt('12.435')

Number.parseFloat === parseFloat
Number.parseInt === parseInt

//判断整数
Number.isInteger(34)
Number.isInteger(34.0)
Number.isInteger(23.4)

Number.isInteger(null) //('14,true)

Number.isInteger(3.00000000000000002) //true
Number.isInteger(5e-325) //true

function withinErrorMargin(left, right) {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2)
}
console.log(withinErrorMargin(0.1 + 0.2, 0.3))
console.log(withinErrorMargin(1.1 + 1.3, 2.4))

Math.pow(2, 53) === Math.pow(2, 53) + 1 //true

Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1
console.log(Number.MAX_SAFE_INTEGER)
Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER)

console.log(Number.isSafeInteger(9007199254740992))

Number.isSafeInteger = function(n) {
  return (
    typeof n === 'number' &&
    Math.round(n) === n &&
    Number.MIN_SAFE_INTEGER <= n &&
    n <= Number.MAX_SAFE_INTEGER
  )
}

function trusty(left, right, result) {
  if (
    Number.isSafeInteger(left) &&
    Number.isSafeInteger(right) &&
    Number.isSafeInteger(result)
  ) {
    return result
  } else throw new RangeError('Operation cannot be trusted!')
}
console.log(trusty(9007199254740991, 990, 9007199254740991 - 990))

Math.trunc(3.4)
Math.trunc('23.435')
Math.trunc(true)
Math.trunc(false)
Math.trunc(null)

Math.trunc(NaN)
Math.trunc('foo')
Math.trunc()
Math.trunc(undefined)

Math.trunc =
  Math.trunc ||
  function(x) {
    return x < 0 ? Math.ceil() : Math.floor()
  }

Math.sign(3)
Math.sign(-3)
Math.sign(0)
Math.sign(-0)

Math.sign =
  Math.sign ||
  function(x) {
    x = +x
    if (x === 0 || isNaN) {
      return x
    }
    return x > 0 ? 1 : -1
  }

Math.cbrt(-1)
Math.cbrt(3)

Math.cbrt =
  Math.cbrt ||
  function(x) {
    var y = Math.pow(Math.abs(x), 1 / 3)
    return x < 0 ? -y : y
  }

Math.clz32(0) // 32
Math.clz32(1) // 31
Math.clz32(1000) // 22
Math.clz32(0b01000000000000000000000000000000) // 1
Math.clz32(0b00100000000000000000000000000000) // 2

Math.clz32(0) // 32
Math.clz32(1) // 31
Math.clz32(1 << 1) // 30
Math.clz32(1 << 2) // 29
Math.clz32(1 << 29) // 2

Math.imul(2, 3)

Math.hypot(3, 4)
Math.hypot(3, 4, 5)
Math.hypot(3, 4, '5') // 7.0710678118654755
Math.hypot(-3) // 3

Math.expm1(-1) // -0.6321205588285577
Math.expm1(0) // 0
Math.expm1(1) // 1.718281828459045

Math.expm1 =
  Math.expm1 ||
  function(x) {
    return Math.exp(x) - 1
  }

Math.log1p(1) // 0.6931471805599453
Math.log1p(0) // 0
Math.log1p(-1) // -Infinity
Math.log1p(-2) // NaN

Math.log1p =
  Math.log1p ||
  function(x) {
    return Math.log(1 + x)
  }

Math.log10(2) // 0.3010299956639812
Math.log10(1) // 0
Math.log10(0) // -Infinity
Math.log10(-2) // NaN
Math.log10(100000) // 5

Math.log10 =
  Math.log10 ||
  function(x) {
    return Math.log(x) / Math.LN10
  }

Math.log2 =
  Math.log2 ||
  function(x) {
    return Math.log(x) / Math.LN2
  }

Math.sinh(x)
Math.cosh(x)
Math.tanh(x)
Math.asinh(x)
Math.acosh(x)
Math.atanh(x)

2 ** 2
2 ** 5 **4
let a = 1.5;
//  a = a * a;
a **= 2;
let b = 4;
//  b = b * b * b;
b **= 3;
Math.pow(99,99)
99 ** 99
