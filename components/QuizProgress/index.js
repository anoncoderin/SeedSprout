import Image from "next/image";

export default function QuizProgress({
    question
}){
    return(
        <>
        {
         question === 1 ? <Image src={'/graphics/quizProgress1.svg'} width={200} height={100}/> : question === 2 ? <Image src={'/graphics/quizProgress-2.svg'} width={200} height={100}/> : question === 3 ? <Image src={'/graphics/quizProgress-3.svg'} width={200} height={100}/> : question === 4 ? <Image src={'/graphics/quizProgress-4.svg'} width={200} height={100}/> : ''
        }
        </>
    )
}
