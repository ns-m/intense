//context = scope + var 'this'
//'this' link to object which is calling code right now

let count = 0;

function f1() {
  console.log(count);
  console.log(this);
  this.textContent = count;
  count++;
}

document.querySelector('.b-1').addEventListener('click', f1);

//arrow function hasn`t 'this' !

const f2 = () => {
  console.log(count);
  console.log(this);
  this.textContent = count; //!!!!!!
  count++;
};

document.querySelector('.b-2').addEventListener('click', f2);

//call

f1.call(document.querySelector('.b-1'));
f1.call(document.querySelector('.b-1'));
f1();
f1.call(document.querySelector('.b-2'));
