//context = scope + var 'this'
//'this' link to object which is calling code right now

let count = 0;

function f1() {
  console.log(count);
  console.log(this);
  this.textContent = count;
  count++;
}

//document.querySelector('.b-1').addEventListener('click', f1);

//arrow function hasn`t 'this' !

// const f2 = () => {
//   console.log(count);
//   console.log(this);
//   this.textContent = count; //!!!!!!
//   count++;
// };

// document.querySelector('.b-2').addEventListener('click', f2);

// ||- call apply -||

// f1.call(document.querySelector('.b-1'));
// f1.call(document.querySelector('.b-1'));
// f1();
// f1.call(document.querySelector('.b-2'));

// document.querySelector('.b-1').addEventListener('click', () => {
//   f1.call(document.querySelector('.b-1'));
// });

document.querySelector('.b-1').addEventListener('click', () => {
  f1.call(document.querySelector('.b-2'));
});

function f3(count) {
  console.log(count);
  console.log(this);
  this.textContent = count;
}

document.querySelector('.b-3').addEventListener('click', () => {
  count++;
  f3.call(document.querySelector('.b-2'), count);
});

function someSumFunc(num1, num2) {
  this.innerHTML = num1 + num2;
}

document.querySelector('.b-2').addEventListener('click', () => {
  someSumFunc.call(document.querySelector('.out-3'), 10, 15);
});

function someSumFunc2(...args) {
  this.innerHTML = args.reduce((acc, item) => (acc += item));
}

const someNumArr = [10, 15, 115, 33];

document.querySelector('.b-4').addEventListener('click', () => {
  someSumFunc2.apply(document.querySelector('.out-4'), someNumArr);
});

// ||- bind -||

const exampleBind = f1.bind(document.querySelector('.out-5'));

document.querySelector('.b-5').addEventListener('click', exampleBind);

const someSumFunc3 = someSumFunc.bind(document.querySelector('.out-6'));

someSumFunc3(60, 50);

// document.querySelector('.b-6').addEventListener('click', someSumFunc3(60, 70));

//partial functions and computations

function someSumFunc4(num1, num2, num3) {
  console.log(arguments);
  this.innerHTML = num1 + num2 + num3;
}

const someSumFunc5 = someSumFunc4.bind(
  document.querySelector('.out-7'),
  10,
  20
);

document.querySelector('.b-7').addEventListener('click', () => {
  someSumFunc5(6);
});

function someSumFunc6(num1, num2, num3) {
  return num1 + num2 + num3;
}

const someSumFunc7 = someSumFunc6.bind(undefined, 55, 66);

document.querySelector('.b-8').addEventListener('click', () => {
  document.querySelector('.out-8').innerHTML = someSumFunc7(100);
});

//Method Pulling

const validate = {
  password: 'testpw',
  email: 'mail@mail.tt',
  isValid: false,
  checkValid() {
    console.log(this);
    return this.password.length > 6 ? true : false;
  },
};

console.log(validate.checkValid());
const otherObj = { password: 'othertestpw' };
const validatePassword = validate.checkValid.bind(otherObj);

console.log(validatePassword());
// document.querySelector('.b-9').addEventListener('click', () => {
//   document.querySelector('.out-9').innerHTML = `${validatePassword()}`;
// });

otherObj.password = 'wakepw';
console.log(validatePassword());
