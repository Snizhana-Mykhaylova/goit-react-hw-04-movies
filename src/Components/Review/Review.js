import { Component } from 'react';
import { fetchhMovieReviews } from '../../services/fetchApi';

class Review extends Component {
  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    fetchhMovieReviews(this.props.match.params.movieId)
      .then(results => {
        this.setState({
          reviews: results,
        });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error: error }));
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
