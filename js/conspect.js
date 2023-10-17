"use strict";

//---------------------------------------------------------------------------
//                            ПЕРЕМЕННЫЕ
//---------------------------------------------------------------------------
let number5 = 5;
let NUmber = 5;

const primeryConst = 34;

//---------------------------------------------------------------------------
//                            ТИПИ ДАННИХ
//---------------------------------------------------------------------------

//number = 24; //  число
//string = "hfbvf"; // рядок записується в в лапках
// booleans = false / true; // Булевий або логічний тип. Логічний тип може приймати лише два значення: true (істина) та false (хиба).
// null; // спеціальне значення, яке представляє “нічого”, “порожнє” або “невідоме значення”.
// undefined; // означає, що “значення не присвоєно”.
// Symbol; //використовується для створення унікальних ідентифікаторів в об’єктах.
// BigInt; // спеціальний числовий тип, який забезпечує підтримку цілих чисел довільної довжини. створюється через додавання n у кінець цілого числа

//ОБЬЄКТИ

let users = `nsnd`; // синтаксис "конструктора об’єктів"
let user = {
   // синтаксис "літералу об’єкта
   name: "Іван", // за ключем "name" зберігаємо значення "Іван"
   age: 30, // за ключем "age" зберігати значення "30"
};
// отримаємо значення властивостей об’єкта:

//---------------------------------------------------------------------------
//                            ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ
//---------------------------------------------------------------------------

// alert(user.name); // Іван
// alert(user.age); // 30
// let erroress = confirm(`lknlkve`);
// let answer = prompt(`mv;lfv 18`, `17`);
// console.log(erroress);
// console.log(typeof erroress);

// console.log(answer);
// console.log(typeof answer);

const personDecr = [];
personDecr[0] = prompt(`цвет глаз`, `зеленый`);
personDecr[1] = prompt(`цвет волос`, `белый`);
personDecr[2] = prompt(`цвет кожи`, `коричневы`);

// document.write(personDecr);

// ИНТЕРПОЛЯЦИЯ
let ketu = `штангу`;
let ketuCount = 4;
console.log(`подять ${ketu} ${ketuCount} раза`);

//---------------------------------------------------------------------------
//                            ОПЕРАРТОРЫ
//---------------------------------------------------------------------------

// + влажует числа и канкатинирует строк, + перед строкой содержащей цифры - меняет тип со строки на число
console.log(4 + 4);
console.log(`жвачка ` + `персик`);
console.log(`4` + +`4`);
console.log(4 + +`4`);
// ++ инкримент - дискримент, префиксные - постфиксный (до и после)
let incr = 10;
let desc = 10;
++incr;
desc--;
console.log(incr);
console.log(desc);
// % отдает ОСТАТОК от диления
console.log(10 % 3);
// = присвоение
// == равенство (проверяет по значению)
// === строгое равенство (проверяет по типу)
console.log(4 + 4 == `8`);
// && - и
// || - или
// ! - отрицание (не)

//---------------------------------------------------------------------------
//                            УСЛОВИЯ
//---------------------------------------------------------------------------

// if else
if (4 == 6) {
   console.log(`ok!`);
} else {
   console.log(`ERROR!`);
}

// тенарный оператор

// num == 5 ? console.log(`true`) : console.log(`false`);

// // switch case
// let num = 4;
// switch (num) {
//    case 6:
//       console.log(`менше`);
//       break;
//    case 10:
//       console.log(`менше`);
//       break;
//    case 3:
//       console.log(`больше`);
//       break;
//    case 5:
//       console.log(`ОК`);
//       break;
//    default:
//       console.log(`не угодал`);
//       break;
// }

//---------------------------------------------------------------------------
//                            ЦЫКЛЫ
//---------------------------------------------------------------------------

// let num = 5;

while (num < 53) {
   console.log(num);
   num++;
}

do {
   console.log(num);
   num++;
} while (num <= 9);

for (let index = 0; index <= 6; index++) {
   console.log(num);
   num++;
}

// _______________________________________________________________
//                         Задачи по циклам
//----------------------------------------------------------------

for (let index = 5; index <= 10; index++) {
   console.log(index);
}

for (let index = 20; index > 10; index--) {
   if (index == 13) {
      break;
   }
   console.log(index);
}

for (let index = 2; index <= 10; index++) {
   switch (index) {
      case 2:
         console.log(index);
         break;

      case 3:
         continue;
      case 4:
         console.log(index);
         break;

      case 5:
         continue;
      case 6:
         console.log(index);
         break;
      case 7:
         continue;
      case 8:
         console.log(index);
         break;
      case 9:
         continue;
      case 10:
         console.log(index);
         break;
      default:
         break;
   }
}

for (let i = 2; i <= 16; i++) {
   if (i % 2 === 0) {
      continue;
   } else {
      console.log(i);
   }
}

let i = 2;
while (i < 16) {
   i++;
   if (i % 2 === 0) {
      continue;
   } else {
      console.log(i);
   }
}

const arrayOfNumbers = [];
for (let index = 5; index <= 10; index++) {
   arrayOfNumbers[index - 5] = index;
}
console.log(arrayOfNumbers);

// 2 часть
// ------------------------------------------------

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let index = 0; index < arr.length; index++) {
//    result[index] = arr[index];
// }
// console.log(result);

// const data = [5, 10, "Shopping", 20, "Homework"];
for (let index = 0; index < data.length; index++) {
   if (typeof data[index] === "number") {
      data[index] = data[index] * 2;
   } else if (typeof data[index] === "string") {
      data[index] = `${data[index]} - done`;
   }
}
// console.log(data);

const data = [5, 10, "Shopping", 20, "Homework"];

for (let i = 1; i <= data.length; i++) {
   result[i - 1] = data[data.length - i];
}

// _______________________________________________________________
//                         ФУНКЦИИ
//----------------------------------------------------------------

function chowFirstMassege(text) {
   console.log(text);
}
chowFirstMassege("hello word");

// function declaration
// ------------------------------------------------
function calc(x, r, t) {
   return x + r - t;
}
console.log(calc(3, 6, 7));

// function expresion
// ------------------------------------------------
let func = function (x, r, t) {
   return x + r - t;
};
console.log(func(3, 32, 7));

// function Arrow (стрелочная функция)
// ------------------------------------------------
let funcArrow = (x, r, t) => {
   return x + r - t;
};
console.log(funcArrow(3, 6, 12));

// Решение задач по функциях
// ------------------------------------------------
function sayHello(name) {
   return `Привет ${name}`;
}
console.log(sayHello("Антон"));

function returnNeighboringNumbers(num) {
   let numbers = [];
   numbers[0] = num - 1;
   numbers[1] = num;
   numbers[2] = num + 1;
   return numbers;
}
console.log(returnNeighboringNumbers());

function getMathResult(num, count) {
   if (typeof count != "number" || count <= 0) {
      return num;
   }
   let str = "";
   for (let i = 1; i <= count; i++) {
      if (i === count) {
         str += `${num * i}`;
      } else {
         str += `${num * i}---`;
      }
   }
   return str;
}
console.log(getMathResult(5, 3));
// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое
//  число со значением длины ребра куба.Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

function calculateVolumeAndArea(h) {
   if (typeof h !== "number" || h < 0) {
      return "При вычислении произошла ошибка";
   }
   let s = 6 * h * h;
   let v = h * h * h;
   return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
}
// calculateVolumeAndArea(5);
console.log(calculateVolumeAndArea(5));

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
function getCoupeNumber(num) {
   if (num !== "number" && num <= 0 && Math.sign(num) !== -1) {
      ("Ошибка. Проверьте правильность введенного номера места");
   }
}
