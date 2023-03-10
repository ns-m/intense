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

testFun3(array, someFunc, elemHTML);
