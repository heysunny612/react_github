import React, { useState } from 'react';
import styles from './Tabs.module.css';
import { BsCode, BsPlayCircle, BsBook } from 'react-icons/bs';
import { FaRegDotCircle } from 'react-icons/fa';
import { IoIosGitPullRequest } from 'react-icons/io';
import { AiOutlineProject } from 'react-icons/ai';
import { MdSecurity, MdInsights } from 'react-icons/md';

const tabItem = [
  { title: 'Code', number: 2, icon: <BsCode /> },
  { title: 'Issues', number: 53, icon: <FaRegDotCircle /> },
  { title: 'Pull requests', number: 0, icon: <IoIosGitPullRequest /> },
  { title: 'Actions', number: 0, icon: <BsPlayCircle /> },
  { title: 'Projects', number: 22, icon: <AiOutlineProject /> },
  { title: 'Wiki', number: 12, icon: <BsBook /> },
  { title: 'Security', number: 0, icon: <MdSecurity /> },
  { title: 'Insights', number: 12, icon: <MdInsights /> },
];
export default function Taps() {
  const [seletedTabIdx, setSeletedTabIdx] = useState(0);
  return (
    <ul className={styles.tabs}>
      {tabItem.map((item, index) => (
        <Tab
          key={index}
          selected={index === seletedTabIdx && true}
          title={item.title}
          number={item.number}
          onClick={() => setSeletedTabIdx(index)}
          icon={item.icon}
        />
      ))}
    </ul>
  );
}

function Tab({ title, selected, number, icon, onClick }) {
  return (
    <li
      className={`${styles.tabList} ${selected && styles['selected']}`}
      onClick={onClick}
    >
      <div className={styles.listBox}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.title}>{title}</span>
        {number > 0 && <span className={styles.number}>{number}</span>}
      </div>
    </li>
  );
}
