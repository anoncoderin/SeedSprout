import Head from 'next/head'
import styles from '@/styles/ProduceCatalogue.module.css'
import Accordion from '@/components/Accordion'
import TopBar from '@/components/TopBar'
import NavBar from '@/components/NavBar'

export default function ProduceCatalogue() {
    return (
        <>
            <Head>
                <title>Seed Sprout - Produce Catalogue</title>
                <meta name="description" content="Learn how to grow your own fruits and veggies" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main className={styles.main}>
                <TopBar/>
                <NavBar/>
                <div className={styles.catalogueContainer}>
                    <div>
                    <h1 className={styles.pageHeader}>Produce Catalogue</h1>
                    <h2 className={styles.pageSubHeader}>Tips on how you can grow your fruits and vegetables.</h2>
                    </div>
                <Accordion />
                </div>
            </main>
        </>
    )
}