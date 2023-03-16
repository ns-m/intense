//'use strict';

//function declaration
let count = 0;
f1();
function f1() {
  console.log(`run function f1 ${count}`);
  count++;
}
f1();

try {
  f2();
} catch (error) {
  console.log('f2 error');
}

if (true) {
  function f2() {
    console.log(`run function f2 if ${count}`);
    count++;
  }
} else {
  function f2() {
    console.log(`run function f2 else ${count}`);
    count++;
  }
}

f2();

//function expression

const f3 = function () {
  console.log(`run function f3 ${count}`);
  count++;
  console.log(this.name);
  console.log(f3.name);
};

f3();

const f4 = function exampleF4() {
  console.log(`run function exampleF4 ${count}`);
  console.log(this.name);
  console.log(f4.name);
  console.log(exampleF4.name);
  count++;
};

//exampleF4(); //exampleF4 is not defined

f4();
