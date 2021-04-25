import { Component } from 'react';
import { fetchTrendingMovies } from '../services/fetchApi';
import MovieList from '../Components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
    error: null,
  };

  componentDidMount() {
    fetchTrendingMovies()
      .then(data => {
        this.setState({ movies: data.results });
      })
      .catch(error => this.setState({ error: error }));
  }

  render() {
    return (
      <div className="HomeView">
        <h1 className="HomeView-title">Trending today</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default HomePage;
