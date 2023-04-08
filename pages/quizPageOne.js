import Head from 'next/head'
import NavBar from '@/components/NavBar'
import QuizOptions from '@/components/QuizOptions'
import Button from '@/components/Button'
import QuizProgress from '@/components/QuizProgress'
import styles from '@/styles/Quiz.module.css'
import { useState, useEffect } from 'react'


export default function QuizPageOne() {

    const [data, setData] = useState('');
    
    const nextPage = (binary) => {
        setData(binary);
    }

    useEffect(() => {
        console.log(data);
    }, [data])

    

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
                        <span onClick={() => nextPage('0')}>
                            <QuizOptions text='Fruits' img='/graphics/fruitBundle.svg' width='90' height='150' />
                        </span>
                        <span onClick={() => nextPage('1')}>
                            <QuizOptions text='Veggies'  img='/graphics/vegetableBundle.svg' width='100' height='150'/>
                        </span>
                    </div>
                    <div className={styles.backNextContainer}>
                        <Button size={["9.188rem", "2.905rem"]} text='Back' binary={data} />
                        <Button size={["9.188rem", "2.905rem"]} text='Next' binary={data} />
                    </div>
                </div>
            </main>
        </>
    )
}