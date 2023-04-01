import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/summaryResults.module.css'
import NavBar from '@/components/NavBar'
import BrownButton from '@/components/BrownButton'



export default function Results() {
    return (
        <>
            <Head>
                <title>Seed Sprout</title>
                <meta name="description" content="Results" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main className={styles.main}>
                <NavBar />
                <div className={styles.container}>
                    <div>
                        <h1 className={styles.header_results}>Summary</h1>
                        <Image className={styles.graphic_results} src='summaryGraphics/fruits/resultsFruitsOne.svg' width={327} height={392} />
                    </div>
                    <div>
                        <h1 className={styles.header_results}>Results</h1>
                        <p className={styles.results_description}> These fruits are the most suitable for you to <br></br> grow based on your results. </p>

                        <div className={styles.fruit_results}>
                            <a href="/blueberriesResultsPage">
                                <Image src='/summaryGraphics/fruits/blueberries.svg' width={293} height={136} />
                            </a>
                            <a href="/">
                                <Image src='summaryGraphics/fruits/blackberries.svg' width={293} height={136} />
                            </a>
                            <a href="/">
                                <Image src='summaryGraphics/fruits/strawberries.svg' width={293} height={136} />
                            </a>
                            <a href="/">
                                <Image src='summaryGraphics/fruits/raspberries.svg' width={293} height={136} />
                            </a>
                        </div>
                    </div>
                        <BrownButton text='Back' />
                </div>
            </main>
        </>
    )
}
