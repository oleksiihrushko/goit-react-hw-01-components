import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

export default function Statistics({ title, children }) {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      {children}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};

Statistics.defaultProps = {
  title: 'not given prop',
};
