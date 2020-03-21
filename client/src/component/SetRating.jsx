import React from "react";
import Star from "./Star.jsx";


class SetRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      hoverRating: 0,
    };
  }

  handleRating(value) {
    this.setState({rating: value});
  }

  handleHoverRating(value) {
    this.setState({hoverRating: value});
  }

  render() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      let styleClass = "star-rating-blank";
      if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 1 || this.state.hoverRating === 1)) {
        styleClass = "star-rating-1"
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 2 || this.state.hoverRating === 2)) {
        styleClass = "star-rating-2"
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 3 || this.state.hoverRating === 3)) {
        styleClass = "star-rating-3"
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 4 || this.state.hoverRating === 4)) {
        styleClass = "star-rating-4"
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 5 || this.state.hoverRating === 5)) {
        styleClass = "star-rating-5"
      } 
      stars.push(
        <Star 
          key={i}
          styleClass={styleClass} 
          onClick={() => {
            this.handleRating(i + 1);
          }} 
          onMouseEnter={() => {this.handleHoverRating(i + 1)}}
          onMouseLeave={() => {this.handleHoverRating(0)}}
        />
      )
    }

    return (
        <div>
          {stars}
        </div>
    )
  }
}


export default SetRating;