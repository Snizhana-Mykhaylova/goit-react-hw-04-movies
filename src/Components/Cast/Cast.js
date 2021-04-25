import { Component } from 'react';
import { fetchhMovieCast } from '../../services/fetchApi';
import defaultAvatar from '../../images/defaultAvatar.png';
import styles from './cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    fetchhMovieCast(this.props.match.params.movieId)
      .then(cast => {
        this.setState({
          cast: cast,
        });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error: error }));
  }

  render() {
    return (
      <>
        <h5>Cast: </h5>
        <ul className={styles.flex}>
          {this.state.cast.map(({ id, name, character, profile_path }) => {
            const imgUrl = profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : defaultAvatar;
            return (
              <li key={id} className={styles.card}>
                <img src={imgUrl} alt={name} />
                <div>
                  <p>{name} </p>
                  <p> {character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
