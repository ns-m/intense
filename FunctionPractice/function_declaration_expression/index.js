//function declaration
let count = 0;
f1();
function f1() {
  console.log(`run function f1 ${count}`);
  count++;
}
f1();

f2();

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
