import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import TopBar from "@/components/TopBar";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import lottie from "lottie-web";
import { createRef, useEffect, useState } from "react";

export default function Home() {
  let animationContainer = createRef();

  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/Animation/background.json",
    });

    return () => anim.destroy();
  }, []);

  function handleSetShowApp() {
    setShowApp(true);
    localStorage.setItem("showApp", true);
  }

  return (
    <>
      <Head>
        <title>Seed Sprout</title>
        <meta
          name="description" content="Learn how to grow your own fruits and veggies"
        />
        <meta
          name="viewport" content="width=414, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.animation_container} ref={animationContainer} style={{height: '896px'}}/>
        <NavBar />
        <div className={styles.main_container}>
          <Image
            src="/logo/logo-with-text.svg"
            width={350}
            height={250}
            alt="Logo"
          ></Image>
          <div className={styles.para_main_page}>
            <p>
              With Seed Sprout you can learn to grow your own fruits and
              vegetables.
            </p>
          </div>
          <div className={styles.home_buttons}>
            <Button
              size={["12.063rem", "3.813rem"]}
              text="Get Started"
              link="/IntroPage"
              color="var(--mantisGreen)"
            />
            <Button
              size={["12.063rem", "3.813rem"]}
              text="About Us"
              link="/AboutUs"
            />
            <Button
              size={["12.063rem", "3.813rem"]}
              text="Catalogue"
              link="/ProduceCatalogue"
            />
          </div>
        </div>
      </main>
    </>
  );
}
