import styles from './moviePreview.module.css';

const MoviePreview = ({ imgUrl, title }) => (
  <div>
    <div className={styles.MovieThumb}>
      <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} alt="poster"></img>
    </div>
    <h2 className={styles.MovieName}>{title}</h2>
  </div>
);

export default MoviePreview;
