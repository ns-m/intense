const testNumArr = [7, 4, 5, 6, 8];
const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out3 = document.querySelector('.out-3');
const out4 = document.querySelector('.out-4');
const out5 = document.querySelector('.out-5');
const out6 = document.querySelector('.out-6');

function testFun1() {
  testNumArr[1] = testNumArr[1] * 2;
  out1.innerHTML = testNumArr;
}

testFun1();

function showArr(someArr, someElem) {
  someElem.innerHTML = someArr.join('/');
}

function testFun2() {
  testNumArr[1] = testNumArr[1] * 2;
  showArr(testNumArr, out2);
}

testFun2();

function testFun3(someArray, someFunc, someElemHTML) {
  someArray[1] = someArray[1] * 2;
  someFunc(someArray, someElemHTML);
}

testFun3(testNumArr, showArr, out3);

function otherShowArr(someArr, someElem) {
  someElem.innerHTML = someArr.join('-|-');
}

testFun3(testNumArr, otherShowArr, out4);

//example classic callback

function squad(item) {
  return item ** 2;
}

const otherArrVar = testNumArr.map(squad);

//out5.innerHTML = otherArrVar;
showArr(otherArrVar, out5);
