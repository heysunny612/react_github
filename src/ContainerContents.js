import React, { useState } from 'react';
import styles from './ContainerContents.module.css';
import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';

export default function ContainerContents() {
  const [text, setText] = useState('');
  return (
    <div className={styles.contents}>
      <div className={styles.topSection}>
        <form className={styles.form}>
          <input
            type='text'
            className={styles.input}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <Button styleName={'greenBtn'} buttonName={'New Issue'} />
      </div>
      <ListItemLayout className={'top'}>
        <div className={styles.filterLists}>
          <span>Author</span>
          <span>Lable</span>
          <span>Projects</span>
          <span>Milestones</span>
          <span>Assignee</span>
          <span>Sort</span>
        </div>
      </ListItemLayout>
      <ListItemLayout>
        <ListItem />
      </ListItemLayout>
    </div>
  );
}
