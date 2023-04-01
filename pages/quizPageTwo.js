import Head from 'next/head'
import NavBar from '@/components/NavBar'
import GreenButton from '@/components/GreenButton'
import BrownButtonSmall from '@/components/BrownButtonSmall'
import QuizProgress from '@/components/QuizProgress'
import styles from '@/styles/Quiz.module.css'

export default function quizPageTwo() {

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
                        <h1 className={styles.questionHeader}>How large is your garden bed?</h1>
                        <GreenButton text='Small' smalltext='>9ft²' img='/graphics/smallGarden.svg' width='60' height='150' />
                        <GreenButton text='Large' smalltext='>9ft²' img='/graphics/largeGarden.svg' width='80' height='150'/>
                    </div>
                    <div className={styles.backNextContainer}>
                        <BrownButtonSmall text='Back' link='quizPageOne' />
                        <BrownButtonSmall text='Next' link='/quizPageThree' />
                    </div>
                </div>
            </main>
        </>
    )
}