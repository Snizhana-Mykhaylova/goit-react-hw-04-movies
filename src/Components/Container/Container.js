import React from 'react';
import PropTypes from 'prop-types';
import styles from './container.module.css';

const Container = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
