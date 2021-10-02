const getAllMoviesSuccess = {
    "Search": [
      {
        "Title": "Captain Marvel",
        "Year": "2019",
        "imdbID": "tt4154664",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
      },
      {
        "Title": "Marvel One-Shot: Agent Carter",
        "Year": "2013",
        "imdbID": "tt3067038",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDIwZTM4M2QtMWFhYy00N2VmLWFlMjItMzI3NjBjYTc0OTMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
      {
        "Title": "Marvel One-Shot: All Hail the King",
        "Year": "2014",
        "imdbID": "tt3438640",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGFkMTZkMDQtNzM4Yy00YWEwLTkzOWEtZTMyNDRlNmJhYWJhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
      {
        "Title": "Marvel One-Shot: Item 47",
        "Year": "2012",
        "imdbID": "tt2247732",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjNlMzAxNmQtOGEwZi00NTEyLWI0NWYtMTlhNmE2YTA3ZDVhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
      {
        "Title": "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer",
        "Year": "2011",
        "imdbID": "tt2011109",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmVlYTg3N2QtMWM2OS00YWQyLWI2M2MtMDc0ZjBkZjk1MTY3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
      {
      "Title": "Marvel One-Shot: The Consultant",
      "Year": "2011",
      "imdbID": "tt2011118",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGE4YjU5MDAtYzYzMC00M2RlLTk0NDgtNDU1MjgyMGI0MjI3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
    ],
    "totalResults": "233",
    "Response": "True"
}

module.exports = {
  getAllMoviesSuccess,
  getAllMoviesSuccessNoData: {
    "Search": [],
    "totalResults": "0",
    "Response": "True"
  },
  getAllMoviesFailed: {
    "Search": [],
    "totalResults": "0",
    "Response": "False"
  },
  getMovieSuccess: {
    "Title": "Marvel One-Shot: The Consultant",
    "Year": "2011",
    "Rated": "Not Rated",
    "Released": "13 Sep 2011",
    "Runtime": "4 min",
    "Genre": "Short, Sci-Fi",
    "Director": "Leythum",
    "Writer": "Jack Kirby (characters), Eric Pearson",
    "Actors": "Clark Gregg, Maximiliano Hernández, Deborah Knox",
    "Plot": "Agents Coulson and Sitwell plan to derail General Thaddeus \"Thunderbolt\" Ross from interfering with S.H.I.E.L.D. affairs with a very special person.",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGE4YjU5MDAtYzYzMC00M2RlLTk0NDgtNDU1MjgyMGI0MjI3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "6.6/10"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.6",
    "imdbVotes": "5,999",
    "imdbID": "tt2011118",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  getMovieFailed: {
    "Response": "False",
    "Error": "Incorrect IMDb ID."
  },
}