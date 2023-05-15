import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/IntroPage.module.css";
import TopBar from "@/components/TopBar";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import lottie from "lottie-web";
import { createRef, useEffect } from "react";

export default function IntroPage() {
  let animationContainer = createRef();

  
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
        <TopBar />
        <NavBar />
        <div className={styles.main_container}>
          <h1 className={styles.welcomeHeader}>Welcome</h1>
          <div className={styles.para_main}>
            <p>
              Introducing Seed Sprout, a plant growing app where you can learn
              to grow your own fruits and vegetables!</p>
              <p className={styles.p2}>
                Learn more below about gardening and take a quiz to choose what
                fruits or vegetables you can grow based on your answers!
              
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className={styles.inner_container}>
          <h1 className={styles.h1_size}>The Benefits of Gardening</h1>
          <br></br>
          <h2 className={styles.h2_size}>
            Fresh and healthy <br></br>produce
          </h2>
          <div className={styles.into_benefit_textimage}>
            <div className={styles.para_inner_left}>
              <p>Gardening can provide access to fresh and healthy produce.</p>
              <Image
                src="/graphics/fruitBasket.svg"
                width={150}
                height={110}
              ></Image>
            </div>
            <div className={styles.intro_image}></div>
          </div>
          <hr className={styles.hr_line}></hr>

          <hr></hr>
          <div className={styles.into_benefit_textimage}>
            <Image
              src="/graphics/environmentEarth.svg"
              width={130}
              height={130}
            ></Image>
            <div className={styles.para_inner_right}>
              <h2 className={styles.h2_size_right}>
                Environmental <br></br>benefits
              </h2>
              <p>Gardening can help reduce your carbon footprint.</p>
            </div>
          </div>
          <hr className={styles.hr_line}></hr>
          <h2 className={styles.h2_size}>
            Sense of <br></br>accomplishment
          </h2>
          <div className={styles.into_benefit_textimage}>
            <div className={styles.para_inner_left}>
              <p>
                Seeing your garden grow can give you a sense of accomplishment.
              </p>
            </div>
            <Image src="/graphics/bench.svg" width={140} height={90}></Image>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            size={["8.063rem", "3.813rem"]}
            text="Home"
            link="/"
            color="var(--seedBrown)"
          />
          <Button
            size={["12.063rem", "3.813rem"]}
            text="Tutorial"
            link="/Tutorial"
            color="var(--mantisGreen)"
          />
        </div>
        <div className={styles.footer_box}>
          
          <div className={styles.footer_box_green}></div>
        </div>
      </main>
    </>
  );
}
