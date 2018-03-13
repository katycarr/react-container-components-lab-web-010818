// Code MovieReviews Here
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import testReviews from '../test-reviews';


const Review = ({display_title, mpaa_rating, byline, headline, summary_short}) => {
  return (
    <div key={display_title} className='review'>
      <h1>{display_title}</h1>
      <h4>{mpaa_rating}</h4>
      <h4>{byline}</h4>
      <h2>{headline}</h2>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return(
    <div className='review-list'>
      {reviews.map(Review)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews:[]
}


export default MovieReviews
