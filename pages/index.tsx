import ProductStats from "components/product-stats/ProductStats";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "styles/IndexPage.module.scss";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stackline | Data, tools, and services</title>
        <meta name="Stackline" content="Data, tools, and services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ProductStats productID="B007TIE0GQ" />
      </main>
    </>
  );
};

export default IndexPage;
