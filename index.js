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
  movieList = []
  for (movie of movies){
    movieList.push(movie.title)
  }
  return movieList
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
  let metascoreNumber
  let topscore = 0

  for(let movie of movies){
    metascoreNumber = +movie.metascore
        console.log("metascore ",metascoreNumber)
        if(metascoreNumber > topscore){
          topscore = metascoreNumber   
        }
  }
   return topscore
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

  let temp
  let totalRating = 0
  let avgRating = 0
  let counter = 0

  if(movies.length === 0)
  return 0

  for (let movie of movies) {
      temp = +movie.imdbRating
      totalRating = totalRating + temp
      counter++
  }
  avgRating = totalRating/counter
  avgRating = avgRating.toFixed(2)
  //console.log(avgRating)
  avgRating = +avgRating

  return avgRating
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

      //gaurd clause in case movies array is empty
      if(movies.length === 0)
      return {}
    
      let arrA = []
      let arrB = []
      let count1 = 0
      let count2 = 0
      let rating = {}
      key1 = ""
      key2 = ""
    
      for(movie of movies) {
        //console.log(movie.rated)
        let rateOne = movies[0]["rated"]
        if (movie.rated === rateOne){
           arrA.push(movie.rated)
           count1++
        } else {
         arrB.push(movie.rated)
          count2++
        }
       }
      key1 = arrA[0]
      key2 = arrB[0]
      rating[key1] = count1
      rating[key2] = count2
      //console.log(rating)

      return rating

      //I am not passing the 'dynamically changing' test - not sure what else I need to do
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
function findById(movies, id) {
 
   //guard clause in case movies array is empty
   if(movies.length === 0)
   return null

    let thisMovie = {}
    let check = 0
    for (movie of movies){
    if(movie.imdbID === id){
      //console.log(movie.imdbID)
      check++
      thisMovie = {...movie}
    }
    if(check === 0){
      thisMovie = null
    }    
  }  
  //console.log(thisMovie)
  return thisMovie
  
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
function filterByGenre(movies, genre) {
  let movieGenre = []
  let genreTest = false
  let thisGenre =""
  let check = 0
 
 //guard clause in case movies array is empty
     if(movies.length === 0)
      return []

     //movieGenre[genre] = movies[0].genre
     //console.log(movieGenre)

   for ( let movie of movies){
       let thisGenre = movie.genre
       //console.log(thisGenre)
       thisGenre = thisGenre.toLowerCase()
       genre = genre.toLowerCase()
       genreTest = thisGenre.includes(genre)
       //console.log(genreTest)
     
       if(genreTest === true) { 
        movieGenre.push(movie)
       //console.log(movie) 
        check++
       }
      if(check === 0){
       movieGenre = []
     } 
   }
      //console.log(movieGenre)
      return movieGenre


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
  olderMovies = []
  let yearMovieReleased
 
  for(let movie of movies){
     yearMovieReleased = movie.released
     yearMovieReleased = yearMovieReleased.slice(-4)
     yearMovieReleased = parseInt(yearMovieReleased)
     //console.log("from data ",yearMovieReleased)
     //console.log(typeof yearMovieReleased)
     //console.log("input ",year)
     if(yearMovieReleased <= year){
       olderMovies.push(movie)
     }
  }
    //console.log(olderMovies)
    return olderMovies
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
  if(movies.length === 0)
  return null

  let topBoxOffice = 0
  let topMovie = ""
  let money
  let topMoney
  //console.log(movies[0].boxOffice)
     
   for( let movie of movies){
      //console.log(movie.boxOffice)
      money = movie.boxOffice
      money = money.substring(1)
      money = money.replaceAll(',', '')
      money = Number(money)
       // console.log(money) 
      //  console.log(typeof money)
       if(money > topBoxOffice){
         //console.log("data boxoffice ", movie.boxOffice)
         topBoxOffice = money
         //console.log("new topBoxOffice ", topBoxOffice)
         topMovie = movie.title
       }
     }
    //console.log (topMovie)
    return topMovie

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
