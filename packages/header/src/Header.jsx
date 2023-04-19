import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <p>
        This is the header from{' '}
        <code className={styles.code}>packages/header</code>
      </p>
    </header>
  );
}
