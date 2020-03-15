import React from "react";
import $ from 'jquery';
import Details from './Details.jsx'


class RestaurantInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = { Restaurant :{}, Review:{}, clicked:false};
        this.updateClickStatus = this.updateClickStatus.bind(this);
    }

    updateClickStatus (){
        console.log('clicked')
        var restaurantState = this.state.Restaurant;
        var restaurantReview = this.state.Review;
        this.setState({Restaurant:restaurantState, Review:restaurantReview, clicked:!this.state.clicked});
    }

    componentDidMount(){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/restaurant",
            dataType: "json",
            success: (data) => {
                console.log(data);
                var claimStatus;
                if(data[0].claimed ===true) {
                    claimStatus = 'Claimed'
                }else{
                    claimStatus = 'Unclaimed'
                }
                var restaurant= {claimed: claimStatus, name: data[0].restaurantname, price:data[0].prize, category:data[0].category};
                // need to worry about how to average rating by date later
                // var review = {AverageRating: data.rating , date : data.date}
                if(data[0].rating){
                    var average = data.reduce((accumulator, currentObj)=>{
                        return accumulator + currentObj.rating
                    },0)/data.length
    
                    var review = {AverageRating: average, amount:data.length}; 
                }else{
                    var review = {AverageRating:0, amount:0}  
                }
                that.setState({Restaurant:restaurant, Review:review}, () => {
                    console.log(that.state.Restaurant, that.state.Review);
                })
            },
            error: (err) =>{
                console.log(err);
            }
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.Restaurant.name}&emsp;{this.state.Restaurant.claimed}</div>
                <div>
                    {this.state.Review.AverageRating}&emsp;
                    {this.state.Review.amount}&ensp;Reviews&emsp;
                    <button onClick={this.updateClickStatus}>Details</button>
                    {this.state.clicked? <Details updateStatus={this.updateClickStatus}/> : null}
                </div>
                <div>{this.state.Restaurant.price}&emsp;{this.state.Restaurant.category}</div>
            </div>
        )
    }
}

export default RestaurantInfo