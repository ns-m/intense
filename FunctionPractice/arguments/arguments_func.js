function unitIIone(num1, num2) {
  document.querySelector('.out-1').innerHTML =
    Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

document.querySelector('.b-1').addEventListener('click', () => {
  unitIIone(1, 2);
});

////////////
function unitIItwo(num1, num2, elem) {
  document.querySelector(elem).innerHTML = `<b>${
    Math.floor(Math.random() * (num2 - num1 + 1)) + num1
  }</b>`;
}

document.querySelector('.b-2').addEventListener('click', () => {
  unitIItwo(3, 4, '.out-2');
});

///////////
function unitIIthree(elem, num1 = 0, num2 = 10) {
  document.querySelector(elem).innerHTML = `<b>${
    Math.floor(Math.random() * (num2 - num1 + 1)) + num1
  }</b>`;
}

document.querySelector('.b-3').addEventListener('click', () => {
  unitIIthree('.out-3', 9);
});

///////////
function unitIIfour(elem, num1, num2, num3 = 404) {
  document.querySelector(elem).innerHTML = num2 === 0 ? num3 : num1 / num2;
}
unitIIfour('.out-4', 10, 0, 505);

//////////
function unitIIsix(elem, ...arr) {
  document.querySelector(elem).innerHTML = arr;
}
unitIIsix('.out-5', 1, 2, 3, 4, 5, 6);

/////////
function unitIIseven(elem, arr = []) {
  if (typeof arr === 'object') {
    document.querySelector(elem).innerHTML = arr;
  } else {
    document.querySelector(elem).innerHTML = false;
  }
}
unitIIseven('.out-6', [11, 22, 33]);

/////////
function unitIIeight(elem, text) {
  document.querySelector(elem).innerHTML = processingText(text);
}

function processingText(dataText) {
  return dataText.trim().toLowerCase();
}

let textForEight = '    rEtuRn texT Eight ';

unitIIeight('.out-7', textForEight);

////////
function unitIInine(elem, text = '') {
  if (document.querySelector(elem) != null) {
    document.querySelector(elem).innerHTML = processingText(text);
  } else {
    console.log(`Page haven't that querySelector`);
  }
}

let textForNine = '    rEtuRn texT Nine ';

unitIInine('.out-8', textForNine);

///////////
function unitIIten(...args) {
  document.querySelector('.out-9').innerHTML = arguments.length;
}
unitIIten(undefined, 2, null, true, 'a');

///////////
function unitIIeleven(...args) {
  document.querySelector('.out-10').innerHTML = args.reduce(
    (acc, item) => (acc += item)
  );
}
unitIIeleven(1, 2, 3, 40);

///////////
function unitIItwelve(someFunc, someArr) {
  someFunc(someArr);
}

function funcArg(sendArr) {
  document.querySelector('.out-11').innerHTML = sendArr;
}

anyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

unitIItwelve(funcArg, anyArr);

///////////
function unitIIthreteen(someFunc, someArr, someSelector) {
  someFunc(someArr, someSelector);
}

function funcArg2(sendArr, elem) {
  document.querySelector(elem).innerHTML = sendArr;
}

anyArr2 = [0, 0, 0, 1, 2, 3, 4, 5];

unitIIthreteen(funcArg2, anyArr2, '.out-12');

///////////
function unitIIfourteen(num) {
  num % 2 === 0 ? even(num) : odd(num);
}

//let elemDOM = document.querySelector('.out-13').innerHTML;

function even(num) {
  document.querySelector('.out-13').innerHTML = `<b>${num} is even number</b>`;
}

function odd(num) {
  document.querySelector('.out-13').innerHTML = `<b>${num} is odd number</b>`;
}

document.querySelector('.b-4').addEventListener('click', () => {
  unitIIfourteen(Math.floor(Math.random() * 10001));
});
