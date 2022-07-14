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
  //foloow accumulator pattern. create an empty arr then return
let newArr = [];
//if the movie is empty return thr empty arr
if(movies.length === 0){
  return newArr;
}
//iterate through the movies to find the movie titles. 
for(let i=0; i<movies.length; i++){
  //after finding movie, push to the arr
  newArr.push(movies[i].title)
}
return newArr;

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
  if( movies.length === 0){
    return 0;
  }
    //let highestMeta= metsc;
  
  let metScore = movies[0].metascore // individual metascore value
  //console.log("!", metScore)
  
   for(let i = 0; i < movies.length; i++){
        if(metScore < movies[i].metascore){
         metScore = movies[i].metascore// changed string to Number.
        } 
      }
      //highestMeta = metScore;
      //console.log('###', highestMeta)
   return Number(metScore);
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
  // declare a variable for the ratings value.
  let avRating = 0;
  // iterate through the movies object using a loop
    for(let m = 0; m < movies.length; m++){
  // updaste variable to fectch the imdbRating values
     avRating += movies[m].imdbRating / movies.length ;
  //console.log(avRating.toFixed(1))

}
return avRating;
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
  //create a rated variable
//let theRate = movies.rated
// create an empty object var --> accumulator papptern
let count = {};

// we need to loop throught the movie object
for(let c =0; c < movies.length; c++){
    //for(let r = 0; r <movies[c].rated.length){

      if(count[movies[c].rated]){
        count[movies[c].rated] +=1;
      }   else { 
             count[movies[c].rated] = 1;
      }
      
      // if the value is present, increment by 1 , if not decrement by 1. 
    //}

}
return count;
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
  //guard clause --> maybe somwthing like...if (movies === 0; || Id !== movies) return null.
  if(movies.length === 0){
    return null;
  }
  for(let i = 0; i < movies.length; i++){
    if(movies[i].imdbID === id){
          return movies[i]
    }
  }
    return null
    //console.log(obj)
// for (mov of movies){
//   if(mov.imdbID === id){
//     return mov
//   }
// }
// return null
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
  //create a individual genre var
//   let gen = movies.genre
//   console.log(gen)
let arr = []
if (movies.length === 0){
  return arr;
}
for(mov of movies){
  let lowerCase= mov.genre.toLowerCase();
  let lowGen = genre.toLocaleLowerCase(); 
    if(lowerCase.includes(lowGen)){
arr.push(mov)
  }
}
return arr
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
let reDate =[];
// if(conditional) 
//let therelease = movies.released
//create a loop to iterate through the movie object
for(let r = 0; r < movies.length; r++){
  //create a date range to isolate the release date
let theDate = movies[r].released.slice(-4) // 4 digit year
//console.log(theDate)
if( theDate <= year){
  //push the movie to the arr crrated
  reDate.push(movies[r])
}
}
return reDate

}

/**
 * ge metascoregestBoxOfficeMovie()
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
  //create an empty str var
  //create a var to select thr first boxOffice number
  //loop through the movies object
  //iupdate the str var
  //compate the bigBox number to every bigBox numbers.
  //return str, as the updated values. 
if( movies.length === 0){
  return null;
}
  let big = movies[0].title;

let biggerbox = movies[0].boxOffice // individual boxOffice value
//console.log(biggerbox)

 for(let i = 0; i < movies.length; i++){
      if(Number(biggerbox.replace(/[$,]+/g,"")) < Number(movies[i].boxOffice.replace(/[$,]+/g,""))){
        biggerbox = movies[i].boxOffice.replace(/[$,]+/g,"")//updated with the movie title of the movie with the biggest box office value 
    
       //movieTitle = movies[i].title
        //console.log(biggerbox)
        big = movies[i].title;
}
}
//console.log(big)
 return big;
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
