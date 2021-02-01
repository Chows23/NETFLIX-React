import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { movieInput: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ movieInput: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.movieInput !== "") {
      this.props.fetchData(this.state.movieInput);
      this.setState({
        movieInput: "",
      });
    }
  }

  render() {
    return (
      <header className="header">
        <a href="/">
          <img
            src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
            alt="netflix-font"
            border="0"
          />
        </a>
        <form id="search" className="search" onSubmit={this.handleSubmit}>
          <input
            type="search"
            placeholder="Search for a title..."
            name="search"
            value={this.state.movieInput}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Header;
