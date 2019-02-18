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

Object.defineProperty({},'invisible',{
  enumerable:false,
  value:hello
})