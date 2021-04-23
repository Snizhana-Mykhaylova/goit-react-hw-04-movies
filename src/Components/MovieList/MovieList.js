import { Link, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview';

const MovieList = ({ movies, location }) => (
  <ul>
    {movies.map(({ title, name, id, poster_path }) => {
      const movieTitle = title ? title : name;

      return (
        <li key={id}>
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

export default withRouter(MovieList);
