import React from 'react';
import styles from './ListItemLayout.module.css';

export default function ListItemLayout({ children, className }) {
  return (
    <div className={`${styles.wrapper} ${className && styles[className]}`}>
      <input
        type='checkbox'
        className={styles.checkbox}
        // value={checked}
        // onChange={onChangeCheckBox}
      />
      {children}
    </div>
  );
}
