import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Chart from "@/components/Chart";
import NavBarBottom from "@/components/NavBarBottom";
import lottie from "lottie-web";
import { createRef, useEffect } from 'react'

export default function Home() {

  let animationContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/homepagebg.json"
    })

    return () => anim.destroy();
  }, [])

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
        <div className={styles.animation_container} ref={animationContainer} />


        <NavBar />
        <NavBarBottom />
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
            <Button size={["12.063rem", "3.813rem"]} text="Get Started" link="/IntroPage" color='var(--mantisGreen)' />
            <Button size={["12.063rem", "3.813rem"]} text="About Us" link="/AboutUs" />
            <Button size={["12.063rem", "3.813rem"]} text="Catalogue" link="/ProduceCatalogue" />
          </div>
        </div>

      </main>
    </>
  );
}

