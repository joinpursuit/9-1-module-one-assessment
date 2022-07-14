/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
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
  // returns all titles from movies array. if array is empty return []

  //declear a var for an empty array
  let x =[]
  
  // create for loop to get title out of each object
  // the movie title is a key in an object
 // iterate through a loop an array so that we can get the title of the movie
 // store the information in a variable which is an array
 // return the array 
// store information i is an object movies is the entire array 
// we want to get the title out of each object
let show= movies.i

for (const i of movies) {
// console.log(i)
// console.log(i["title"])
  x.push(i["title"])
} 
return x


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
  // initalize var to equal 0 
  
  // get all numbers of the array 

  // use for loop so that the number can compare to the previous number
  // store the information 
// metascore is a key in an object

// for (const score of movies){
// if (movies[i] >= max){
//   max = movies[i]
// } console.log(max)

let highestNum = 0

for (let i = 0; i < movies.length; i++) {
if (highestNum < movies[i]["metascore"]){
  highestNum = movies[i]["metascore"]
}
// console.log(movies[i][`metascore`])
}
 return Number (highestNum)


  // should return highest Metascore of all movies as a number (16 ms)
  // should dynamically change depending on the movies inputted (1 ms)
  // should return `0` if there are no movies

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
function getAverageIMDBRating(movies) { // why isnt the code working for average am I missing something?
  // need to get the IMDB ratings
  // need to average out the ratings
  // IMDB rating is a key in an object
  //returns the average(number) rating across all movies 
  //itinialize a var
  //need to iterate through a for loop
  //   for (let i = 0; i < movies.length; i++) {
    //     x+= movies[i]
    //     let avg= x/movies.length
    // }
    // console.log(avg)
  let sum = 0 
for (const number of movies) {
  sum += number.imdbRating/movies.length;
}
return sum
// average = sum / movies.metascore.length;
// console.log(average)
// return avg
  //needs to get the IMDB rating 
  // add all the IMDB ratings and divide/ use average
  // we return the average 
}

/**
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
// need to get the ratings 
  // IMDB rating is a key in an object
  //returns an object keys are movie ratings and values are # of movies in the array with that rating

  //movie rating : value of movies in the array with same rating 

  //iterate through a loop to get the rating
  // create an object to store the rating
  // add the keys to the object
  // figure out if movie has same rating then they go together so match them
let rate = {}

for (let i = 0; i < movies.length; i++) {
if(rate[movies[i]['rated']]){
  rate[movies[i]['rated']] += 1
} else {
  rate[movies[i]['rated']] = 1
}
// console.log(movies.rated)
}
return rate 



}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies,id) {
// returns a movie object based off the ID
// If the inputted `movies` array is empty or the ID does not match any movie, return `null`.



// guard clause
if (movies.length === 0){
  return null 
}
//create a for loop 

for (let i = 0; i < movies.length; i++) {
  if(id === movies[i].imdbID){
    return movies[i]
  }
}
return null 
}

/**
 * filterByGenre()
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
function filterByGenre(movies,genre) {
  // Returns all movie objects with a matching genre.
// If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.

// intialize a variable 
let x = []
// guard clause
if (movies.length === 0){
  return x
}



for (let i = 0; i < movies.length; i++) {
let lower= movies[i].genre.toLowerCase()
        let general = genre.toLowerCase()
  if (lower.includes(general)){
  x.push(movies[i])
  }
} return x
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
function getAllMoviesReleasedAtOrBeforeYear(movies,year) {
  let x = []

  return x
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
function getBiggestBoxOfficeMovie(movies) {
  return null 
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
