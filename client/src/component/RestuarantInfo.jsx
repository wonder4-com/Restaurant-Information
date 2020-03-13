import React from "react";
import $ from 'jquery'


class RestaurantInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = { Restaurant :[]};
    }

    componentDidMount(){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/restaurant",
            dataType: "json",
            Success: (data) => {
                // console.log(data);
                that.setState({Restaurant: data}, () => {
                    console.log(this.state.Restaurant);
                })
            },
            Error: (err) =>{
                console.log(err);
            }
        })
    }

    render() {
        return (
            <div>{this.state.Restaurant[0]}</div>
        )
    }
}
export default RestaurantInfo