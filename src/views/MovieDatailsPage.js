import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { fetchhMovieDetails } from '../services/fetchApi';

import Cast from '../Components/Cast';
import Review from '../Components/Review';
import defaultPoster from '../images/poster_path_not_found.jpg';

import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    imgUrl: '',
    title: '',
    genres: [],
    overview: '',
    error: null,
  };

  componentDidMount() {
    fetchhMovieDetails(this.props.match.params.movieId)
      .then(({ title, overview, genres, poster_path }) =>
        this.setState({
          imgUrl: poster_path,
          title: title,
          genres: genres,
          overview: overview,
        }),
      )
      .catch(error => this.setState({ error: error }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.home);
  };

  render() {
    const match = this.props.match;
    const posterPath = this.state.imgUrl
      ? `https://image.tmdb.org/t/p/w500/${this.state.imgUrl}`
      : defaultPoster;

    return (
      <>
        <button
          className="goBackButton"
          type="button"
          onClick={this.handleGoBack}
        >
          {' '}
          &larr; Go back
        </button>
        <h1>MovieDetailsPage</h1>

        <div className="movieCard">
          <div className="MovieThumb">
            <img src={posterPath} alt="poster"></img>
          </div>

          <div className="cardBody">
            <h2>{this.state.title}</h2>
            <h3>Overview</h3>
            <p>{this.state.overview}</p>
            <h3>Genres</h3>
            <ul>
              {this.state.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <h3>Additional information</h3>
            <ul>
              <li>
                {' '}
                <NavLink to={`${match.url}/cast`} className="navLink">
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to={`${match.url}/reviews`} className="navLink">
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Review} />
      </>
    );
  }
}

export default MovieDetailsPage;
