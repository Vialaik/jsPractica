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

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "36");
      while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "36");
      }
   },
   rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
         let lastVistFilm = prompt(`Один из последних просмотренных фильмов? ${i}`, `nfldbld k,s'd'sdv${i}`);
         let lastVilmReiting = prompt(`На сколько оцените его?${i}`, `${1}`);
         if (
            lastVistFilm != "" &&
            lastVistFilm != null &&
            lastVistFilm.length <= 50 &&
            lastVilmReiting != "" &&
            lastVilmReiting != null &&
            lastVilmReiting.length <= 50
         ) {
            personalMovieDB.movies[lastVistFilm] = lastVilmReiting;
         } else {
            i--;
         }
      }
      console.log(personalMovieDB.movies);
   },
   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         alert("10- просмотров");
      } else if (personalMovieDB.count > 10 && personalMovieDB.count < 10) {
         alert("10+ просмотров");
      } else if (personalMovieDB.count > 30) {
         alert("30+ просмотров");
      }
   },
   showMyDB: function (personalMovieDBPrivat, personalMovieDb) {
      if (personalMovieDBPrivat === true) {
         console.log(personalMovieDb);
      } else {
         console.log("у вас нет доступа!");
      }
   },
   writeYourGenres: function (personalMovieDbGeners) {
      for (let i = 1; i <= 3; i++) {
         let getGeners = prompt(`Ваш любимый жанр под номером ${i} `, "");
         if (getGeners == "" || getGeners == null) {
            console.log("yt dthyj ddtltyj");
            i--;
         } else {
            personalMovieDB.genres[i - 1] = getGeners;
         }
      }
      personalMovieDB.genres.forEach((item, index) => {
         console.log(`Любимый жанр #${index + 1} - это ${item}`);
      });
   },
   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },
};

// ------------------------------------------
//    практика  3 - 29
// ------------------------------------------

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// showMyDB(personalMovieDB.privat, personalMovieDB);

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных

// ------------------------------------------
//    практика  4 - 37
// ------------------------------------------

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания
