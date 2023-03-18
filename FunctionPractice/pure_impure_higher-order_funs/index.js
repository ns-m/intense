// Pure functions
function squad(num) {
  return num ** 2;
}

//Not Pure functions

function notPureFunc(num) {
  //document.querySelector('.out-1').innerHTML = num ** 2;
  document.querySelector('.out-1').innerHTML = squad(num);
}

let count = 0;

function notPureFunc2() {
  return count++;
}

function notPureFunc3() {
  alert('not Pure Func');
}
