import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import queryString from 'query-string';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
    error: null,
  };

  componentDidMount() {
    const query = this.getQueryFromProps(this.props);
    if (query) {
      this.fetchdata(query);
    }
  }

  componentDidUpdate(prevProps) {
    const prevQuery = this.getQueryFromProps(prevProps);
    const query = this.getQueryFromProps(this.props);
    if (prevQuery !== query) {
      this.fetchdata(this.state.query);
    }
  }

  fetchdata(query) {
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b3eca1c919732b8163c247708ee195fb`,
    )
      .then(response => response.data)
      .then(data => {
        const { history, location } = this.props;
        history.push({ ...location, search: `?query=${query}` });
        this.setState({ movies: data.results });
      })
      .catch(error => this.setState({ error: error }));
  }

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handelSubmit = event => {
    event.preventDefault();

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${event.currentTarget.value}`,
    });
    this.fetchdata();
  };

  getQueryFromProps = props => queryString.parse(props.location.search).query;

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
                    to={{
                      pathname: `/movies/${movie.id}`,
                      state: { from: this.props.location },
                    }}
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
