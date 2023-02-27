function getRandomInt() {
  let minInt = 117;
  let maxInt = 132;
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

document.querySelector('.out-1').innerHTML = getRandomInt();

const strArray =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, unde a. Minima, dolorum ducimus explicabo doloribus impedit accusantium atque rem. Laudantium reiciendis accusantium quidem. Incidunt illo aspernatur tempora esse explicabo!'.split(
    ' '
  );

const greetingsArr = [
  'Hello',
  'Hi',
  'Good morning',
  'Good afternooon',
  'Good evening',
];

function t3() {
  function greeting() {
    return greetingsArr[Math.floor(Math.random() * greetingsArr.length)];
  }
  function randomWord() {
    return strArray[Math.floor(Math.random() * strArray.length)];
  }
  return `${greeting()}, ${randomWord()}`;
}

document
  .querySelector('.myButton')
  .addEventListener(
    'click',
    () => (document.querySelector('.out-3').innerHTML = t3())
  );

function t4() {
  function greeting() {
    return greetingsArr[Math.floor(Math.random() * greetingsArr.length)];
  }
  function randomWord() {
    return strArray[Math.floor(Math.random() * strArray.length)];
  }
  return `${greeting()}, ${randomWord()}`;
}

function t4b() {
  return t4();
}

document
  .querySelector('.myButton2')
  .addEventListener(
    'click',
    () => (document.querySelector('.out-4').innerHTML = t4b())
  );

function myEven() {
  console.log('Number is even');
}

function myOdd() {
  console.log('Number is odd');
}

function t5() {
  let myInputNum = document.querySelector('.i-5').value;
  if (myInputNum % 2 === 0) {
    myEven();
  } else {
    myOdd();
  }
}

function t6() {
  document.querySelector('.out-5').innerHTML = getRandomInt();
  document.querySelector('.out-5').innerHTML % 2 === 0
    ? (document.querySelector('.out-6').innerHTML = 'Number is even')
    : (document.querySelector('.out-6').innerHTML = 'Number is odd');
}

t6();
