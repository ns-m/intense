/*
sum array

*/

// const myArr = [[1,2, [3,4]], [9], [10,12]];

// function flat(arr){
//     let res = [];

//     arr.forEach(element => {
//         if(Array.isArray(element)){
//             res = res.concat(flat(element));
//             // res =[
//             //     ...res,
//             //     ...flat(element)
//             // ]
//         }else{
//             res.push(element);
//         }
//     });
//     return res
// }

//console.log(flat(myArr));

//const result = myArr.flat(Infinity).reduce((acc, next) => acc + next);
//const result = flat(myArr).reduce((acc, next) => acc + next);
// const result = flat(myArr);

// console.log(result);

/*
const parseQuery = () => {
  const url = new URL("https://somedomain.dev?name=hello&title=world");
  const search = url.search;
  let query = {};
  search
    .slice(1)
    .split("&")
    .forEach((item) => {
      const [key, value] = item.split("=");
      query[key] = decodeURIComponent(value);
    });
  return query;
};
// {name: "hello", title: "world"}
*/

// const parseQuery2 = () => {
//   const url = new URL("https://somedomain.dev?name=hello&title=world");
//   const search = url.search;
//   return search
//     .replace(/(^?)|(&$)/g, "")
//     .split("&")
//     .reduce((query, item) => {
//       const [key, value] = item.split("=");
//       query[key] = decodeURIComponent(value);
//       return query;
//     }, {});
// };
// {name: "hello", title: "world"}

for (var i = 0; i < 50; i++){
    setTimeout(() => {
        console.log(i)
    }, 0)
}

for (let i = 0; i < 50; i++){
    setTimeout(() => {
        console.log(i)
    }, 0)
}

for (var i = 0; i < 50; i++){
    setTimeout((n) => {
        console.log(n)
    }, 0, i)
}