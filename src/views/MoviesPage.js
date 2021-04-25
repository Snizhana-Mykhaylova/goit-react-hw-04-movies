import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
    error: null,
  };

  fetchdata() {
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${this.state.query}&api_key=b3eca1c919732b8163c247708ee195fb`,
    )
      .then(response => response.data)
      .then(data => {
        this.setState({ movies: data.results });
      })
      .catch(error => this.setState({ error: error }));
  }

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handelSubmit = event => {
    event.preventDefault();
    this.fetchdata();
    this.setState({ query: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handelSubmit} className="SearchForm">
          <input
            className="SearchFormInput"
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </form>
        <ul>
          {this.state.movies.length === 0 ? (
            <p>No results</p>
          ) : (
            this.state.movies.map(movie => {
              return (
                <li key={movie.id}>
                  <NavLink
                    className="navLink"
                    to={`${this.props.match.url}/${movie.id}`}
                  >
                    {movie.title ? movie.title : movie.name}
                  </NavLink>
                </li>
              );
            })
          )}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
