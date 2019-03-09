let promise = new Promise(function(resolve, reject) {
  console.log('promise')
  resolve()
})
promise.then(function() {
  console.log('resolved')
})
console.log('hi')

function loadIMageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image()
    image.onload = function() {
      resolve(image)
    }
    image.onerror = function() {
      reject(new Error('can not load image at ' + url))
    }
    image.src = url
  })
}
loadIMageAsync('/Users/wuwuchuanping/Downloads/logo.png')