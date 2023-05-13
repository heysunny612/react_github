import React from 'react';
import styles from './Badge.module.css';
export default function Badge({ title, color }) {
  return <span className={`${styles.badge} ${styles[color]}`}>{title}</span>;
}
