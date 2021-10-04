# beken

This repo is build for my personal assignment 🤘

---

## sql

To check the sql file firstly you need to run the `db.sql` after that you can use the query file to get all the data from user table.

---

## refactor.js and solve.js

The `refactor.js` and `solve.js` file require a NodeJS to run it locally. You can simply type `node refactor` or `node solve` to run the file if you already have NodeJS installed. You can also run it from [Repl.it](http://repl.it/) or [JSBin](https://jsbin.com/?js,console) by copy-paste the code.

---

## server

This folder contains an ExpressJS simple app that can retrieve movie list and movie detail.

### Requirements:

1. NodeJS (v8+)
2. MySQL server
3. [OMDB API Key](https://www.omdbapi.com/apikey.aspx)

### Fire up instruction 🔥:

1. Make sure you already inside the server folder.
2. Run `nmp install` on your favorite terminal.
3. After that run `node index`.
4. Voila, you can use the server API now :)

You can also see the unit test via `npm run test`

Beside running it locally, you can also access the API via the curl below xD

Here's I attach the [server health check](http://116.193.190.48:3000/v1) to make sure this app is up and running

### API List

#### 1. Health Check

`curl --location --request GET '116.193.190.48:3000/v1'`

Response:
`BEKEN Service V1.00`

#### 2. Search Movies:

`curl --location --request GET '116.193.190.48:3000/v1/movie/search/marvel'`

OR

`curl --location --request GET '116.193.190.48:3000/v1/movie/search/marvel?page=2'`

Response:

```yaml
{
  'status': '00',
  'message': 'Success',
  'data':
    {
      'movies':
        [
          {
            'Title': 'Captain Marvel',
            'Year': '2019',
            'imdbID': 'tt4154664',
            'Type': 'movie',
            'Poster': 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg',
          },
          {
            'Title': 'Marvel One-Shot: Agent Carter',
            'Year': '2013',
            'imdbID': 'tt3067038',
            'Type': 'movie',
            'Poster': 'https://m.media-amazon.com/images/M/MV5BZDIwZTM4M2QtMWFhYy00N2VmLWFlMjItMzI3NjBjYTc0OTMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
          },
          {
            'Title': 'Marvel One-Shot: All Hail the King',
            'Year': '2014',
            'imdbID': 'tt3438640',
            'Type': 'movie',
            'Poster': 'https://m.media-amazon.com/images/M/MV5BZGFkMTZkMDQtNzM4Yy00YWEwLTkzOWEtZTMyNDRlNmJhYWJhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
          },
          {
            'Title': 'Marvel One-Shot: Item 47',
            'Year': '2012',
            'imdbID': 'tt2247732',
            'Type': 'movie',
            'Poster': 'https://m.media-amazon.com/images/M/MV5BMjNlMzAxNmQtOGEwZi00NTEyLWI0NWYtMTlhNmE2YTA3ZDVhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
          },
          {
            'Title': "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer",
            'Year': '2011',
            'imdbID': 'tt2011109',
            'Type': 'movie',
            'Poster': 'https://m.media-amazon.com/images/M/MV5BYmVlYTg3N2QtMWM2OS00YWQyLWI2M2MtMDc0ZjBkZjk1MTY3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
          },
          {
            'Title': 'Marvel One-Shot: The Consultant',
            'Year': '2011',
            'imdbID': 'tt2011118',
            'Type': 'movie',
            'Poster': 'https://m.media-amazon.com/images/M/MV5BNGE4YjU5MDAtYzYzMC00M2RlLTk0NDgtNDU1MjgyMGI0MjI3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
          },
          {
            'Title': 'Marvel Studios: Legends',
            'Year': '2021–',
            'imdbID': 'tt13650480',
            'Type': 'series',
            'Poster': 'https://m.media-amazon.com/images/M/MV5BNGE3ODYyNDYtODk1NS00ODRmLTk5YTYtOGMyMTZkYTEyODhlXkEyXkFqcGdeQXVyODQ4MjU1MDk@._V1_SX300.jpg',
          },
          {
            'Title': 'Lego Marvel Super Heroes',
            'Year': '2013',
            'imdbID': 'tt2620204',
            'Type': 'game',
            'Poster': 'https://m.media-amazon.com/images/M/MV5BOTA5ODA2NTI2M15BMl5BanBnXkFtZTgwNTcxMzU1MDE@._V1_SX300.jpg',
          },
          {
            'Title': 'Marvel Studios: Assembled',
            'Year': '2021–',
            'imdbID': 'tt14094206',
            'Type': 'series',
            'Poster': 'https://m.media-amazon.com/images/M/MV5BNWMyNWYyMmYtZjNiZi00MzFmLTg2MjYtYWEzZWY1MzBhY2I2XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
          },
          {
            'Title': 'Marvel Studios: Assembling a Universe',
            'Year': '2014',
            'imdbID': 'tt3591568',
            'Type': 'movie',
            'Poster': 'https://m.media-amazon.com/images/M/MV5BZjNiN2NhYzQtYmI1NC00NGRmLWE2MWYtNjAxNjMzZmYxNDJhXkEyXkFqcGdeQXVyODQ4MjU1MDk@._V1_SX300.jpg',
          },
        ],
      'totalPage': 24,
    },
}
```

#### 3. Get Movie Detail:

`curl --location --request GET '116.193.190.48:3000/v1/movie/tt4154664'`

Response:

```yaml
{
  'status': '00',
  'message': 'Success',
  'data':
    {
      'Title': 'Captain Marvel',
      'Year': '2019',
      'Rated': 'PG-13',
      'Released': '08 Mar 2019',
      'Runtime': '123 min',
      'Genre': 'Action, Adventure, Sci-Fi',
      'Director': 'Anna Boden, Ryan Fleck',
      'Writer': 'Anna Boden, Ryan Fleck, Geneva Robertson-Dworet',
      'Actors': 'Brie Larson, Samuel L. Jackson, Ben Mendelsohn',
      'Plot': "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
      'Language': 'English',
      'Country': 'United States, Australia',
      'Awards': '9 wins & 52 nominations',
      'Poster': 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg',
      'Ratings':
        [
          { 'Source': 'Internet Movie Database', 'Value': '6.8/10' },
          { 'Source': 'Rotten Tomatoes', 'Value': '79%' },
          { 'Source': 'Metacritic', 'Value': '64/100' },
        ],
      'Metascore': '64',
      'imdbRating': '6.8',
      'imdbVotes': '491,174',
      'imdbID': 'tt4154664',
      'Type': 'movie',
      'DVD': '28 May 2019',
      'BoxOffice': '$426,829,839',
      'Production': 'Marvel Studios',
      'Website': 'N/A',
      'Response': 'True',
    },
}
```
