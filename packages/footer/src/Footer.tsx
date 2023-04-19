export function Footer({ styles, inter }) {
  return (
    <footer className={styles.grid}>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          This <span>-&gt;</span>
        </h2>
        <p className={inter.className}>Just to</p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Is <span>-&gt;</span>
        </h2>
        <p className={inter.className}>demonstrate</p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          The footer <span>-&gt;</span>
        </h2>
        <p className={inter.className}>a simple yarn workspace</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Package <span>-&gt;</span>
        </h2>
        <p className={inter.className}>project</p>
      </a>
    </footer>
  );
}
