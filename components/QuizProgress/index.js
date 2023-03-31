import { useRouter } from 'next/router'
import Image from 'next/image'

export default function QuizProgress(){

const router = useRouter();

    return(
        <>
        {
         router.pathname === '/quizPageOne' ? <Image src={'/graphics/quizProgress1.svg'} width={200} height={100}/> : router.pathname === '/quizPageTwo' ? <Image src={'/graphics/quizProgress2'} width={200} height={100}/> : router.pathname === '/quizPageThree' ? <Image src={'/graphics/quizProgress3'} width={200} height={100}/> : router.pathname = '/quizPageFour' ? <Image src={'/graphics/quizProgress4'} width={200} height={100}/> : 'baboy'
        }
        </>
    )
}