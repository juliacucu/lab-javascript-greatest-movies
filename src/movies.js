// The `movies` array from the file `src/data.js`.


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require('./data')

function getAllDirectors(movies) {
  const allDirectors = movies.map((film) => {
    return film.director
  })
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let dramaMovies = movies.filter((film) =>{
    return film.director === 'Steven Spielberg' && film.genre.includes('Drama')
  })
  return dramaMovies.length
}
  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let scoreMovies = movies.filter((film) => {
    return film.score.toFixed(2)
	})
  let average = scoreMovies.reduce((acc, film) => {
    return acc + film.score / scoreMovies.length
  }, 0)
  return parseFloat(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((film) => {
    return film.genre.includes('Drama')
  })
 	let average = dramaMovies.reduce((acc, film) => {
  	return acc + film.score / dramaMovies.length
 	}, 0)
   return parseFloat(average.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let copyMovies = JSON.parse(JSON.stringify(movies));
  let sortedMoviesByYear =  copyMovies.sort((firstFilm, secondFilm) => {
    if (firstFilm.year > secondFilm.year){
      return 1;
    } else {
      return -1;
    }
  })
  return sortedMoviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let copyMovies = JSON.parse(JSON.stringify(movies));
  let orderedMovies = copyMovies.sort((firstFilm, secondFilm) => {
    if (firstFilm.title > secondFilm.title){
      return 1;
    } else {
      return -1;
    }
  })
  return orderedMovies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
