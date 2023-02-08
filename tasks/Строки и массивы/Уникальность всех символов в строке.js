/* 
Уникальность всех символов в строке
Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: ‘a’ и ‘A’ разные символы
*/

function isUnique(string){
      // for (let i = 0; i < str.length; i++) {
  //   if (str.lastIndexOf(str[i]) !== i) {
  //     return false
  //   }
  // }
  // return true
  // const chars = new Set()
  //
  // for (let i = 0; i < str.length; i++) {
  //   const current = str[i]
  //
  //   if (chars.has(current)) {
  //     return false
  //   }
  //
  //   chars.add(current)
  // }
  // return true
  return new Set(string).size === string.length
}

console.log(isUnique('abcdef'));
console.log(isUnique('1234567'));
console.log(isUnique('abcABC'));
console.log(isUnique('abcadef'));