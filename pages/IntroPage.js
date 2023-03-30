import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/IntroPage.module.css";
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
          <h1 className={styles.h1_size}>Welcome</h1>
          <div className={styles.para_main}>
            <p>
              Introducing our plant growing app, designed to help garden
              enthusiast select the best plant for the season. You'll be able to
              choose the perfect plants for your garden or balcony, no matter
              how big or small the space is.
            </p>
            <br></br>
            <p>
              Buying produce fruits and vegetables can negatively impact the
              world through its contribution to greenhouse gas emissions and
              climate change due to transportation, water usage, pesticide use,
              soil erosion, and food waste. Conventional farming practices often
              rely on harmful chemicals that can leach into the soil and water,
              reducing soil fertility and productivity over time. However,
              gardening can help reduce these negative impacts and promote more
              environmentally-friendly agriculture practices.
            </p>
          </div>
          <br></br>
          
          <div className={styles.inner_container}>
            <h1 className={styles.h1_size}>The Benefits of Gardening</h1>
            <br></br>
            <h2 className={styles.h2_size}>
                  Fresh and healthy <br></br>produce
                </h2>
            <div className={styles.into_benefit_textimage}>
              <div>
                <p>
                  Gardening can provide access to fresh and healthy produce.
                </p>
              </div>
              <div>
                <Image
                  src="/graphics/fruit-basket.png"
                  width={130}
                  height={100}
                ></Image>
              </div>
              
            </div>
            <hr className={styles.hr_line}></hr>
            
            <h2 className={styles.h2_size}>
              Environmental <br></br>benefits
            </h2>
            <hr></hr>
            <div className={styles.into_benefit_textimage}>
              
              <Image
                src="/graphics/Environment_earth.png"
                width={100}
                height={100}
              ></Image>
              <p>Gardening can help reduce your carbon footprint.</p>
            </div>
            <hr className={styles.hr_line}></hr>
            <h2 className={styles.h2_size}>
              Sense of <br></br>accomplishment
            </h2>
            <div className={styles.into_benefit_textimage}>
              <p>
                Seeing your garden grow can give you a sense of accomplishment.
              </p>
              <Image src="/graphics/bench.png" width={130} height={80}></Image>
            </div>
          </div>
        </div>
        <div className={styles.footer_box}>
            <Image  className={styles.footer_box_image} src="/graphics/tree4.png" width={1000} height={18}></Image>
            <div className={styles.footer_box_green}></div>
        </div>
      </main>
    </>
  );
}