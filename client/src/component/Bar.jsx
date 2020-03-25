import React from 'react';
import styles from '../../dist/style.css';

const Bar = (props) => (
  <div className={styles.barChart} style={{width: props.percent}}>
    <span className={styles.chartLabel}>
      {props.Star}
    </span>
 </div>
)


export default Bar;