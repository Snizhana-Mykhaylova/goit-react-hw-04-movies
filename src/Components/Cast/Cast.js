import { Component } from 'react';
import Axios from 'axios';

import defaultAvatar from '../../images/defaultAvatar.png';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=b3eca1c919732b8163c247708ee195fb&&language=en-US`,
    )
      .then(response => response.data)
      .then(data => data.cast)
      .then(cast =>
        this.setState({
          cast: cast,
        }),
      );
  }

  render() {
    return this.state.cast.map(({ id, name, character, profile_path }) => {
      const imgUrl = profile_path
        ? `https://image.tmdb.org/t/p/w500${profile_path}`
        : defaultAvatar;

      return (
        <li key={id}>
          <img src={imgUrl} alt={name} />
          <div>
            <p>Name: {name} </p>
            <p> Character : {character}</p>
          </div>
        </li>
      );
    });
  }
}

export default Cast;
