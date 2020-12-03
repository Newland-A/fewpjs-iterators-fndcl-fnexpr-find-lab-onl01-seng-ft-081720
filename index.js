const testVar = {}

function testFunc() {
  return "hi"
}

// [1,3,5,6,8].find(function(e) { return e % 2 === 0 })
// => 6

function superbowlWin(record) {
  let results = record.find(record => record.result === "W")
  return !!results ? results.year : undefined
} 
superbowlWin()