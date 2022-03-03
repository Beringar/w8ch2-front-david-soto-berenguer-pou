import Head from "next/head";
import Image from "next/image";
import TuitList from "../components/TuitList";
import styles from "../styles/Home.module.css";

const TuitahTimeline = ({ tuits }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tuitah Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <Image src="/favicon.ico" alt="logo" width={100} height={100}></Image>
          <h1 className={styles.description}>uitah Timeline</h1>
        </div>
        <TuitList tuits={tuits}></TuitList>
      </main>

      <footer className={styles.footer}>
        <p>Powered by David S & Berenguer P</p>
      </footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_TUITAH_API_URL);
  const { tuits } = await response.json();
  return {
    props: { tuits },
  };
};

export default TuitahTimeline;
