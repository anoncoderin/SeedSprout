import Head from 'next/head'
import NavBar from '@/components/NavBar'
import GreenButtonQuiz from '@/components/GreenButtonQuiz'
import BrownButtonSmall from '@/components/BrownButtonSmall'
import QuizProgress from '@/components/QuizProgress'
import styles from '@/styles/Quiz.module.css'

export default function quizPageOne() {

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
                        <h1 className={styles.questionHeader}>Which one do you want to grow?</h1>
                        <GreenButtonQuiz text='Fruits'  img='/graphics/fruitBundle.svg' width='90' height='150' />
                        <GreenButtonQuiz text='Fruits'  img='/graphics/vegetableBundle.svg' width='100' height='150'/>
                    </div>
                    <div className={styles.backNextContainer}>
                        <BrownButtonSmall text='Back' link='/'/>
                        <BrownButtonSmall text='Next' link='/quizPageTwo' />
                    </div>
                </div>
            </main>
        </>
    )
}