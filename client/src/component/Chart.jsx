import React from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
    this.updateYearStatusTo2019 = this.updateYearStatusTo2019.bind(this);
    this.updateYearStatusTo2020 = this.updateYearStatusTo2020.bind(this);
    this.getChartData = this.getChartData.bind(this);
    this.getAverage = this.getAverage.bind(this);
  }


  componentDidMount() {
    this.getChartData('2020');
  }

  getAverage(array) {
    if (array === undefined) {
      return 0;
    }

    const average = array.reduce((accumulator, currentObj) => {
        return accumulator + currentObj
      }, 0) / array.length

    return average;
  }

  getChartData(year) {
    const { ratingData } = this.props;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' ,'November' ,'December'];

    const averageData = [];
    months.forEach((month) => {
      averageData.push(this.getAverage(ratingData[year][month]));
    });


    console.log('this is line 29', this.props.ratingData);
    this.setState({
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' ,'November' ,'December'],
        datasets: [
          {
            label: 'Rating',
            data: averageData,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)'
            ],
            lineTension:0
          }
        ]
      }
    });
  }

  updateYearStatusTo2019() {
    this.getChartData('2019');
  }

  updateYearStatusTo2020() {
    this.getChartData('2020');
    console.log('this is line 90', this.props.ratingData)
  }

  render() {
    return (
        <div className="App">
          <button type="button" onClick={this.updateYearStatusTo2019}>2019 </button>
          <button type="button" onClick={this.updateYearStatusTo2020}>2020 </button>

          <div className="chart">
            <Line
              data={this.state.chartData}
              options={ {
                legend: {
                  display: false
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      max: 5,
                      min: 0,
                      stepSize: 1
                    }
                  }],
                }
              }}
          />
          </div>
        </div>
    );
  }
}


export default Chart