import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      likeMovies: [],
    };
    this.fetchData = this.fetchData.bind(this);
    this.toggleMovie = this.toggleMovie.bind(this);
  }

  async fetchData(input) {
    let response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=dede7d4c6cc3239d22047584c45369e0&language=en-US&query=${input}&page=1`
    );
    let { results } = await response.json();
    this.setState({
      movies: results,
    });
  }

  toggleMovie(id) {
    if (this.state.likeMovies.includes(id)) {
      this.setState((prevState) => ({
        likeMovies: prevState.likeMovies.filter((movie) => movie !== id),
      }));
    } else {
      this.setState((prevState) => ({
        likeMovies: [...prevState.likeMovies, id],
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <Header fetchData={this.fetchData} />
        <div className="titleList">
          <div className="title">
            <h1>Movies</h1>
            <div className="titles-wrapper">
              {this.state.movies.map((movie, index) => (
                <Movie
                  marked={this.state.likeMovies.includes(movie.id)}
                  key={index}
                  movie={movie}
                  toggleMovie={this.toggleMovie}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
