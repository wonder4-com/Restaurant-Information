import React from 'react';
class Details extends React.Component{
    constructor(props){
        super(props);
        this.state = {Clicked : false};
    }


    render(){
        return(
            <div className ="modal_content">
                <div onClick={this.props.updateStatus}>&times;</div>
            </div>
        )
    }
}
export default Details