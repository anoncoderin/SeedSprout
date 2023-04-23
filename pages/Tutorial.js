import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Tutorial.module.css";
import NavBar from "@/components/TopBar";
import Button from "@/components/Button";


export default function Tutorial() {

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
              Here, you can take a 4 step quiz to determine what fruits or vegetables you can grow
              in your garden, choosing how much maintanence is required, how much space you have, and what season you want to plant for.
            </p>
            <br></br>
            <p>
              <b>Step 1:</b> Choose any of the options that you feel apply to your needs.
            </p>
            <br></br>
            <p>
              <b>Step 2: </b>Once you're done, you can see which fruits or vegetables you can grow depending on what you picked.
              You can even tap on each one to see more information about them
            </p>
            <p>
              <b>Note: </b>If you don't want to take the quiz over and over, feel free to go to the product catalogue and find the fruit or vegetable you're looking for.
            </p>
          </div>
          <br></br>
          <Button text="Continue to quiz" size={["12.063rem", "3.813rem"]} link="/QuizPage" color={'var(--mantisGreen'}/>
        </div>
      </main>
    </>
  );
}
