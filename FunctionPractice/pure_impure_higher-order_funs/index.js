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

const someUser1 = {
  userFullName: 'Bruce Lee',
  userAge: 51,
  password: 'qwerty123',
  sex: 'male',
  agreeToTerm: true,
};

const someUser2 = {
  userFullName: 'John Do',
  userAge: 17,
  password: '12345',
  sex: 'male',
  agreeToTerm: true,
};

const someUser3 = {
  userFullName: 'Will Smith',
  userAge: 37,
  password: 'q12345we',
  sex: 'male',
  agreeToTerm: false,
};

function checkAge(user) {
  return user.userAge >= 18;
}

// console.log(checkAge(someUser1));
// console.log(checkAge(someUser2));

function checkPassword(user) {
  return user.password.length > 8;
}

function checkTerm(user) {
  return user.agreeToTerm === true;
}

function validateUser(obj, ...args) {
  for (let i = 0; i < args.length; i++) {
    if (args[i](obj)) {
      return console.log(`Validation user ${obj.userFullName}. Result - true`);
    }
    return console.log(`Validation user ${obj.userFullName}. Result - false`);
  }
}

validateUser(someUser1, checkAge, checkPassword, checkTerm);
validateUser(someUser2, checkAge, checkPassword, checkTerm);

console.log('************************');

function createValidator(...args) {
  return function (obj) {
    for (let i = 0; i < args.length; i++) {
      if (args[i](obj)) {
        return console.log(
          `Validation user ${obj.userFullName}. Result - true`
        );
      }
      return console.log(`Validation user ${obj.userFullName}. Result - false`);
    }
  };
}

const validate1 = createValidator(checkAge, checkPassword, checkTerm);
const validate2 = createValidator(checkAge, checkPassword, checkTerm);
const validate3 = createValidator(checkAge, checkPassword);

validate1(someUser1);
validate2(someUser2);
validate2(someUser3);
