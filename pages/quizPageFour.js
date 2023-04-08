import Head from 'next/head'
import NavBar from '@/components/NavBar'
import QuizOptions from '@/components/QuizOptions'
import Button from '@/components/Button'
import QuizProgress from '@/components/QuizProgress'
import styles from '@/styles/Quiz.module.css'

export default function QuizPageFour() {

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
                        <QuizOptions text='Spring'  img='/graphics/springSeason.svg' width='75' height='150' />
                        <QuizOptions text='Summer'  img='/graphics/summerSeason.svg' width='80' height='150'/>
                        <QuizOptions text='The Fall'  img='/graphics/fallSeason.svg' width='70' height='150'/>
                    </div>
                    <div className={styles.backNextContainer}>
                        <Button size={["9.188rem", "2.905rem"]} text='Back' link='/quizPageThree'/>
                        <Button size={["9.188rem", "2.905rem"]} text='Next' link='/' />
                    </div>
                </div>
            </main>
        </>
    )
}