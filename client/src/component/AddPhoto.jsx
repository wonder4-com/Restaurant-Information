import React from 'react';

class AddPhoto extends React.Component {
  constructor(props) {
    super(props);
    // this.somefunc = this.somefunc.bind(this);
  }

  render() {
    return (
    // ReactDOM.createPortal(
      <div className ="modal_content">
        <div className="x-button" onClick={this.props.updatePhotoFormStatus}>&times;</div>
        <h1>ADD PHOTO</h1>
        {/* <DragAndDrop /> */}
      </div>
    );
    // ,document.getElementById("photoform"))}
  }
}
export default AddPhoto