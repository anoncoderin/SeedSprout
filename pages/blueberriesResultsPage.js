import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/BlueberriesResultsPage.module.css'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'



export default function BlueberriesResultsPage() {
    return (
        <>
            <Head>
                <title>Seed Sprout</title>
                <meta name="description" content="Blueberries" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main className={styles.main}>
                <NavBar />

<div className={styles.container}>
<div className={styles.blueberries_description}>
                    <h1 className={styles.header}>Blueberries</h1>
                    <Image src='/fruitsAndVeggiesImages/blueberries.png' width={210} height={216} />
                    <p>
                        Blueberries are well-suited for small spaces and containers, and are low maintenance. They will produce fruit in the spring, but need a well-draining soil and an acidic soil pH.
                    </p>

                </div>

                <div className={styles.tips}>
                    <h1 className={styles.header_tips}>Tips on growing <br></br> blueberries</h1>

                    <div className={styles.numbered_tips}>
                        <h2 className={styles.numbered}>1.</h2> <p>Harvesting: Blueberries are ready to harvest when they are fully blue and slightly soft to the touch. Harvest the berries in the morning when they are cool and dry.</p>
                    </div>

                    <div className={styles.numbered_tips}>
                        <h2 className={styles.numbered}>2.</h2> <p>Storage: Store the harvested berries in the refrigerator or freezer. Blueberries can be frozen for later use or preserved by canning.</p>
                    </div>

                    <div className={styles.numbered_tips}>
                        <h2 className={styles.numbered}>3.</h2> <p>Sun and water requirements: Blueberries require full sun exposure for at least six hours a day. Keep the soil moist but not waterlogged, especially during the fruiting season.</p>
                    </div>

                </div>



                
                    <div className={styles.backButton}>
                    <Button size={["12.063rem", "3.813rem"]} text='Back' />
                    </div>
                  
               

</div>
               








            </main>
        </>
    )
}