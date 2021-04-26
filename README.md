Check out the webiste [here](https://chows23.github.io/NETFLIX-React/)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Instructions:

* Data for this app is provided by [API movie search endpoint](https://developers.themoviedb.org/3/search/search-movies)

# Requirements:

* `App`: Your main component.
* `Header`: The top header of the app, includes a search form. It has an input on it, so it's probably stateful.
* `Movie`: A component that represents each of the movies retrieved from the TMDB API. Does this need to be stateful? Seems like all it does is display information...

## Functionality

* Users are presented with a list of movies returned by a TMDB API call relative to their search
   * Only the first page of movies need to be displayed
   * The picture used for the movies is the poster_path. Refer to the [documentation](https://developers.themoviedb.org/3/getting-started/images) to learn how to get the full path
   * If no image is available, use the provided image. This image can be placed in the public folder and accessed with the relative file path of `image-not-available.jpg`.
* Users can search for movies using the search form at the top of the page
   * The input should be cleared after the search is performed
   * The input should be a controlled component
