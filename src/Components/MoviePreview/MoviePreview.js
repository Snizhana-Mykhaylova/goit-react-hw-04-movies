const MoviePreview = ({ imgUrl, title }) => (
  <div className="movieCard">
    <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} alt="poster"></img>
    <h2>{title}</h2>
  </div>
);

export default MoviePreview;
