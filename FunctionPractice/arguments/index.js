function showNum1(elem, num1, num2) {
  document.querySelector(elem).innerHTML = num1 + num2;
}

showNum1('.out-1', 10, 20);

function showNum2(elem, num1, num2) {
  elem.innerHTML = num1 + num2;
}

showNum2(document.querySelector('.out-2'), 30, 40);

const out3 = document.querySelector('.out-3');
showNum2(out3, 50, 60);

function showNum3(num1, num2, elem = '.out-4') {
  document.querySelector(elem).innerHTML = num1 + num2;
}
showNum3(55, 65, '.out-5');

function showAllNums() {
  console.log(arguments);
  /*let count = 0;  
  for (let index = 0; index < arguments.length; index++) {
    count += arguments[index];
  }*/
  let count = Array.from(arguments).reduce((accum, item) => (accum += item));
  document.querySelector('.out-6').innerHTML = count;
}

showAllNums(1, 2, 3, 15);

function showAllNums2(...args) {
  console.log(args);
  let count = args.reduce((accum, item) => (accum += item));
  document.querySelector('.out-4').innerHTML = count;
}

showAllNums2(1, 2, 3, 10);

function getResult(result) {
  document.querySelector('.out-7').innerHTML = `<b>${result}</b>`;
}

function funcLikeArgument(someFunc, ...someNumbers) {
  someFunc(someNumbers);
}

funcLikeArgument(getResult, 404, 505, 606);
