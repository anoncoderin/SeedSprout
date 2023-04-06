import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Tutorial.module.css";
import NavBar from "@/components/NavBar";
import GreenButton from "@/components/GreenButton";
import BrownButton from "@/components/BrownButton";

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
          <h1 className={styles.h1_size}>Tutorial</h1>
          <div className={styles.para_main}>
            <div className={styles.girl_image}>
            <Image src="/graphics/girlGardening.svg" width={250} height={250}></Image>
            </div>
            <p>
              Introducing our plant growing app, designed to help garden
              enthusiast select the best plant for the season. You'll be able to
              choose the perfect plants for your garden or balcony, no matter
              how big or small the space is.
            </p>
            <br></br>
            <p>
              <b>Step 1:</b> Choose the area you want to do gardening. eg: balcony, in
              lawn or in a small pot.
            </p>
            <br></br>
            <p>
              <b>Step 2: </b>Once you select the area, go ahead and select the season
              to find out the right plant to grow.
            </p>
          </div>
          <br></br>
          <GreenButton text="Continue" link="/"/>
        </div>
        
      </main>
    </>
  );
}
