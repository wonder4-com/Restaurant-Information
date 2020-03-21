import React from 'react';
import SetRating from './SetRating.jsx';

class WriteReview extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
    <div className ="modal_content">
      <div className="x-button" onClick={this.props.updateReviewFormStatus}>&times;</div>
      <h1>{this.props.name}</h1>
      <div><SetRating/></div>
      <textarea id="comment" placeholder="your comment here"></textarea>
      <button id="commentSubmit">Post Review</button>
    </div>
    )
  }
}
export default WriteReview