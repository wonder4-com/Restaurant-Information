import React from 'react';

const Bar = (props) => (
  <div className="barChart" style={{width: props.percent}}>
    <span className="chartLabel">
      {props.Star}
    </span>
 </div>
)


export default Bar;