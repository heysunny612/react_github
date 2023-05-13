import styles from './ListItem.module.css';
import Badge from './Badge';
export default function ListItem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  badges,
}) {
  return (
    <div>
      <div role='button' onClick={onClickTitle} className={styles.title}>
        Issue Exapmle
        {badges &&
          badges.map((badge, index) => {
            return <Badge key={index} {...badge} />;
          })}
      </div>
      <div className={styles.description}>#description</div>
    </div>
  );
}
