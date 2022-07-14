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
  let movie = []
  // create an array to represent the movie
  for(i = 0; i < movies.length; i++){
    //loop through movies.length
    let title = movies[i].title 
    //create a variable for the movie title
    movie.push(title)
    //push the title into the array
  }

  return movie 
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
  let highest = 0
  //create an variable for the highest meta score 
  for(i = 0; i < movies.length; i++){
    //loop through the movies.length
    let metascore = parseInt(movies[i].metascore)
    //create a variable for meta score converting the string array into a number 
    if(metascore > highest)
    highest = metascore
  }
  return highest
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
  let average = 0
  //creating a variable for average ratings
  for(i = 0; i < movies.length; i++){
    //looping through the movies
    let ratings = Number(movies[i].imdbRating)
    //creating a variable for rating. WHY DOES PARSEINT NOT WORK HERE 
    average += ratings / movies.length 
    //Making the math math
  }
  return average
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
  let ratings = {}

  for (let i = 0; i < movies.length; i++){
    if(ratings[movies[i].rated])
    ratings[movies[i].rated] += 1 
    else
    ratings[movies[i].rated] = 1
  }
  return ratings

  /*
    SAVE FOR REVIEW:
   Code below is my original thought. I tried it and it didn't work but when I didn't use the variable it worked. WHY? It's the same code and the reading says nothing about not "mutating" the Array. Ask Carlos Friday. 
   
  //create variable for rating object 
  for(i=0; i < movies.length; i++){
    let rating = ratings[movies[i].rated]
  //Create a variable for movies rated
    if(rating)
    rating += 1
    else 
   rating = 1
  }
  */
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
  let invalid = null
  //make null a default return
    for(i = 0; i < movies.length; i++){
      //loop through movies.length 
      let movie = movies[i]
      //var for movies found
      if(movie.imdbID.includes(id))
        //does it include id?
        return movie
  }
  return invalid
/*
   SAVE FOR REVIEW: 

   the codes below work in the same thought process as the one above but I didn't want to use methods. Why were they pulling different checks. 

     if(!movies.length){
      //not movies 
    return null
  }
  for(i = 0; i < movies.length; i++){
    //loop through movies.length 
    let movie = movies[i]
    //var for the found movie
    if(movie.imdID === id){
      //is the found movie at ID = id? 
    return movies[i]
    }else{ 
    return null
    }
    //Second and last two passing 
  }


  BOTTOM 3 PASSING 
   let movieNames = {}
  if(!movies.length){
    return null
  }
  for(i = 0; i < movies.length; i++){
    let movie = movies[i].imdbID
    if(movie === id){
      movieNames = movies[i]
    }else {
      movieNames = null
    }

  }
  return movieNames
  
  */
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
  let genres = []
  //Variable for the return 
  for(i= 0; i < movies.length; i++){
    //filter through movies.length 
    let movieGenre = movies[i].genre.toLowerCase().includes(genre.toLowerCase())
    //movieGenre makes sure its it takes in whatever case I give it 
    if(movieGenre)
      genres.push(movies[i])
  }
  return genres
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
function getAllMoviesReleasedAtOrBeforeYear() {}

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
function getBiggestBoxOfficeMovie() {}

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
