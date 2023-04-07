import Head from 'next/head'
import NavBar from '@/components/NavBar'
import QuizOptions from '@/components/QuizOptions'
import Button from '@/components/Button'
import QuizProgress from '@/components/QuizProgress'
import styles from '@/styles/Quiz.module.css'

export default function quizPageThree() {

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
                <div className={styles.bodyContent}>
                    <QuizProgress />
                    <div className={styles.quizContainer}>
                        <h1 className={styles.questionHeader}>How much maintance can you handle?</h1>
                        <QuizOptions text='Low' smalltext='‎ ‎ ‎'  img='/graphics/wateringCanLow.svg' width='100' height='150' />
                        <QuizOptions text='High'  img='/graphics/wateringCanHigh.svg' width='100' height='150'/>
                    </div>
                    <div className={styles.backNextContainer}>
                        <Button size={["9.188rem", "2.905rem"]} text='Back' link='/quizPageTwo'/>
                        <Button size={["9.188rem", "2.905rem"]} text='Next' link='/quizPageFour' />
                    </div>
                </div>
            </main>
        </>
    )
}