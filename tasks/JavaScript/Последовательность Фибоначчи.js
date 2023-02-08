/*
Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны n,
которую передали как аргумент.
*/

function fibonacci(n) {
    const sequence = [1, 1]
  
    if (n < 2) {
      return sequence.slice(0, n)
    }
  
    while (sequence.length < n) {
      const last = sequence[sequence.length - 1]
      const prev = sequence[sequence.length - 2]
      sequence.push(last + prev)
    }
  
    return sequence
  }
  
  console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]