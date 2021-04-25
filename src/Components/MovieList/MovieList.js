import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviePreview from '../MoviePreview';
import styles from './movieList.module.css';

const MovieList = ({ movies, location }) => (
  <ul className={styles.Movielist}>
    {movies.map(({ title, name, id, poster_path }) => {
      const movieTitle = title ? title : name;

      return (
        <li key={id} className={styles.MovieItem}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <MoviePreview imgUrl={poster_path} title={movieTitle} />
          </Link>
        </li>
      );
    })}
  </ul>
);

MovieList.defaultProps = {
  location: '',
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  location: PropTypes.object,
};

export default withRouter(MovieList);
