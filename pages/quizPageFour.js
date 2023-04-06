import Head from 'next/head'
import NavBar from '@/components/NavBar'
import GreenButtonQuiz from '@/components/GreenButtonQuiz'
import BrownButtonSmall from '@/components/BrownButtonSmall'
import QuizProgress from '@/components/QuizProgress'
import styles from '@/styles/Quiz.module.css'

export default function quizPageFour() {

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
                        <h1 className={styles.questionHeader}>What season are you planting for?</h1>
                        <GreenButtonQuiz text='Spring'  img='/graphics/springSeason.svg' width='75' height='150' />
                        <GreenButtonQuiz text='Summer'  img='/graphics/summerSeason.svg' width='80' height='150'/>
                        <GreenButtonQuiz text='The Fall'  img='/graphics/fallSeason.svg' width='70' height='150'/>
                    </div>
                    <div className={styles.backNextContainer}>
                        <BrownButtonSmall text='Back' link='/quizPageThree'/>
                        <BrownButtonSmall text='Next' link='/' />
                    </div>
                </div>
            </main>
        </>
    )
}