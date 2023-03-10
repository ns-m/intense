const testNumArr = [7, 4, 5, 6, 8];
const out1 = document.querySelector(".out-1");
const out2 = document.querySelector(".out-2");
const out3 = document.querySelector(".out-3");
const out4 = document.querySelector(".out-4");
const out5 = document.querySelector(".out-5");
const out6 = document.querySelector(".out-6");
const out7 = document.querySelector(".out-7");
const out8 = document.querySelector(".out-8");
const out9 = document.querySelector(".out-9");
const out10 = document.querySelector(".out-10");
const url = "https://jsonplaceholder.typicode.com/todos/1";

function testFun1() {
  testNumArr[1] = testNumArr[1] * 2;
  out1.innerHTML = testNumArr;
}

testFun1();

function showArr(someArr, someElem) {
  someElem.innerHTML = someArr.join("/");
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
  someElem.innerHTML = someArr.join("-|-");
}

testFun3(testNumArr, otherShowArr, out4);

//example classic callback

function squad(item) {
  return item ** 2;
}

const otherArrVar = testNumArr.map(squad);

//out5.innerHTML = otherArrVar;
showArr(otherArrVar, out5);

//example with input data

document.querySelector(".b-4").addEventListener("click", () => {
  getUserName(fixInput);
});

function getUserName(fixData) {
  const userName = document.querySelector(".i-4").value;
  out6.innerHTML = fixData(userName);
}

function fixInput(inputStr) {
  return inputStr.trim().toLowerCase();
}

//example async callback functions

async function loaderPageData(callbackFun) {
  const elem = out7;
  const testData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  callbackFun(elem, testData);
}

function getAjax(elem, params) {
  elem.innerHTML += `Sent request ${"<br>"}`;
  elem.innerHTML += `Got request ${"<br>"}`;
  elem.innerHTML += `--------------------`;
  //let result = params;
  console.group("1");
  console.log(params);
}

loaderPageData(getAjax);

function otherLoaderPageData(callbackFun) {
  const elem = out8;
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => callbackFun(elem, json));
}

otherLoaderPageData(getAjax);

//callback`s hell

function threeLoaderPageData() {
  const elem = out9;
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      elem.innerHTML += `Sent request ${"<br>"}`;
      elem.innerHTML += `Got request ${"<br>"}`;
      console.log(json);
      fetch("https://jsonplaceholder.typicode.com/todos/1" + json.userId)
        .then((response) => response.json())
        .then((json) => {
          elem.innerHTML += `--------------------${"<br>"}`;
          elem.innerHTML += `Sent request ${"<br>"}`;
          elem.innerHTML += `Got request ${"<br>"}`;
          console.log(json);
        });
    });
}

threeLoaderPageData();

function fourLoaderPageData(url, callbackFun) {
  const elem = out10;
  fetch(url)
    .then((response) => response.json())
    .then((json) => callbackFun(elem, json));
}

function twoGetAjax(elem, params) {
  elem.innerHTML += `Sent request ${"<br>"}`;
  elem.innerHTML += `Got request ${"<br>"}`;
  elem.innerHTML += `--------------------`;
  console.group("2");
  console.log(params);
  fourLoaderPageData(url + params.userId, showUserData);
}

function showUserData(params) {
  console.log(params);
}

fourLoaderPageData(url, twoGetAjax);
