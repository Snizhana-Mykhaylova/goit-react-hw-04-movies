import { Component, Suspense, lazy } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { fetchhMovieDetails } from '../services/fetchApi';
import Loader from '../Components/Loader';
import defaultPoster from '../images/poster_path_not_found.jpg';

import routes from '../routes';

const Cast = lazy(() =>
  import('../Components/Cast' /* webpackChunkName: "cast" */),
);
const Review = lazy(() =>
  import('../Components/Review' /* webpackChunkName: "reviews" */),
);

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
                <NavLink
                  to={{
                    pathname: `${match.url}/cast`,
                    state: {
                      from: this.props.location.state.from,
                    },
                  }}
                  className="navLink"
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: {
                      from: this.props.location.state.from,
                    },
                  }}
                  className="navLink"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <Suspense fallback={<Loader />}>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Review} />
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
