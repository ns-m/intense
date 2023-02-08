/*
Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.
*/

function allAnagrams(array) {
    const sorted = array.map(str => str.split('').sort().join(''))
  
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] !== sorted[0]) {
        return false
      }
    }
    return true
  }
  
  console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
  console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false
  
  console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
  console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false