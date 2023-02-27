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
    return strArray[Math.floor(0 + Math.random() * strArray.length + 1 - 0)];
  }
  return `${greeting()} ${randomWord()}`;
}

document
  .querySelector('.myButton')
  .addEventListener(
    'click',
    () => (document.querySelector('.out-3').innerHTML = t3())
  );
