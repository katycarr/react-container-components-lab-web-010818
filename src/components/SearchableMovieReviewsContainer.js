// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}`

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews:[],
      searchTerm:''
    }
  }

  componentDidMount() {
    if(this.state.searchTerm !== '') {
      fetch(URL+`&query=${this.state.searchTerm}`)
      	.then(res => res.json())
      	.then(json => {
          const reviews = json.results
      		this.setState({reviews});
      });
    }
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        {this.state.reviews !== [] ?
        <MovieReviews reviews={this.state.reviews} />
        : null}
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
