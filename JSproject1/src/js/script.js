/* const number0fFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; */
/* const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?','');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB); */


/* start(); */

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        while(personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count == ''){
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
            for (let i = 0; i<2; i++) {
                const a = prompt('Один из последних просмотренных фильмов?', ''),
                      b = prompt('На сколько оцените его?','');
                    if(a !=null && b !=null && a.length < 50 && a != '' && b != '') {
                        personalMovieDB.movies[a] = b;
                        console.log("Ok!");
                    } else {
                        console.log('Error');
                        i--;
                    }  
            }
        },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30){
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB(hidden){
        if (!hidden) {
            console.log(personalMovieDB); 
        } 
    },
    writeYourGenres(){
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres [i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
        }
    },

};

/* function rememberMyFilms(){
    for (let i = 0; i<2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?','');
            if(a !=null && b !=null && a.length < 50 && a != '' && b != '') {
                personalMovieDB.movies[a] = b;
                console.log("Ok!");
            } else {
                console.log('Error');
                i--;
            }  
    }
} */
/* rememberMyFilms(); */

/* function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
} */

/* function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB); 
    } 
} */
/* showMyDB(personalMovieDB.privat); */

/* function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres [i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
} */
/* writeYourGenres();
console.log(personalMovieDB);
 */