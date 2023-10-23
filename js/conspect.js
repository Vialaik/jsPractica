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
   let s = 0;
   let v = 0;
   s = h * h * 6;
   v = h * h * h;
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
   if (typeof num !== "number" || num <= 0 || num >= 36 || !Number.isInteger(num)) {
      return "не верно введенные данные!";
   }
   let numKup = Math.ceil(num / 4);
   return numKup;
}
console.log(getCoupeNumber(23));

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
// (Смотри пример).
// Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

function getTimeFromMinutes(min) {
   if (typeof min !== "number" || min < 0 || !Number.isInteger(min)) {
      return "Ошибка, проверьте данные";
   }
   let hour = Math.floor(min / 60);
   let minRemaning = min % 60;
   let hoursStr = "";
   switch (hour) {
      case 0:
         hoursStr = "часов";
         break;
      case 1:
         hoursStr = "час";
         break;
      case 2:
      case 3:
      case 4:
         hoursStr = "часа";
         break;
      default:
         hoursStr = "часов";
   }
   return `Это ${hour} ${hoursStr} и ${minRemaning} минут`;
}
console.log(getTimeFromMinutes(1215));

// arguments.length;
// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
// Если один из аргументов не является числом или их меньше 4 - возвращается 0.
// Дробные числа разрешены.
function findMaxNumber(num1, num2, num3, num4, num5) {
   for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== "number" || arguments.length <= 3) {
         return 0;
      } else {
      }
   }
   return Math.max(num1, num2, num3, num4, num5);
}
console.log(findMaxNumber(2, 96, 45, 67, 343));

// const personalPlanPeter = {
//    name: "Peter",
//    age: "29",
//    skills: {
//       languages: ["ru", "eng"],
//       programmingLangs: {
//          js: "20%",
//          php: "10%",
//       },
//       exp: "1 month",
//    },
// };

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// function showExperience({
//    name,
//    age,
//    skills: {
//       languages: [ru, eng],
//       programmingLangs: { js, php },
//       exp,
//    },
// }) {
//    return `${exp}`;
// }
// console.log(showExperience(personalPlanPeter));

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.
// const personalPlanPeter = {
//    name: "Peter",
//    age: "29",
//    skills: {
//       languages: ["ru", "eng"],
//       programmingLangs: {
//          js: "20%",
//          php: "10%",
//       },
//       exp: "1 month",
//    },
// };
// function showProgrammingLangs(plan) {
//    let text = "";
//    let { programmingLangs } = plan.skills;
//    for (const key in programmingLangs) {
//       text += `Язык ${key} изучен на ${programmingLangs[key]} \n`;
//    }
//    return text;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.
// При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре(большими буквами).
// Если данные в объекте поменяются, то и сообщение тоже изменится.

const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
      languages: ["ru", "eng"],
      programmingLangs: {
         js: "20%",
         php: "10%",
      },
      exp: "1 month",
   },

   showAgeAndLangs: function (plan) {
      let { age: ani = 22 } = plan;
      let { languages: language = "en" } = plan.skills;
      let message = `Мне ${ani} и я владею языками: `;
      language.forEach(function (lang) {
         message += `${lang.toUpperCase()} `;
      });

      return message;
   },
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
const rainbow = ["red", "orange", "yellow", "green"];
function showFamily(arr) {
   // const [name1, name2, name3, name4] = rainbow;
   // return `Семья состоит из: ${name1} ${name2} ${name3} ${name4}`;
   let message = `Семья состоит из: `;
   if (arr.length > 0) {
      arr.forEach(function (item) {
         message += `${item} `;
      });
   } else {
      message = "Семья пуста";
   }

   return message;
}
console.log(showFamily(rainbow));

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
   arr.forEach(function (item) {
      console.log(`${item}`.toLowerCase());
   });
}
console.log(standardizeStrings(favoriteCities));

// _______________________________________________________________
//      Основы ООП, прототипно - ориентированное наследовани
//----------------------------------------------------------------
const soldier = {
   health: 400,
   armor: 100,
   seyHello: function () {
      console.log("hello");
   },
};
// const Jon = {
//    health: 100,
// };

// Object.setPrototypeOf(Jon, soldier);
const jon = Object.create(soldier);
console.log(jon.seyHello());

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData.
// Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения;
// стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку.
// Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.И все 🙂
// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.
const shoppingMallData = {
   shops: [
      {
         width: 10,
         length: 5,
      },
      {
         width: 15,
         length: 7,
      },
      {
         width: 20,
         length: 5,
      },
      {
         width: 8,
         length: 10,
      },
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000,
};

function isBudgetEnough(data) {
   let squere = 0;
   let volume = 0;

   data.shops.forEach((shop) => {
      squere += shop.width * shop.length;
   });
   volume = squere * data.height;
   if (data.budget - volume * data.moneyPer1m3 >= 0) {
      return "Бюджета достаточно";
   } else {
      return `Бюджета недостаточно ${data.budget - volume * data.moneyPer1m3} грн`;
   }
}
console.log(isBudgetEnough(shoppingMallData));

// У вас есть список учеников, которые хотят поиграть в игру:
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
// Эти группы должны быть массивами.Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
const students = ["Peter", "Andrew", "Ann", "Mark", "Josh", "Sandra", "Cris", "Bernard", "Takesi", "Sam"];
function sortStudentsByGroups(arr) {}
console.log(sortStudentsByGroups(students));

// _______________________________________________________________
//                   Динамическая типезация
//----------------------------------------------------------------

// Преоброзование в строку
//  1) String (String(4))
//  2) Конкатинация со строкой (5 + "")
// Преоброзование в число
//  1)Number (Number('4'))
//  2)Унарный плюс (+('4'))
//  2)parseInt (parseint('15px'))
// Преоброзование а логическое(boolean) значени
//  1) в Fals => 0, '', null, NaN
//  2) Boolean()
//  3) !! (!!"4")
