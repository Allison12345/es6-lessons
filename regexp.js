var regexp = new RegExp(/abc/gi, 'i').flags
console.log(regexp)

const a = /^\uD83D/u.test('\uD83D\uDC2A')

console.log(a)

var s = '𠮷'
console.log(/^.$/.test(s))
const b = /^.$/u.test(s)
console.log(b)

const r = /\u{61}/u.test('a')
const t = /\u{20BB7}/u.test('𠮷')

function codePointLength(text) {
  var result = text.match(/[\s\S]/gu)
  return result ? result.length : 0
}
var y = '吉吉'
console.log(codePointLength(y))
console.log(/[a-z]/iu.test('\u2012A'))

const r1 = /hello/
const r2 = /hello/u
console.log(r2.unicode)

var i = 'aaaa_aa_a'
var o1 = /a+/g
var o2 = /a+/y
console.log(o1.exec(i))
console.log(o2.exec(i))
console.log(o1.exec(i))
console.log(o2.exec(i))

var o11 = /a+_/g
var o22 = /a+_/y
console.log(o11.exec(i))
console.log(o22.exec(i))
console.log(o11.exec(i))
console.log(o22.exec(i))

const REGEX = /a/gy
console.log('aaxa'.replace(REGEX, '-'))

console.log('a1a2a3'.match(/a\d/y))
console.log('a1a2a3'.match(/a\d/gy))

const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y
const TOKEN_G = /\s*(\+|[0-9]+)\s*/g

function tokenize(TOKEN_REGEX, str) {
  let result = []
  let match
  while ((match = TOKEN_REGEX.exec(str))) {
    result.push(match[1])
  }
  return result
}
console.log(tokenize(TOKEN_Y, '3x + 4'))
console.log(tokenize(TOKEN_G, '3x + 4'))
console.log(TOKEN_Y.sticky)
console.log(TOKEN_Y.source)
console.log(TOKEN_Y.flags)

const re = /foo.bar/s
re.test('foo\nbar')
console.log(re.dotAll)

console.log(/\d+(?=%)/.exec(' 100% of US presidents have been male'))
console.log(/\d+(?!%)/.exec(' that is all 44 of them'))

console.log(/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill'))
console.log(/(?<!\$)\d+/.exec('it’s is worth about €90'))

console.log(/(?<=(\d+)(\d+))$/.exec('1053'))
console.log(/^(\d+)(\d+)$/.exec('1053'))

const White_Space = /\p{White_Space}/

const world = /\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}/

const code = /^\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}/

const emoji = /\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu

const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
const matchObj = RE_DATE.exec('2019-01-01')
const year = matchObj.groups.year
const month = matchObj.groups.month
const day = matchObj.groups.day
console.log(day)

let {
  groups: { one, two }
} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar')
console.log(one)

let replace = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u
console.log('2015-01-02'.replace(replace, '$<day>/$<month>/$<year>'))

const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/
const RE_THRIDS = /^(?<word>[a-z]+)!\k<word>!\1$/
console.log(RE_THRIDS.test('abc!abc!abc'))

var regex = /t(e)(st(\d?))/g
var string = 'test1test2test3'
var matches = []
var match
while ((match = regex.exec(string))) {
  matches.push(match)
}
console.log(matches)

