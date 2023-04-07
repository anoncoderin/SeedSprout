import Head from 'next/head'
import NavBar from '@/components/NavBar'
import QuizOptions from '@/components/QuizOptions'
import Button from '@/components/Button'
import QuizProgress from '@/components/QuizProgress'
import styles from '@/styles/Quiz.module.css'
import { useState, useEffect } from 'react'
import quizPageTwo from './quizPageTwo'
import QuizContents from '@/components/QuizContents'
import Title from '@/components/Title'
import { useRouter } from 'next/router'

export default function QuizPage() {

    const [data, setData] = useState('');
    const [number, setNumber] = useState(1);

    const router = useRouter();
    
    const changeQuestion = (binary) => {
        if(number == -1) {
            router.push('/');
        } else if(number == 1) {
            setData(data + binary);
        } else if(number == 2) {
            setData(data + binary);
        } 
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
                    {
                        number == 1 ? <div className={styles.quizContainer}>
                                        <Title title="Which one do you want to grow?" />
                                        <span onClick={() => changeQuestion('0')}>
                                            <QuizContents option={["Fruits","/graphics/fruitBundle.svg",90,150]}/>
                                        </span>
                                        <span onClick={() => changeQuestion('1')}>
                                            <QuizContents option={["Veggies","/graphics/vegetableBundle.svg",100,150]}/>
                                        </span>
                                    </div> : <></>
                    }
                    
                    {
                        number == 2 ? <div className={styles.quizContainer}>
                                        <Title title="How large is your garden bed?" />
                                        <span onClick={() => changeQuestion('0')}>
                                            <QuizContents option={["Small","/graphics/smallGarden.svg",60,150]}/>
                                        </span>
                                        <span onClick={() => changeQuestion('1')}>
                                            <QuizContents option={["Large","/graphics/largeGarden.svg",80,150]}/>
                                        </span>
                                    </div> : <></>
                    }
                    



                    {/* <div className={styles.quizContainer}>
                        <h1 className={styles.questionHeader}>Which one do you want to grow?</h1>
                        <span onClick={() => nextPage('0')}>
                            <QuizOptions text='Fruits' img='/graphics/fruitBundle.svg' width='90' height='150' />
                        </span>
                        <span onClick={() => nextPage('1')}>
                            <QuizOptions text='Veggies'  img='/graphics/vegetableBundle.svg' width='100' height='150'/>
                        </span>
                    </div> */}

                        <div className={styles.backNextContainer}>
                        {
                            data.length == 0 ? <span onClick={() => setNumber(number - 1)}>
                                                    <Button size={["9.188rem", "2.905rem"]} link="/" text='Back' binary={data} />
                                                </span> : <></>
                        }

                        {
                            data.length > 0 ? <span onClick={() => setNumber(number - 1)}>
                                                    <Button size={["9.188rem", "2.905rem"]} link="" text='Back' binary={data} />
                                                </span> : <></>
                        }
                        
                        {
                            data.length > 0 ? 
                                                    <span onClick={() => setNumber(number + 1)}>
                                                        <Button size={["9.188rem", "2.905rem"]} link="" text='Next' binary={data} />
                                                    </span>
                                                 : <></>
                        }
                        </div>
                </div>
            </main>
        </>
    )
}