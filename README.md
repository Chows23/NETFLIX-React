# Getting Started with Create React App

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Instructions:
* Data for this app is provided by [API movie search endpoint](https://developers.themoviedb.org/3/search/search-movies)

# Requirements:
* `App`: Your main component.
* `Header`: The top header of the app, includes a search form. It has an input on it, so it's probably stateful.
* `Movie`: A component that represents each of the movies retrieved from the TMDB API. Does this need to be stateful? Seems like all it does is display information...
## Functionality
1. Users are presented with a list of movies returned by a TMDB API call relative to their search
   1. Only the first page of movies need to be displayed
   1. The picture used for the movies is the poster_path. Refer to the [documentation](https://developers.themoviedb.org/3/getting-started/images) to learn how to get the full path
   1.If no image is available, use the provided image. This image can be placed in the public folder and accessed with the relative file path of `image-not-available.jpg`.
1. Users can search for movies using the search form at the top of the page
   1. The input should be cleared after the search is performed
   1. The input should be a controlled component
