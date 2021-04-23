import { Component } from 'react';

import Axios from 'axios';

import MovieList from '../Components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    Axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=b3eca1c919732b8163c247708ee195fb',
    )
      .then(response => response.data)
      .then(data => {
        this.setState({ movies: data.results });
      });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default HomePage;
