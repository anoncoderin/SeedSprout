import Image from "next/image"
import styles from './QuizContents.module.css'

export default function QuizContents({
    option
}) {
    console.log(option)
    return (
        <>
            <button className={styles.container} >
                <Image className={styles.graphicImage} src={option[1]} width={option[2]} height={option[3]} />
                <span>{option[0]}</span>
            </button>
        </>
    )
}