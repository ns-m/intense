const num1 = 99;
const num2 = 88;
const testStringWithSpaces = '    Duis mollit deserunt mollit  '; //27 Symbols without spaces
const testWord = 'consectetur';
const emptyStr = '';
const testNumArr = [1, 2, 3, 4, 5, 6]; // sum items are equals 21
const testCountNumOddArr = [7, 8, 9, 10, 11];
const testMixArr = [1, null, 3, 'a', 5, 6];

// Task 1
// Напишите функцию стрелочную функцию t1, которая аналогична закомментированной функции.

// function t1() {
//     const num1 = 77;
//     const num2 = 99;
//     console.log(num1 + num2);
// }

document
  .querySelector('.b-1')
  .addEventListener('click', () => console.log(num1 + num2));

// Task 2.
// Напишите стрелочную функцию, которая является аналогом анонимной функции, которая запускается при клике на b-2.

// document.querySelector('.b-2').addEventListener('click', function () {
//     const num1 = 99;
//     const num2 = 88;
//     document.querySelector('.out-2').textContent = num1 + num2;
// })

document.querySelector('.b-2').addEventListener('click', () => {
  document.querySelector('.out-2').textContent = num1 + num2;
});

// Task 3.
// Напишите функцию стрелочную функцию t3, которая аналогична закомментированной функции.

// function t3(a, b) {
//     document.querySelector('.out-3').textContent = a + b;
// }

const t3 = (num1, num2) => {
  document.querySelector('.out-3').textContent = num1 + num2;
};

t3(num1 + 1, num2 + 1);

// Task 4
// Напишите функцию стрелочную функцию t4, которая аналогична закомментированной функции.

// function t4(s) {
//     document.querySelector('.out-4').textContent = s.trim().length;
// }

const t4 = (s) => {
  document.querySelector('.out-4').textContent = s.trim().length;
};

document.querySelector('.b-4').addEventListener('click', () => {
  t4(testStringWithSpaces);
});

// Task 5
// Напишите функцию стрелочную функцию t5, которая аналогична закомментированной функции.

// function t5(a, b) {
//     return Math.pow(a, b);
// }

const t5 = (a, b) => Math.pow(a, b);

document.querySelector('.b-5').addEventListener('click', () => {
  document.querySelector('.out-5').textContent = t5(num1, num2);
});

// Task 6
// Напишите функцию стрелочную функцию t6, которая аналогична закомментированной функции.

// function t6(a) {
//     return ((a % 2 === 0) ? true : false);
// }

const t6 = (a) => (a % 2 === 0 ? true : false);

document.querySelector('.b-6').addEventListener('click', () => {
  document.querySelector('.out-6').textContent = t6(num2);
});

// Task 7
// Напишите функцию стрелочную функцию t7, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t7(arg) {
//     let arr = arg.map(function (item) {
//         return item * 2;
//     })
//     return arr;
// }

// const t7 =

document.querySelector('.b-7').addEventListener('click', () => {
  document.querySelector('.out-7').textContent = testNumArr.map(
    (item) => item * 2
  );
});

// Task 8
// Напишите функцию стрелочную функцию t8, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t8(arr) {
//     const arr2 = arr.filter(function (item) {
//         return item > 5;
//     });
//     return arr2;
// }

// const t8

document.querySelector('.b-8').addEventListener('click', () => {
  document.querySelector('.out-8').textContent = testNumArr.filter(
    (item) => item > 4
  );
});

// Task 9
// Напишите функцию стрелочную функцию t9, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t9(arr) {
//     return arr.reduce(function (accum, item) {
//         return accum += item;
//     });
// }

// const t9 =

document.querySelector('.b-9').addEventListener('click', () => {
  document.querySelector('.out-9').textContent = testNumArr.reduce(
    (accum, item) => (accum += item)
  );
});

// Task 10
// Запустите функцию f10. Изучите, что она выводит в качестве this. Запустите t10. Изучите что выводит она в качестве this.

function f10() {
  console.log(this);
}

const t10 = () => {
  console.log(this);
};

document.querySelector('.b-10').addEventListener('click', f10);
document.querySelector('.b-10').addEventListener('click', t10);

// Task 11
// Запустите функцию f11. Изучите как выглядит arguments. Запустите функцию t11. Изучите что будет выведено.

function f11() {
  console.log(arguments);
}

const t11 = () => {
  try {
    console.log(arguments);
  } catch (err) {
    console.log('argument not defined');
  }
};

document.querySelector('.b-11').addEventListener('click', function () {
  f11(77, 88, 99);
  t11(55, 44, 66);
});

// Task 12
// напишите стрелочную функцию t12, которая возвращает большее из переданных ей двух чисел. Числа передаются в качестве аргумента.

const t12 = (x, y) => (x > y ? x : y);

document.querySelector('.b-12').addEventListener('click', () => {
  document.querySelector('.out-12').textContent = t12(num1, num2);
});

// Task 13
// Напишите стрелочную функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.

const t13 = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

document.querySelector('.b-13').addEventListener('click', function () {
  document.querySelector('.out-13').textContent = t13(num2, num1);
});

// Task 14
// Напишите стрелочную функцию t14, которая получает строку как аргумент и возвращает строку очищенную от пробелов ( с начала и конца) или false если строка содержит только пробелы.

const t14 = (str) => {
  return str === '' ? false : str.trim();
};

document.querySelector('.b-14').addEventListener('click', function () {
  console.log(testStringWithSpaces);
  console.log(t14(testStringWithSpaces));
});

// Task 15
// Напишите стрелочную функцию, которая проверяет что пользователь ввел в input. Если число - возвращает true, если строку - false.

const t15 = (item) => {
  return isNaN(item) ? false : true;
};

document.querySelector('.b-15').addEventListener('click', function () {
  let inputData = document.querySelector('.i-15').value;
  document.querySelector('.out-15').textContent = t15(inputData);
});

// Task 16
// Напишите стрелочную функцию t16, которая проверяет что в массиве находится четное количество элементов. Возвращает true, false.

const t16 = (arr) => {
  return arr.length % 2 === 0 ? true : false;
};

document.querySelector('.b-16').addEventListener('click', function () {
  document.querySelector('.out-16').textContent = t16(testCountNumOddArr);
});

// Task 17
// Напишите стрелочную функцию t17, которая проверяет что в массиве находятся только числа. Если да - то возвращает true, если нет, false.

const t17 = (arr) => {
  return arr.every((elem) => !isNaN(elem));
};

document.querySelector('.b-17').addEventListener('click', () => {
  document.querySelector('.out-17').innerHTML = t17(testMixArr);
});

// Task 18
// Напишите стрелочную функцию t18, которая получает два аргумента - массив и число. Возвращает true если число есть в массиве и false если нет.

const t18 = (arr, item) => {
  return arr.find((elem) => elem === item) === undefined ? false : true;
};

document.querySelector('.b-18').addEventListener('click', () => {
  document.querySelector('.out-18').innerHTML = t18(testNumArr, 21);
});

// Task 19
// Напишите стрелочную функцию t19, которая принимает строку и аргумент true или false. Если второй аргумент false - то возвращает строку. Если true - возвращает перевернутую строку.

const t19 = (word, param) => {
  return param ? word.split('').reverse().join('') : word;
};

document.querySelector('.b-19').addEventListener('click', () => {
  document.querySelector('.out-19').innerHTML = t19(testWord, true);
});

// Task 20
// Напишите стрелочную функцию t20, которая принимает объект и число. Если число есть в объекте то возвращает первый встреченный ключ с таким числом. Если нет - false.

const j20 = {
  h: 4,
  j: 7,
  k: 22,
  m: 7,
};

const t20 = (testObj, item) => {
  let result = Object.keys(testObj).find((key) => testObj[key] === item);
  return result !== undefined ? result : false;
};

document.querySelector('.b-20').addEventListener('click', () => {
  document.querySelector('.out-20').innerHTML = t20(j20, 22);
});
