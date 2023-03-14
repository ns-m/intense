// Task 1
// Допишите функцию callBack1 такую, что принимает элементы массива из map и возвращает их возведенные в 3 степень.

const ar1 = [4, 5, 6];

function callBack1(item) {
  return item ** 3;
}

document.querySelector('.out-1').innerHTML = ar1.map(callBack1);

//console.log(ar1.map(callBack1));

// Task 2
// Допишите анонимную стрелочную функцию внутри map такую, что принимает элементы массива из map и возвращает их возведенные в 3 степень.

//let res2;
//res2 = ar1.map((elem) => elem ** 3); // сюда в скобки дописываете стрелочную функцию
const ar2 = [2, 3, 9];
document.querySelector('.out-2').innerHTML = ar2.map((elem) => elem ** 3);
//console.log(res2);

// Task 3.
// Допишите функцию callBack3 такую, что принимает элементы массива из filter и возвращет true если это число.

const ar3 = [4, '5', 6, 7, 9, '10'];
//let res3;
// let callBack3 =

function callBack3(elem) {
  return typeof elem === 'number';
}

function res3(someFunc) {
  for (let index = 0; index < ar3.filter(someFunc).length; index++) {
    document.querySelector('.out-3').innerHTML += `${true} `;
  }
}

res3(callBack3);

//document.querySelector('.out-3').innerHTML = res3;
//console.log(res3);

// Task 4
// Допишите анонимную стрелочную функцию внутри filter такую, что принимает элементы массива из filter и возвращает true если это число.
// let res4;
// res4 = ar3.filter((elem) => typeof elem === 'number'); // сюда в скобки дописываете стрелочную функцию

//console.log(res4);
document.querySelector('.out-4').innerHTML = `${ar3.filter(
  (elem) => typeof elem === 'number'
)}`;

// Task 5
// Напишите функцию callBack5 такую, что принимает элементы массива и пушит их в res5 приведенные к toLowerCase().

const ar5 = ['GaLaxY', 'InFILtratoR', 'DaTaPad', 'APeX hQ'];
let res5 = [];

function callBack5(arr, otherArr) {
  arr.forEach((element) => {
    otherArr.push(element.toLowerCase());
  });
  return otherArr;
}

//ar5.forEach(callBack5);
document.querySelector('.out-5').innerHTML = `${callBack5(ar5, res5)}`;

//console.log(res5);

// Task 6
// Допишите анонимную стрелочную функцию внутри forEach такую, что принимает элементы массива из forEach и пушит их в res6 приведенные к toLowerCase().

let res6 = [];
ar5.forEach((elem) => {
  res6.push(elem.toLowerCase());
}); // сюда в скобки дописываете стрелочную функцию

//console.log(res6);
document.querySelector('.out-6').innerHTML = res6;

// Task 7
// Напишите функцию callBack7 такую, что принимает элементы массива ar7 и возвращет true если они больше 10.

const ar7 = [5, 7, 10, 20, 30, 60];
// let res7;

function callBack7(elem) {
  return elem > 10;
}

let res7 = ar7.every(callBack7);

//console.log(callBack7(ar7));
document.querySelector(
  '.out-7'
).innerHTML = `${ar7} All elements bigger than '10' = ${res7}`;

// Task 8
// Допишите анонимную стрелочную функцию внутри every такую, что принимает элементы массива ar7 из every и возвращет true если они больше 10.

//let res8;
const ar8 = [15, 17, 100, 20, 30, 60];
let res8 = ar8.every((elem) => elem > 10); // сюда в скобки дописываете стрелочную функцию

//console.log(res8);

document.querySelector(
  '.out-8'
).innerHTML = `${ar8} All elements bigger than '10' = ${res8}`;

// Task 9
// Напишите функцию callBack9 такую, что принимает элементы массива ar9 и возвращет true если тип данных элемента boolean.

const ar9 = [5, 7, false, 10, 20, 30, 60];
// let res9;
// let callBack9 =

let res9 = ar9.some(callBack9);

function callBack9(elem) {
  return typeof elem === 'boolean';
}

//console.log(res9);
document.querySelector('.out-9').innerHTML = res9;

// Task 10
// Допишите анонимную стрелочную функцию внутри some такую, что принимает элементы массива ar9 из some и возвращет true если тип данных элемента boolean.

//let res10;
let res10 = ar9.some((elem) => typeof elem === 'boolean'); // сюда в скобки дописываете стрелочную функцию

//console.log(res10);
document.querySelector('.out-10').innerHTML = res10;
