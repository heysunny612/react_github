import React from 'react';
import styles from './Button.module.css';

export default function Button({ styleName, buttonName, number, children }) {
  return (
    <button className={`${styles.button} ${styles[styleName]}`}>
      {children}
      <span className={styles.text}>{buttonName}</span>
      {number && <span className={styles.number}>{number}</span>}
    </button>
  );
}
