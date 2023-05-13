import React from 'react';
import styles from './Footer.module.css';
const footerList = [
  { title: 'Terms', link: '/' },
  { title: 'Privacy', link: '/' },
  { title: 'Security', link: '/' },
  { title: 'Status', link: '/' },
  { title: 'Contact', link: '/' },
  { title: 'GitHub', link: '/' },
  { title: 'Pricing', link: '/' },
  { title: 'API', link: '/' },
  { title: 'Training', link: '/' },
  { title: 'Blog', link: '/' },
  { title: 'About', link: '/' },
];
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        {footerList.map(({ link, title }) => {
          return (
            <li className={styles.list} key={title}>
              <a href={link} className={styles.link}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
