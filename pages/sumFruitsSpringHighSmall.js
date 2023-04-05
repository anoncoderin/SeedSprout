import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/SumFruitsSpringLowSmall.module.css'
import NavBar from '@/components/NavBar'
import BrownButton from '@/components/BrownButton'
import ResultsItems from '@/components/ResultsItems'
import SummaryResults from '@/components/summaryResults'



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
                        <div className={styles.summaryResults}>
                            <div className={styles.gridItem}>
                            <SummaryResults text = 'Your garden bed is small' color='79, 134, 247' img = '/graphics/smallGarden.svg'/>
                        <SummaryResults text = 'Grow in the spring' color='79, 134, 247' img = '/graphics/springSeason.svg'/>
                            </div>
                       <div className={styles.gridItem}>
                       <SummaryResults text = 'You can handle high maintenance' color='79, 134, 247' img = '/graphics/wateringCanHigh.svg'/>
                        <SummaryResults text = 'You want to grow fruits' color='79, 134, 247' img = '/graphics/fruitBundle.svg'/>
                       </div>
                      
                        </div>
                    
                    </div>
                    <div>
                        <h1 className={styles.header_results}>Results</h1>
                        <p className={styles.results_description}> These fruits are the most suitable for you to <br></br> grow based on your results. </p>

                        <div className={styles.fruit_results}>
                           <ResultsItems img ='/summaryGraphics/Fruits/gooseberries.png' text = 'Gooseberries' link='/' color='79, 134, 247'/>
                           <ResultsItems img ='/summaryGraphics/Fruits/kiwi.png' text = 'Kiwi' link='/' color='79, 134, 247'/>
                           <ResultsItems img ='/summaryGraphics/Fruits/figs.png' text = 'Figs' link='/' color='79, 134, 247'/>
                           <ResultsItems img ='/summaryGraphics/Fruits/lime.png' text = 'Lime' link='/' color='79, 134, 247'/>
                        </div>
                    </div>
                        <BrownButton text='Back'/>
                </div>
            </main>
        </>
    )
}