// import React from 'react';
// import {Bar, Line, Pie} from 'react-chartjs-2';

// class Chart extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       chartData:props.chartData
//     }
//   }


//   render(){
//     return (
//       <div className="chart">
//         <Line
//           data={this.state.chartData}
//           options={{
//             title:{
//               display:this.props.displayTitle,
//               fontSize:25
//             },
//             legend:{
//               display:this.props.displayLegend,
//               position:this.props.legendPosition
//             },          
//             scales: {
//                 yAxes: [{
//                   ticks: {
//                     max: 5,
//                     min: 0,
//                     stepSize: 1
//                   }
//                 }],
//             }
//           }}
//         />
//       </div>
//     )
//   }
// }

// export default Chart;