import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import GreenButton from '@/components/GreenButton'
import BrownButton from '@/components/BrownButton'


export default function Home() {
  return (
    <>
      <Head>
        <title>Seed Sprout</title>
        <meta name="description" content="Learn how to grow your own fruits and veggies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <NavBar />
        <GreenButton text='Get Started' link='/' />
        <BrownButton text='Lorem' link='/' />
        <BrownButton text='Catalogue' link='/produceCatalogue' />
      </main>
    </>
  )
}
