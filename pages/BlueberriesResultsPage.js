import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/BlueberriesResultsPage.module.css'
import NavBar from '@/components/TopBar'
import Button from '@/components/Button'



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
                {/* <ResultsInfo 
                img='\fruitsAndVeggiesImages\blueberries.svg'
                title='Blueberries'
                itemTitle='blueberries'
                tipOne='Blueberries prefer well-drained soil that is high in organic matter. They also need a location that gets full sun for at least six hours a day.'
                tipTwo='Blueberries need consistent moisture to thrive. Water deeply once a week, or more frequently during hot, dry weather.'
                tipThree='Blueberries benefit from a layer of mulch around the base of the plants to help retain moisture and regulate soil temperature.'/> */}


               
            </main>
        </>
    )
}