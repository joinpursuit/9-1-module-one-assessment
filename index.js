/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
// intialize a accumulator 
// loop throught movies for each movie title 
// pull out the title: value
// push to my empty array (accumulator)
let accumulator = []
if (movies.length === 0){
  return accumulator
}
let movieName;
for (let i = 0; i < movies.length; i++) {
    movieName = movies[i][`title`];
    // console.log(movieName)
    accumulator.push(movieName)
  }

return accumulator
} 
/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  // intialize accumulator
  // loop thru moives array to find metascore
  // compare each metascore to metascore 
  // pull out the highest metascore
  // no metascore return 0
  if (movies.length === 0) {
    return 0
  }
  //  initialized a maxium element
  let max = Number(movies[0][`metascore`])
  // console.log(max)
    for(let i = 1; i < movies.length; i ++ ){
       if(Number(movies[i].metascore > max)){
           max = Number(movies[i].metascore)
       }
    }
 return max
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  if (movies.length === 0) {
    return 0
  }
//  initialize 3 variable to 0
let counter = 0
let avgMovie = 0
let movieTotal = 0 
let imdbStr = ''
let strToNum = 0
// loop thru movies to find IMDB ratings for all the movies
// get each IMDB ratings number 
// find imdb ratings but is a string 
// converted ratings to number
// get my average using counter method
for (const film of movies) {
  imdbStr = film[`imdbRating`]
  strToNum = Number(imdbStr) 
  movieTotal = movieTotal + strToNum
  counter = counter + 1
  avgMovie = movieTotal/counter
} 
//  avgMovie = movieTotal/counter
// return avgMovie
return avgMovie
}

/* 
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  // initial an empty obj

  let obj = {};
// if no input this if statement will 
	if (movies.length === 0) {
		return obj;
	}
	let typeOfRatings = [];
	for (let i = 1; i < movies.length; i++) {
		if (typeOfRatings.includes(movies[i].rated)) {
		} else {
			typeOfRatings.push(movies[i].rated);
		}
	}
  for(let rt of typeOfRatings){
	  	obj[rt] = 0;
	 };

	for (let i = 0; i < movies.length; i++) {
		for (let j = 0; j < typeOfRatings.length; j++) {
			if (movies[i].rated === typeOfRatings[j]) {
				obj[typeOfRatings[j]] += 1;
			}
		}
	}
	return obj;
}


/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 * @returns {object|null} The movie object that contains the matching `imdbID
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies,id) {
  // 
  let foundMovie = null;

	if (movies.length === 0) {
		return foundMovie;
	}

	for (let mv of movies){
		if (mv.imdbID === id) {
			foundMovie = mv;
		}
	};

	return foundMovie;
}

/**
 * filterByGenre()y
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let foundMovies = [];
	if (movies.length === 0) {
		return foundMovies;
	}

	for(const mv of movies) {
    let genremv = mv.genre.toUpperCase();
		if (genremv.includes(genre.toUpperCase())) {
			foundMovies.push(mv);
		}
	};

	return foundMovies;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let foundMovies = [];

	for(const mv of movies){
		let releasedYear = Number(mv.released.split(' ')[2]);
		if (releasedYear === year || releasedYear < year) {
			foundMovies.push(mv);
		}
	};

	return foundMovies;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies){
// 
  if(movies.length===0){
    return null;
  }
let maxBoxOffice = Number(
  movies[0].boxOffice.replace('$', '').split(',').join('')
);
let nameOfMovie = '';

for(const mv of movies){
  let boxOffice = Number(mv.boxOffice.replace('$', '').split(',').join(''));
  if (boxOffice > maxBoxOffice) {
    nameOfMovie = mv.title;
  }
};

return nameOfMovie;
}
// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
