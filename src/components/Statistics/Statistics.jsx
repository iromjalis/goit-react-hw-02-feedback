import React  from 'react';
import PropTypes from 'prop-types';
import   './Statistics.css';
let randomColor = (Math.round, Math.random, 255)
// console.log('random', randomColor)



const Statistics = ({ title, stats }) => {
  return (
    <div className="StatisticsWrapper">
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
          <ul className="stat-list"> 
            {stats.map(({id, label, percentage}) =>
            (<li className="stat-item" style={{backgroundColor: `rgb(randomColor, randomColor, randomColor)`}} key={id}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage} %</span>
            </li>))}
          </ul>
      </section>
    </div>
    )
  }
 
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.any.isRequired),
};

Statistics.defaultProps = {
  // bla: 'test',
};

export default Statistics;
