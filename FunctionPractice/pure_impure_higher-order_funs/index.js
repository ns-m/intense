// Pure functions
function squad(num) {
  return num ** 2;
}

//Not Pure functions

function notPureFunc(num) {
  //document.querySelector('.out-1').innerHTML = num ** 2;
  document.querySelector('.out-1').innerHTML = squad(num);
}

let count = 0;

function notPureFunc2() {
  return count++;
}

function notPureFunc3() {
  alert('not Pure Func');
}

function notPureFunc4(num1, num2) {
  return Math.floor(Math.random() * (num2 - num1) + num1);
}

//Higher order functions

function someTestFunc() {
  console.log('another one console log');
}

someTestFunc.someElem = 'test elem';

console.log(someTestFunc.someElem);

function someLog1() {
  console.log('another one console log ONE');
}

function someLog2() {
  console.log('another one console log TWO');
}

function someResultOutput(randomNum, fun1, fun2) {
  if (randomNum % 2 === 0) return fun1;
  else return fun2;
}

let testVar = someResultOutput(3, someLog1, someLog2);

console.log(testVar);

testVar();

let testVar2 = someResultOutput(4, someLog1, someLog2);

console.log(testVar2);

testVar2();

const someArr = [
  { name: 'John', age: 34, sex: 'male' },
  { name: 'Lee', age: 24, sex: 'male' },
  { name: 'Mary', age: 28, sex: 'female' },
  { name: 'Lucy', age: 41, sex: 'female' },
];

let resultArr = [];

for (let index = 0; index < someArr.length; index++) {
  if (someArr[index].age > 28) {
    resultArr.push(someArr[index]);
  }
}

console.log(resultArr);

resultArr = someArr.filter(sortArr);

function sortArr(item) {
  return item.age > 28;
}

console.log(resultArr);
