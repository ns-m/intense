function sendDataToSelector(elem, someFun) {
  return (document.querySelector(elem).innerHTML = someFun);
}

// function eventForSendData(elemForEvent, someEventFunc) {
//   document.querySelector(elemForEvent).addEventListener('click', () => {
//     someEventFunc;
//   });
// }

// Task 1
// Напишите функцию t1, которая возвращает сумму переданных ей аргументов a и b.

function unitIIIone(num1, num2) {
  return num1 + num2;
}

//eventForSendData('.b-1', sendDataToSelector('.out-1', unitIIIone(10, 5)));

document.querySelector('.b-1').addEventListener('click', () => {
  sendDataToSelector('.out-1', unitIIIone(10, 55));
});

// Task 2.

//Напишите функцию t2, которая принимает 2 аргумента и возвращает больший из них.

function unitIIItwo(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
//eventForSendData('.b-2', sendDataToSelector('.out-2', unitIIItwo(10, 5)));
document.querySelector('.b-2').addEventListener('click', () => {
  sendDataToSelector('.out-2', unitIIItwo(10, 55));
});

// Task 3.
// На странице есть checkbox .ch-3. Напишите функцию, которая возвращает его value если он выбран и false если не выбран.

function unitIIIthree() {
  return prompt('Input data', '');
}

document.querySelector('.b-3').addEventListener('click', () => {
  if (document.querySelector('.ch-3').checked === true) {
    sendDataToSelector('.out-3', unitIIIthree());
  } else {
    sendDataToSelector('.out-3', 'false');
  }
});

// Task 4
// На странице есть radiobutton .r-4. Напишите функцию, которая возвращет value выбранного radiobutton.

document.querySelector('.b-4').addEventListener('click', () => {
  document.querySelectorAll('.r-4').forEach((elem) => {
    if (elem.checked === true) {
      document.querySelector('.out-4').innerHTML = elem.value;
    }
  });
});

// Task 5
// Напишите функцию t5, которая получает из s51 число, из s52 знак и из s53 число и возвращает результат математической операции над этими числами с этим знаком. Т.е. возвращает или сумму чисел, или произведение, или разность или деление.

//console.log(typeof num1Arr);

function unitIIIfive(arrElemSelect) {
  for (let index = 0; index < arrElemSelect.length; index++) {
    if (arrElemSelect[index].selected === true) {
      return arrElemSelect[index].value;
    }
  }
}

document.querySelector('.b-5').addEventListener('click', () => {
  const num1Arr = document.querySelector('.s51');
  const operArr = document.querySelector('.s52');
  const num2Arr = document.querySelector('.s53');

  const mathOperations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  };

  document.querySelector('.out-5').innerHTML = mathOperations[
    unitIIIfive(operArr)
  ](unitIIIfive(num1Arr) * 1, unitIIIfive(num2Arr) * 1);
});

// Task 6
// Напишите функцию, которая принимает три аргумента: num1, num2 - числа и sign - строку знак операции. sign может быть равен '+', '-', '/', '*'. В зависимости от знака функция должна возвращать результат выбранной операции над числами. Например передали числа 10 и 5 и знак '/'. Функция должна возвратить 2.

function unitIIIsix(num1, num2, sign = ['+', '-', '/', '*']) {
  if (sign === '+') {
    return num1 + num2;
  } else if (sign === '-') {
    return num1 - num2;
  } else if (sign === '/') {
    return num1 / num2;
  } else {
    return num1 * num2;
  }
}

document.querySelector('.b-6').addEventListener('click', () => {
  document.querySelector('.out-6').innerHTML = unitIIIsix(5, 10, '/');
});

// Task 7
// Напишите функцию, которая принимает аргумент и возвращает true если аргумент число и false во всех остальных случаях

function unitIIIseven(params) {
  params = prompt('Input data', '');
  return isNaN(params) ? false : true;
}

document.querySelector('.b-7').addEventListener('click', () => {
  document.querySelector('.out-7').innerHTML = unitIIIseven();
});

// Task 8
// Напишите функцию, которая принимает число дробь (например 23.34) и параметр 'floor' или 'ceil' и возвращает число с соответствующим округлением ( либо floor либо ceil).

function unitIIIeight(number, param) {
  number = prompt('Input number', '');
  param = prompt('Input param', '');
  if (param === 'floor') {
    return Math.floor(number);
  } else if (param === 'ceil') {
    return Math.ceil(number);
  } else {
    alert('You inputed wrong parametr!');
  }
}

document.querySelector('.b-8').addEventListener('click', () => {
  document.querySelector('.out-8').innerHTML = unitIIIeight();
});

// Task 9
// Напишите функцию, которая принимает число и степень в которую нужно возвести число. Возвращает true если число возведенное в степень четное и false если не четное.

function unitIIInine(number, degree) {
  number = prompt('Input number', '');
  degree = prompt('Input degree number', '');
  if (number ** degree % 2 === 0) {
    return `${number ** degree} even number = true`;
  } else {
    return `${number ** degree} even number = false`;
  }
}

document.querySelector('.b-9').addEventListener('click', () => {
  document.querySelector('.out-9').innerHTML = unitIIInine();
});

// Task 10
// Напишите функцию, t10, которая возвращает количество переданных ей аргументов (число).

function unitIIIten(...args) {
  return args.length;
}

document.querySelector('.b-10').addEventListener('click', () => {
  document.querySelector('.out-10').innerHTML = unitIIIten(
    1,
    2,
    'a',
    4,
    5,
    null
  );
});

// Task 11
// Напишите функцию, t11, которая возвращает cумму переданных ей аргументов (число). Используем arguments.

function unitIIIeleven(...args) {
  return args.reduce((acc, elem) => (acc += elem));
}

document.querySelector('.b-11').addEventListener('click', () => {
  document.querySelector('.out-11').innerHTML = unitIIIeleven(1, 2, 30);
});

// Task 12
// Напишите функцию, t12, которая возвращает cумму переданных ей аргументов (число). Используем rest.

// Task 13
// Напишите функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.

function unitIIIthirteen(min = 10, max = 20) {
  min = prompt('Input min number', '') * 1;
  max = prompt('Input max number', '') * 1;
  return Math.floor(min + Math.random() * (max + 1 - min));
}

document.querySelector('.b-13').addEventListener('click', () => {
  document.querySelector('.out-13').innerHTML = unitIIIthirteen();
});

// Task 14
// Напишите функцию, которая возвращает строку в виде rgb(xxx,yyy,zzz) где xxx, yyy, zzz случайные целые числа в диапазонах от 0 до 255. В строке не должно быть пробелов. Для генерации случайных чисел используйте функцию t13.

document.querySelector('.b-14').addEventListener('click', () => {
  let result = `${unitIIIthirteen()},${unitIIIthirteen()},${unitIIIthirteen()}`;
  document.querySelector('.out-14').innerHTML = result;
  document.querySelector('.out-14').style.background = `rgb(${result})`;
});

// Task 15
// Напишите функцию, которая получает строку как аргумент и возвращает строку очищенную от пробелов ( с начала и конца) или false если строка содержит только пробелы.

function unitIIIfifteen(string) {
  string = prompt('Input string', '');
  if (string.trim() === '') {
    return false;
  } else {
    return string.trim();
  }
}

document.querySelector('.b-15').addEventListener('click', () => {
  document.querySelector('.out-15').innerHTML = unitIIIfifteen();
});

// Task 16
// Напишите функцию, которая получает строку как аргумент и возвращает строку приведенную к нижнему регистру.

// Task 17
// Напишите функцию, которая получает value выбранного option select.s-171 и возвращает его.

document.querySelector('.b-17').addEventListener('click', () => {
  const num1Arr = document.querySelector('.s-171');
  const num2Arr = document.querySelector('.s-172');

  document.querySelector('.out-17').innerHTML = `${unitIIIfive(num1Arr)} 
  ${unitIIIfive(num2Arr)}`;
});

// Task 18
// Напишите функцию, которая получает value из input.i-18 и возвращает его.

function unitIIIeithtteen(elem) {
  return document.querySelector(elem).value;
}

document.querySelector('.i-18').addEventListener('click', () => {
  document.querySelector('.out-18').innerHTML = unitIIIeithtteen('.i-18');
});

// Task 19
// Напишите функцию, которая получает value из input.i-19 и возвращает его.

document.querySelector('.i-19').addEventListener('click', () => {
  document.querySelector('.out-19').innerHTML = unitIIIeithtteen('.i-19');
  document.querySelector('.out-19').style.background =
    unitIIIeithtteen('.i-19') > 50 ? `red` : `orange`;
});

// Task 20
// Напишите функцию, которая получает строку и возвращает "развернутую" строку.

function unitIIItwenty(string) {
  string = prompt('Input string:', '');
  return string.split('').reverse().join('');
}

document.querySelector('.b-20').addEventListener('click', () => {
  document.querySelector('.out-20').innerHTML = unitIIItwenty();
});

// Task 21
// Напишите функцию, которая в зависимости от параметра even или odd возвращает случайное целое четное (even) или не четное (odd) число от 10 до 20.
// Для генерации случайного числа используйте t13.

function unitIIItwentyone(param) {
  //param = prompt('Input parametr:', '');
  let result = unitIIIthirteen();
  if (param === 'even' && result % 2 === 0) {
    return result;
  } else if (param === 'even' && result % 2 !== 0) {
    return (result += 1);
  } else if (param === 'odd' && result % 2 !== 0) {
    return result;
  } else {
    return (result -= 1);
  }
}

document.querySelector('.b-21').addEventListener('click', () => {
  document.querySelector('.out-21').innerHTML = unitIIItwentyone('odd');
});

// Task 22
// Напишите функцию callback22, которая принимает параметр item и если он четный то возвращает true. Если все выполнено верно, то на выходе вы получите только массив четных элементов из массива ar22.

const ar22 = [3, 4, 5, 6, 7, 8, 9, 10];

function callback22(numArr) {
  return numArr.filter((elem) => elem % 2 === 0);
}

document.querySelector('.b-22').addEventListener('click', () => {
  document.querySelector('.out-22').innerHTML = callback22(ar22);
});

// Task 23
// Напишите функцию callback23, которая принимает параметр item и возвращает его возведенным во вторую степень.

const ar23 = [3, 4, 5, 6, 7, 8];

// Task 24
// Напишите функцию callback24, которая принимает параметр item и возвращает его возведенным во вторую степень.

const ar24 = [3, 4, 5, 6, 7, 8];

// Task 25
// Напишите функцию которая принимает массив как аргумент и проверяет что в нем одни числа. Возвращает true если это так и false в противном.

// Task 26
// Напишите функцию которая получает из input.i-26 имя пользователя и если это не пустая строка - то выводит его в out-26 в нижнем регистре. Если строка пустая - то выходит из функции.

// Task 27
// Напишите функцию которая получает из input.i-27 значение как аргумент и проверяет его наличие в объекте obj27. Если находит совпадение - возвращает ключ. Если не находит - false.

const obj27 = {
  h: 'a',
  j: 'b',
  k: 'z',
  m: 'w',
};

// Task 28
// Напишите функцию которая принимает два аргумента - строку и подстроку и если подстрока есть в строке - возвращает true, если нет false.

// Task 29
// Напишите функцию, которая получает в качестве аргументов строки и возвращает большую строку (прямым сравнением).

// Task 30
// Напишите функцию t30, которая возвращает функцию t31
