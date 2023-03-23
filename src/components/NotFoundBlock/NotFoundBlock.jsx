import styles from './NotFoundBlock.module.scss';

console.log(styles);

export const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>Жодної піци не знайдено :(</h1>
    </div>
  );
};
