function unixTime() {
  let pcTime = Math.floor(new Date().getTime());
  console.log(pcTime);
}

unixTime();
setTimeout(unixTime, 5000);

// function randomeInt(minInt, maxInt) {
//   return console.log(Math.floor(minInt + Math.random() * maxInt + 1 - minInt));
// }

//randomeInt(100, 200);

//randomeInt(10, 1000);

let minInt = 0;
let maxInt = 30;

const strArray =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, unde a. Minima, dolorum ducimus explicabo doloribus impedit accusantium atque rem. Laudantium reiciendis accusantium quidem. Incidunt illo aspernatur tempora esse explicabo!'.split(
    ' '
  );

function randomeInt() {
  return console.log(Math.floor(minInt + Math.random() * maxInt + 1 - minInt));
}

document.querySelector('.element').addEventListener('mousemove', randomeInt);

document
  .querySelector('.element')
  .addEventListener(
    'click',
    console.log(
      strArray[Math.floor(minInt + Math.random() * maxInt + 1 - minInt)]
    )
  );
