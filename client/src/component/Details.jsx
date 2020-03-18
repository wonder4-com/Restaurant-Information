import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Month: {}, Year: {}, ReviewProportion: {} };
  }

  componentDidMount() {
    const month = {
      January: [], February: [], March: [], April: [], May: [], June: [], July: [], August: [], September: [], October: [], November: [], December: []
    };
    const year = {};
    const averageRating = ['zeroStar', 'oneStar', 'twoStars', 'threeStars', 'fourStars', 'fiveStars'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const reviewProportion = {};
    let startingYear = 30000;

    averageRating.forEach((rating) => {
      if (reviewProportion[rating] === undefined) {
        reviewProportion[rating] = 0;
      }
    });

    if (this.props.Reviews.length > 0) {
      // eslint-disable-next-line react/prop-types
      this.props.Reviews.forEach((review) => {
        const date = review.date.split('-');
        const index = date[1] - 1;
        const reviewedMonth = months[index];
        month[reviewedMonth].push(review.rating);
        if (year[date[0]] === undefined) {
          year[date[0]] = [];
        }
        year[date[0]].push(review.rating);
        reviewProportion[averageRating[review.rating]] += 1;
      });

      for (var key in reviewProportion) {
        if (reviewProportion[key]/this.props.Reviews.length *100 >= 90){
          reviewProportion[key] = '100%';
        } else {
          reviewProportion[key] = reviewProportion[key]/this.props.Reviews.length *100 +10 +'%';
        }
      }

      Object.keys(year).forEach((yearString) => {
        if (Number(yearString) < startingYear) {
          startingYear = yearString;
        }
      });
    }
    this.setState({
      Month: month, Year: year, ReviewProportion: reviewProportion, startYear: startingYear
    }, () => console.log(this.state));
  };


  render() {
    return (
      <div className ="modal_content">
        <div className="x-button" onClick={ this.props.updateDetailsStatus}>&times;</div>
        <div>Overall Rating</div>
        <div>Start Wondering since {this.state.startYear} with {this.props.Reviews.length} Reviews</div>
        <div className="barChart" style={{width: this.state.ReviewProportion.fiveStars}}>
          <span className="chartLabel">
            5 Star
          </span>
        </div>
        <div className="barChart" style={{width: this.state.ReviewProportion.fourStars}}>
          <span className="chartLabel">
            4 Star
          </span>
        </div>
        <div className="barChart" style={{width: this.state.ReviewProportion.threeStars}}>
          <span className="chartLabel">
            3 Star
          </span>
        </div>
        <div className="barChart" style={{width: this.state.ReviewProportion.twoStars}}>
          <span className="chartLabel">
            2 Star
          </span>
        </div>
        <div className="barChart" style={{width: this.state.ReviewProportion.oneStar}}>
          <span className="chartLabel">
            1 Star
          </span>
        </div>
        <div className="barChart" style={{width: this.state.ReviewProportion.zeroStar}}>
          <span className="chartLabel">
            0 Star
          </span>
        </div>
      </div>
    );
  }
}

export default Details;
