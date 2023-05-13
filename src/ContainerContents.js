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
        <Button styleName='greenBtn' buttonName='New Issue' />
      </div>

      <ListItemLayout className='top'>
        <div className={styles.filterState}>
          <ButtonStateFilters />
        </div>
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
        <ListItem badges={[{ color: 'red', title: 'bug' }]} />
      </ListItemLayout>
    </div>
  );
}

function ButtonStateFilters() {
  const [isOpenMode, setIsOpenMode] = useState(true);
  const openModeDataSize = 1;
  const closeModeDataSize = 2;
  return (
    <>
      <ButtonStateFilter
        isOpenMode={isOpenMode}
        onHandleClick={setIsOpenMode}
        size={openModeDataSize}
        state='Open'
      />

      <ButtonStateFilter
        isOpenMode={!isOpenMode}
        onHandleClick={setIsOpenMode}
        size={closeModeDataSize}
        state='Closed'
      />
    </>
  );
}

function ButtonStateFilter({ size, state, isOpenMode, onHandleClick }) {
  return (
    <button
      onClick={() => onHandleClick((isOpenMode) => !isOpenMode)}
      className={`${styles.textFilter} ${isOpenMode && styles['selected']}`}
    >
      {size} {state}
    </button>
  );
}
