import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import QuizProgress from '@/components/QuizProgress'
import styles from '@/styles/Quiz.module.css'
import { useState, useEffect } from 'react'
import QuizContents from '@/components/QuizContents'
import Title from '@/components/Title'
import { useRouter } from 'next/router'

export default function QuizPage() {

    const [data, setData] = useState('');
    const [number, setNumber] = useState(1);
    const nextButton = number <= 4 && data.length > number - 1;
    console.log(nextButton)
    const router = useRouter();

    const changeQuestion = (binary) => {
        if (number == -1) {
            router.push('/');
        } else if (number == 1) {
            if (data.length == 0) {
                setData(data + binary);

            } else if (data.length == 1) {
                setData(data.slice(-1, 0));
                setData(binary)
                console.log({ data })
            }

        } else if (number == 2) {
            if (data.length == 1) {
                setData(data + binary);
            } else if (data.length == 2) {
                setData(data.replace(/\d$/, `${binary}`));
                console.log({ data })
            }
        }

        else if (number == 3) {
            if (data.length == 2) {
                setData(data + binary);
            } else if (data.length == 3) {
                setData(data.replace(/\d$/, `${binary}`));
                console.log({ data })
            }
        }

        else if (number == 4) {
            if (data.length == 3) {
                setData(data + binary);
            } else if (data.length == 4) {
                setData(data.replace(/\d$/, `${binary}`));
                console.log({ data })
            }
        }
    }

    const backHandler = () => {
        setNumber(number - 1)
        setData(data.slice(0, -1))
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
                    <QuizProgress question={number} />
                    {
                        number == 1 ? <div className={styles.quizContainer}>
                            <Title title="Which one do you want to grow?" />
                            <span onClick={() => changeQuestion('0')}>
                                <QuizContents option={["Fruits", "/graphics/fruitBundle.svg", 90, 150]} />
                            </span>
                            <span onClick={() => changeQuestion('1')}>
                                <QuizContents option={["Veggies", "/graphics/vegetableBundle.svg", 100, 150]} />
                            </span>
                        </div> : <></>
                    }

                    data: {data},
                    string length: {data.length},

                    {

                        number == 2 ? <div className={styles.quizContainer}>
                            <Title title="How large is your garden bed?" />
                            <span onClick={() => changeQuestion('0')}>
                                <QuizContents option={["Small", "/graphics/smallGarden.svg", 60, 150]} />
                            </span>
                            <span onClick={() => changeQuestion('1')}>
                                <QuizContents option={["Large", "/graphics/largeGarden.svg", 80, 150]} />
                            </span>
                        </div> : <></>
                    }

                    {
                        number == 3 ? <div className={styles.quizContainer}>
                            <Title title="How much maintenance can you handle?" />
                            <span onClick={() => changeQuestion('0')}>
                                <QuizContents option={["Low", "/graphics/wateringCanLow.svg", 100, 150]} />
                            </span>
                            <span onClick={() => changeQuestion('1')}>
                                <QuizContents option={["High", "/graphics/wateringCanHigh.svg", 100, 150]} />
                            </span>
                        </div> : <></>
                    }

                    {
                        number == 4 ? <div className={styles.quizContainer}>
                            <Title title="What season are you planting for?" />
                            <span onClick={() => changeQuestion('0')}>
                                <QuizContents option={["Spring", "/graphics/springSeason.svg", 75, 150]} />
                            </span>
                            <span onClick={() => changeQuestion('1')}>
                                <QuizContents option={["Summer", "/graphics/summerSeason.svg", 80, 150]} />
                            </span>
                            <span onClick={() => changeQuestion('2')}>
                                <QuizContents option={["Autumn", "/graphics/fallSeason.svg", 70, 150]} />
                            </span>
                        </div> : <></>
                    }

                    <div className={styles.backNextContainer}>
                        {
                            data.length >= 0 && number == 1 ? <span onClick={() => backHandler()}>
                                <Button size={["9.188rem", "2.905rem"]} link="/" text='Back' binary={data} />
                            </span> : <></>
                        }

                        {
                            data.length > 0 && number > 1 ? <span onClick={() => backHandler()}>
                                <Button size={["9.188rem", "2.905rem"]} link="" text='Back' binary={data} />
                            </span> : <></>
                        }

                        {
                        nextButton && 
                            <div className={styles.backNextContainer}>
                                <span onClick={() => setNumber(number + 1)}>
                                    <Button size={["9.188rem", "2.905rem"]} link="" text='Next' binary={data} />
                                </span>
                            </div>
                        }
                    </div>
                </div>
            </main>
        </>
    )
}