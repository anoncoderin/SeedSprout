import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/SumVegSummer.module.css'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'



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
                        <Image className={styles.graphic_results} src='/summaryGraphics/VegGraphicImage/vegSummer/result-sum-low-largeArea.svg' width={327} height={392} />
                    </div>
                    <div>
                        <h1 className={styles.header_results}>Results</h1>
                        <p className={styles.results_description}> These vegetables are the most suitable for you to <br></br> grow based on your results. </p>

                        <div className={styles.fruit_results}>
                            <a href="/blueberriesResultsPage">
                                <Image src='/summaryGraphics/VegGraphicImage/vegSummer/corn-low-largeArea.svg' width={293} height={136}/>
                            </a>
                            <a href="/">
                                <Image src='/summaryGraphics/VegGraphicImage/vegSummer/kale-low-largeArea.svg' width={293} height={136} />
                            </a>
                            <a href="/">
                                <Image src='/summaryGraphics/VegGraphicImage/vegSummer/okra-low-largeArea.svg' width={293} height={136} />
                            </a>
                            <a href="/">
                                <Image src='/summaryGraphics/VegGraphicImage/vegSummer/lettuce-low-largeArea.svg' width={293} height={136} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footer_container}>
                        <div className={styles.btn_footer}><Button text='Restart Quiz' /></div>
                        </div>
                </div>
            </main>
        </>
    )
}