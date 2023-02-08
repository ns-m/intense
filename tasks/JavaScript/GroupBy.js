/*
Напишите функцию groupBy
*/

function groupBy(array, fn) {
    return array.reduce((res, current) => {
      const key = typeof fn === 'function' ? fn(current) : current[fn]
  
      if (!res[key]) {
        res[key] = []
      }
      res[key].push(current)
  
      return res
    }, {})
  }
  
  groupBy([6.1, 4.2, 6.3], Math.floor) // -> { '4': [4.2], '6': [6.1, 6.3] }
  groupBy(['one', 'two', 'three'], 'length') // -> { '3': ['one', 'two'], '5': ['three'] }