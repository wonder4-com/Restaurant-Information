import React from 'react';
import Chart from './Chart.jsx'
import Bar from './Bar.jsx'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.updateDetailState = this.updateDetailState.bind(this);
    this.convertPercentage = this.convertPercentage.bind(this);
  }
  

  convertPercentage (obj) {
    for (var key in obj) {
        if (obj[key]/this.props.Reviews.length *100 >= 90){
          obj[key] = '100%';
        } else {
          obj[key] = obj[key]/this.props.Reviews.length *100 +10 +'%';
        }
    }
  }

  updateDetailState (reviewsProp) {
    const month = {
      January: [], February: [], March: [], April: [], May: [], June: [], July: [], August: [], September: [], October: [], November: [], December: []
    };
    const year = {};
    const yearWithMonth = {};
    const averageRating = ['zeroStar', 'oneStar', 'twoStars', 'threeStars', 'fourStars', 'fiveStars'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const reviewProportion = {};
    let startingYear = 30000;

    averageRating.forEach((rating) => {
      if (reviewProportion[rating] === undefined) {
        reviewProportion[rating] = 0;
      }
    });

    if (reviewsProp.length > 0) {
      // eslint-disable-next-line react/prop-types
      // Reviews = [{rating: 3, date:2017-03-23}]
      reviewsProp.forEach((review) => {
        // date = [2018,3,23]
        const date = review.date.split('-');
        const index = date[1] - 1;

        const specificYear = date[0];
        const reviewedMonth = months[index];

        if (yearWithMonth[specificYear] === undefined) {
          yearWithMonth[specificYear] = {};
        }
        if (yearWithMonth[specificYear][reviewedMonth] === undefined) {
          yearWithMonth[specificYear][reviewedMonth] = [];
          yearWithMonth[specificYear][reviewedMonth].push(review.rating);
        } else {
          yearWithMonth[specificYear][reviewedMonth].push(review.rating);
        }

        month[reviewedMonth].push(review.rating);
        if (year[date[0]] === undefined) {
          year[date[0]] = [];
        }
        year[date[0]].push(review.rating);
        reviewProportion[averageRating[review.rating]] += 1;
      });

      this.convertPercentage(reviewProportion);
      Object.keys(year).forEach((yearString) => {
        if (Number(yearString) < startingYear) {
          startingYear = yearString;
        }
      });

    }

    const reviewProportionArray = [reviewProportion.zeroStar, reviewProportion.oneStar, reviewProportion.twoStars, reviewProportion.threeStars, reviewProportion.fourStars, reviewProportion.fiveStars]
    return { Month: month, Year: year, ReviewProportion: reviewProportionArray, startYear: startingYear, SortByYearAndMonth: yearWithMonth, yearStatus: '2020' };
  }


  render() {
    return (
      <div className ="modal_content_details">
        <div className="x-button" id="target" onClick={this.props.updateDetailsStatus}>&times;</div>
        <div className="Line_chart">
        <Chart ratingData={this.updateDetailState(this.props.Reviews).SortByYearAndMonth} />
        </div>
        <div className="overall-rating">Overall Rating</div>
        <div className="Bar-Box">
          Start Wondering since &nbsp;
          {this.updateDetailState(this.props.Reviews).startYear}
          &nbsp; with &nbsp;
          {this.props.Reviews.length} &nbsp;
          Reviews
        </div>
        {this.updateDetailState(this.props.Reviews).ReviewProportion
          .map((ratingPercentage, index) => {
            const legend = `${index}  Stars`;
            return <Bar percent={ratingPercentage} Star={legend} />;
          })}
      </div>
    );
  }
}

export default Details;
