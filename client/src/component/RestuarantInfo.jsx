/* eslint-disable no-console */
import React from 'react';
import $ from 'jquery';
import Details from './Details.jsx';
import WriteReview from './WriteReview.jsx';
import AddPhoto from './AddPhoto.jsx';


class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Restaurant: {}, Review: {}, ShowDetails: false, ShowPhotoForm: false, ShowReviewForm: false, allReview: [] };
    this.updateState = this.updateState.bind(this);
    this.updateDetailsClickStatus = this.updateDetailsClickStatus.bind(this);
    this.updateWriteReviewClickStatus = this.updateWriteReviewClickStatus.bind(this);
    this.updateAddPhotoClickStatus = this.updateAddPhotoClickStatus.bind(this);
}

  componentDidMount() {
    const that = this;
    $.ajax({
      method: 'GET',
      url: '/restaurant',
      dataType: 'json',
      success: (data) => {
        console.log('this is my ajax call from restaurant Info', data);
        that.updateState(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateState (data) {
    var claimStatus;
    const that = this;
    const allReview = [];
    if (data[0].claimed === true) {
      claimStatus = 'Claimed';
    } else {
      claimStatus = 'Unclaimed';
    }
    const restaurant = {
      claimed: claimStatus, name: data[0].restaurantname, price: data[0].prize, category: data[0].category 
    };
    if (data[0].rating !== undefined) {
      const average = data.reduce((accumulator, currentObj) => {
        return accumulator + currentObj.rating
      }, 0) / data.length;

      var review = { AverageRating: average, amount: data.length };
    } else {
      var review = { AverageRating: 0, amount: 0 }
    }
    if (data[0].rating !== undefined) {
      data.forEach((review) => {
        allReview.push({ rating: review.rating, date: review.date });
      });
    }
    this.setState({ Restaurant: restaurant, Review: review, allReview: allReview }, () => {
      console.log('this is my restaurant info state ', this.state);
    });
  }

updateDetailsClickStatus() {
    console.log('Deatils clicked');
    if (!this.state.ShowPhotoForm && !this.state.ShowReviewForm) {
      this.setState({
        Restaurant: this.state.Restaurant, Review: this.state.Review, ShowDetails: !this.state.ShowDetails,
        ShowReviewForm: this.state.ShowReviewForm, ShowPhotoForm: this.state.ShowPhotoForm, allReview: this.state.allReview
      });
    }
}

updateAddPhotoClickStatus() {
    console.log('Photo clicked')
    if (!this.state.ShowDetails && !this.state.ShowReviewForm) {
      this.setState({
        Restaurant: this.state.Restaurant, Review: this.state.Review, ShowDetails: this.state.ShowDetails,
        ShowReviewForm: this.state.ShowReviewForm, ShowPhotoForm: !this.state.ShowPhotoForm, allReview: this.state.allReview
      });
    }
}

updateWriteReviewClickStatus() {
    console.log('Review clicked')
    if (!this.state.ShowPhotoForm && !this.state.ShowDetails) {
      this.setState({
        Restaurant: this.state.Restaurant, Review: this.state.Review, ShowDetails: this.state.ShowDetails,
        ShowReviewForm: !this.state.ShowReviewForm, ShowPhotoForm: this.state.ShowPhotoForm, allReview: this.state.allReview
      });
    }
}


  render() {
    return (
      <div>
        <div>{this.state.Restaurant.name}&emsp;{this.state.Restaurant.claimed}</div>
        <div>
          {this.state.Review.AverageRating}
            &emsp;
          {this.state.Review.amount}
            &ensp;Reviews&emsp;
          <button type="button" onClick={this.updateDetailsClickStatus}>Details</button>
          {this.state.ShowDetails ? <Details updateDetailsStatus={this.updateDetailsClickStatus} Reviews={this.state.allReview} /> : null}
        </div>
        <div>{this.state.Restaurant.price}
        &emsp;
        {this.state.Restaurant.category}
        </div>
        <div>
          <button type="button" onClick={this.updateWriteReviewClickStatus}>WriteReview</button>
          &emsp;
          {this.state.ShowReviewForm ? <WriteReview updateReviewFormStatus={this.updateWriteReviewClickStatus} name={this.state.Restaurant.name} /> : null}
          <button type="button" onClick={this.updateAddPhotoClickStatus}>AddPhoto</button>
          &emsp;
          {this.state.ShowPhotoForm ? <AddPhoto updatePhotoFormStatus={this.updateAddPhotoClickStatus} /> : null}
          <button type="button">save</button>
          &emsp;
          <button type="button">share</button>
        </div>
      </div>
    );
  }
}

export default RestaurantInfo;
