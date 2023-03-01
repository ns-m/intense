function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.out-1').innerHTML = randomInt(0, 100);
document.querySelector('.out-1').style.background = `rgb(${randomInt(0, 255)}, 
${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.b-3').addEventListener('click', () => {
  let inputStr = document.querySelector('.i-3').value;
  console.log(inputStr);
  console.log(`Other log ${processingInput(inputStr)}`);
  return (document.querySelector(
    '.out-3'
  ).innerHTML = `Your input: <strong>${processingInput(inputStr)}</strong>`);
});

function processingInput(input) {
  return input.trim().toLowerCase();
}

function indexOfEmul(arr, num) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === num) return index;
  }
  return -1;
}

console.log(indexOfEmul([11, 22, 33, 44, 55], 4));

document.querySelector('.b-4').addEventListener('click', () => {
  let userAgeInput = document.querySelector('.i-4').value;
  //   try {
  //     userAgeInput = parseInt(userAgeInput);
  //   } catch {
  //     document.querySelector('.out-4').innerHTML = 'You nave inputed NaN';
  //   }
  let today = new Date();
  if (isNaN(userAgeInput))
    return (document.querySelector('.out-4').innerHTML =
      'You nave inputed NaN');
  if (userAgeInput >= 16 && userAgeInput <= 100) {
    document.querySelector('.out-4').innerHTML = `You born in ${
      today.getFullYear() - userAgeInput
    } year`;
  } else {
    document.querySelector('.out-4').innerHTML =
      'You nave inputed incorrect age';
  }
});

////////
console.group('start example log 1');
const testSumArr = [
  [1, 2, 3],
  [4, 5, 5],
];
function sumTestArr(array) {
  let result = 0;
  for (let index = 0; index < array.length; index++) {
    for (let ind = 0; ind < array[index].length; ind++) {
      result += array[index][ind];
    }
  }
  return result;
}
console.log(sumTestArr(testSumArr));
console.groupEnd();

////////
console.group('start example log 2');

function sumArr(array) {
  return array.reduce((acc, item) => (acc += item));
}

const testSumArr2 = [
  [1, 2, 3],
  [4, 5, 5],
  [7, 1, 3],
  [4, 5, 9],
];

const evenArr = testSumArr2.filter((item) => {
  return sumArr(item) % 2 === 0;
});

console.log(evenArr);

console.groupEnd();

///////
console.group('start example log 3');

function returnSomeFunc() {
  return sumArr;
}

let resulReturnSomeFunc = returnSomeFunc();

console.log(resulReturnSomeFunc([10, 20, 30]));

console.groupEnd();
