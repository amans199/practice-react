const { Map } = require('immutable');


const testStrings = "testtingStrings"
const testNumbers = 152
const testObjects = Map({ test1: "ahmed", test2: { test3: "mansour" } })

console.log(testStrings + "    " + testNumbers + "     " + testObjects.get('test1'))
testObjects.set('test1', "amans199")
console.log(testStrings + "    " + testNumbers + "     " + testObjects.get('test1'))