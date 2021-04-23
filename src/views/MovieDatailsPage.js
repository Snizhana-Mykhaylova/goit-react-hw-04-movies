import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Axios from 'axios';

import Cast from '../Components/Cast';
import Review from '../Components/Review';

import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    imgUrl: '',
    title: '',
    genres: [],
    overview: '',
  };

  componentDidMount() {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?_embed=credets&api_key=b3eca1c919732b8163c247708ee195fb&`,
    )
      .then(response => response.data)
      .then(({ title, overview, genres, poster_path }) =>
        this.setState({
          imgUrl: poster_path,
          title: title,
          genres: genres,
          overview: overview,
        }),
      );
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

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <h1>MovieDetailsPage</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500/${this.state.imgUrl}`}
          alt="poster"
        ></img>
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
            <Link to={`${match.url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>

        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Review} />
      </>
    );
  }
}

export default MovieDetailsPage;
