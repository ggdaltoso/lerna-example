import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';

import { Footer } from 'footer';
import { Header } from 'header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/StackBlitz.svg"
            alt="StackBlitz Logo"
            width={380}
            height={250}
            priority
          />
        </div>

        <Footer />
      </main>
    </>
  );
}
