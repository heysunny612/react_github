import React from 'react';
import styles from './ContainerHeader.module.css';
import Button from './components/Button';
import Tabs from './components/Tabs';
import { BsEyeSlash, BsStar } from 'react-icons/bs';
import { GiCheckboxTree } from 'react-icons/gi';

export default function ContainerHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.titleContainer}>
          <p>Facebook / react </p>
        </div>
        <div className={styles.buttonContainer}>
          <Button styleName={'greyBtn'} buttonName={'Watch'} number={277}>
            <BsEyeSlash />
          </Button>
          <Button styleName={'greyBtn'} buttonName={'Fork'} number={457}>
            <GiCheckboxTree />
          </Button>
          <Button styleName={'greyBtn'} buttonName={'Star'} number={5}>
            <BsStar />
          </Button>
        </div>
      </div>
      <Tabs />
    </div>
  );
}
