import styles from './ListItem.module.css';
import ListItemLayout from './ListItemLayout';
export default function ListItem({ checked, onChangeCheckBox, onClickTitle }) {
  return (
    <div>
      <div role='button' onClick={onClickTitle} className={styles.title}>
        Issue Exapmle
      </div>
      <div className={styles.description}>#description</div>
    </div>
  );
}
