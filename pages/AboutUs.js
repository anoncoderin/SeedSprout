import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/AboutUs.module.css";
import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";

export default function AboutUs() {
  var title = process.env.NEXT_PUBLIC_TITLE;

  return (
    <>
      <Head>
        <title>Seed Sprout</title>
        <meta name="description" content="About Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <TopBar />
        <NavBar />
        <h1 className={styles.Header}>About Us</h1>
        <h1 className={styles.Header}>{title}</h1>
        <div className={styles.container}>
          <div className={styles.section}>
            <Image src="/graphics/neema.svg" width={100.4} height={144} />
            <div className={styles.description}>
              <h1 className={styles.name}>Neema</h1>
              <p className={styles.role}>Role</p>
            </div>
          </div>

          <div className={styles.section_madhu}>
            <Image src="/graphics/madhu.svg" width={149} height={138} />
            <div className={styles.description_madhu}>
              <h1 className={styles.name}>Madhu</h1>
              <p className={styles.role}>
                I am Madhu. I am passionate about designing and coding. I joined
                the D3 program to learn the technical skills to create amazing
                digital work using my creativity. I am excited to explore all
                the possibilities D3 can offer me.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <Image src="/graphics/Jenny.svg" width={99} height={142} />
            <div className={styles.description}>
              <h1 className={styles.name}>Jenny</h1>
              <p className={styles.role}>Role</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
