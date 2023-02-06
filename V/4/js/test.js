const input = [
  { value: "qweq", order: 4, expired: false },
  { value: "asdq", order: 2, expired: true },
  { value: "jkri", order: 1, expired: false },
  { value: "oiod", order: 3, expired: false },
];

// let result = input.filter((item) => item.expired == false);

let sortResult = input
  .filter((item) => item.expired == false)
  .sort(function (a, b) {
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
    return 0;
  });

function revStr(el) {
  if (el === "") return "";
  else return revStr(el.substr(1)) + el.charAt(0);
}

let set = new Set();
let finalResult = "";

let newSortResult = sortResult.map((el) => revStr(el.value)).join("");
for (let i of newSortResult) {
  set.add(i);
}

for (let i of set) {
  finalResult += i;
}

console.log(finalResult);
