// const month = 'february';
// let ruMonth;

// if(month == 'january'){
// 	ruMonth = 'RUjanuary'
// }else if(month == 'february'){
// 	ruMonth = 'RUfebruary'
// }else if(month == 'march'){
// 	ruMonth = 'RUmarch'
// }else if(month == 'april'){
// 	ruMonth = 'RUapril'
// }else if(month == 'may'){
// 	ruMonth = 'RUmay'
// }

// console.log(month);
// console.log(ruMonth);
const month = 'march';

const month2Ru = {
	january : 'RUjanuary',
	february : 'RUfebruary',
	march : 'RUmarch',
	april : 'RUapril',
	may : 'RUmay'
}

const ruMonth = month2Ru[month]

console.log(ruMonth)