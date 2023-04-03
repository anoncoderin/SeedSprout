import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import GreenButton from "@/components/GreenButton";
import BrownButton from "@/components/BrownButton";
import ResultsItems from "@/components/ResultsItems";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seed Sprout</title>
        <meta
          name="description"
          content="Learn how to grow your own fruits and veggies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <NavBar />
        <div className={styles.main_container}>
          <Image
            src="/logo/logo-with-text.svg"
            width={350}
            height={250}
          ></Image>
          <div className={styles.para_main_page}>
          <p>
            With Seed Sprout you can learn to grow your own fruits and
            Vegetables.
          </p>
          </div>
          <div className={styles.home_buttons}>
            <GreenButton text="Get Started" link="/" />
            <BrownButton text="About Us" link="/aboutUs" />
            <BrownButton text="Catalogue" link="/produceCatalogue" />
          </div>
        </div>
        
      </main>
    </>
  );
}
