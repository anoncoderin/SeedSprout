import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/SumFruitsSpringLowSmall.module.css'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import ResultsItems from '@/components/ResultsItems'
import SummaryResults from '@/components/SummaryResults'



export default function SumFruitsFallLowSmall() {
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
                        <SummaryResults text = 'Grow in the fall' color='79, 134, 247' img = '/graphics/fallSeason.svg'/>
                            </div>
                       <div className={styles.gridItem}>
                       <SummaryResults text = 'You can handle low maintenance' color='79, 134, 247' img = '/graphics/wateringCanLow.svg'/>
                        <SummaryResults text = 'You want to grow fruits' color='79, 134, 247' img = '/graphics/fruitBundle.svg'/>
                       </div>
                      
                        </div>
                    
                    </div>
                    <div>
                        <h1 className={styles.header_results}>Results</h1>
                        <p className={styles.results_description}> These fruits are the most suitable for you to <br></br> grow based on your results. </p>

                        <div className={styles.fruit_results}>
                           <ResultsItems img ='/summaryGraphics/Fruits/apples.png' text = 'Apples' link='/' color='79, 134, 247'/>
                           <ResultsItems img ='/summaryGraphics/Fruits/pears.png' text = 'Pears' link='/' color='79, 134, 247'/>
                           <ResultsItems img ='/summaryGraphics/Fruits/grapes.png' text = 'Grapes' link='/' color='79, 134, 247'/>
                           <ResultsItems img ='/summaryGraphics/Fruits/cranberries.png' text = 'Cranberries' link='/' color='79, 134, 247'/>
                        </div>
                    </div>
                        <Button size={["12.063rem", "3.813rem"]} text='Back'/>
                </div>
            </main>
        </>
    )
}