const testArr = [2, 3, 4, 5, 6];

console.log(testArr.map((item) => item ** 2));

console.log(testArr.filter((item, index) => index % 2 === 0));

//arrow & this !impotante
/*
'this' points at the nearest bound 'this' - in the code provided this is found in the enclosing scope.
*/

document.querySelector('.b-1').addEventListener('click', function () {
  console.log(this);
});
/*
<button class="b-1">
*/

document.querySelector('.b-1').addEventListener('click', () => {
  console.log(this);
});
/*
Window http://127.0.0.1:5500/FunctionPractice/arrow_functions/index.html
*/

const testVar = () => {
  console.log('checked');
};
testVar();

/*const testVar2 = () => {
  console.log(arguments);
  console.log('checked');
};
testVar2(11, 22);*/
//result 'ReferenceError: arguments is not defined'

const testVar3 = (...args) => {
  console.log(args);
  console.log('checked2');
};
testVar3(11, 22);
