import { Component } from 'react';
import Axios from 'axios';

class Review extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=b3eca1c919732b8163c247708ee195fb&&language=en-US&page=1`,
    )
      .then(response => response.data)
      .then(data => data.results)
      .then(results =>
        this.setState({
          reviews: results,
        }),
      );
  }

  render() {
    return this.state.reviews.length > 0 ? (
      <ul>
        {this.state.reviews.map(({ id, content, author }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>We don't have any reviews for this movie</p>
    );
  }
}

export default Review;
