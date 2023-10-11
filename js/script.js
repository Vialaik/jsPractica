/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: true,
};

// let lastVistFilm = prompt("Один из последних просмотренных фильмов?", ""),
//    lastVilmReiting = prompt("На сколько оцените его?", ""),
//    lastVistFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
//    lastVilmReiting2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastVistFilm] = lastVilmReiting;
personalMovieDB.movies[lastVistFilm2] = lastVilmReiting2;

console.log(personalMovieDB);
// console.log(typeof personalMovieDB.count);

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
