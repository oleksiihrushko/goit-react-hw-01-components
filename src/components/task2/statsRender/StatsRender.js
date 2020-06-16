import React from 'react';
import PropTypes from 'prop-types';
import styles from '../statistics/statistics.module.css';

function getRandomColor() {
  var r = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

const StatsRender = ({ stats }) => {
  return (
    <ul className={styles.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

export default StatsRender;

StatsRender.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
