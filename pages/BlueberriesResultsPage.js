import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/BlueberriesResultsPage.module.css'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import ResultsInfo from '@/components/resultsInfo'


export default function BlueberriesResultsPage() {
    return (
        <>
            <Head>
                <title>Seed Sprout</title>
                <meta name="description" content="ProduceInfo" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main className={styles.main}>
                <NavBar />
                <ResultsInfo/>


               
            </main>
        </>
    )
}