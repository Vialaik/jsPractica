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
let numberOfFilms;

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: true,
};
function start() {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "36");
   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "36");
   }
}
// start();
// let lastVistFilm = prompt("Один из последних просмотренных фильмов?", ""),
//    lastVilmReiting = prompt("На сколько оцените его?", ""),
//    lastVistFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
//    lastVilmReiting2 = prompt("На сколько оцените его?", "");

function rememberMyFilms() {
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
}
// rememberMyFilms();

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      alert("10- просмотров");
   } else if (personalMovieDB.count > 10 && personalMovieDB.count < 10) {
      alert("10+ просмотров");
   } else if (personalMovieDB.count > 30) {
      alert("30+ просмотров");
   }
}
// detectPersonalLevel();
// personalMovieDB.movies[lastVistFilm] = lastVilmReiting;
// personalMovieDB.movies[lastVistFilm2] = lastVilmReiting2;

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
function showMyDB(personalMovieDBPrivat, personalMovieDb) {
   if (personalMovieDBPrivat === true) {
      console.log(personalMovieDb);
   } else {
      console.log("у вас нет доступа!");
   }
}
// showMyDB(personalMovieDB.privat, personalMovieDB);

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres
function writeYourGenres(personalMovieDbGeners) {
   for (let i = 0; i <= 2; i++) {
      let getGeners = prompt(`Ваш любимый жанр под номером ${i + 1} `, "");
      if (getGeners !== "" && getGeners !== null && getGeners.length <= 20) {
         personalMovieDbGeners[i] = getGeners;
      } else {
         i--;
      }
   }
   console.log(personalMovieDB.genres);
}
writeYourGenres(personalMovieDB.genres);
