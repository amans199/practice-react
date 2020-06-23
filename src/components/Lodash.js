import { compose, pipe } from "lodash/fp"
// compose is read from rtl but pipe is read from ltr
let input = "    JAVAScript   "
let output = "<div>" + input.trim() + "</div"

const trim = str => str.trim()
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase()

// const result1 = wrapInDiv(toLowerCase(trim(input)))
const result2 = compose(wrap("div"), wrap("span"), toLowerCase, trim)
const result3 = pipe(trim, toLowerCase, wrap("span"), wrap("div"))
// const result2 = compose(trim, toLowerCase, wrap("span"), wrap("div"))
// console.log(result1)
console.log(result2(input))
console.log(result3(input))