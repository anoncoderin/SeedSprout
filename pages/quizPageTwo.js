import Head from 'next/head'
import NavBar from '@/components/NavBar'
import QuizOptions from '@/components/QuizOptions'
import Button from '@/components/Button'
import QuizProgress from '@/components/QuizProgress'
import styles from '@/styles/Quiz.module.css'
import { useState, useEffect } from 'react'

export default function quizPageTwo({
    binary
}) {

    const [data, setData] = useState();

    useEffect(() => {
        setData(binary);
    }, [])

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
                        <QuizOptions text='Small' smalltext='>9ft²' img='/graphics/smallGarden.svg' width='60' height='150' />
                        <QuizOptions text='Large' smalltext='>9ft²' img='/graphics/largeGarden.svg' width='80' height='150'/>
                    </div>
                    <div className={styles.backNextContainer}>
                        <Button size={["9.188rem", "2.905rem"]} text='Back' link='quizPageOne' />
                        <Button size={["9.188rem", "2.905rem"]} text='Next' link='/quizPageThree' />
                        {binary}
                    </div>
                </div>
            </main>
        </>
    )
}