import Image from 'next/image'
import styles from './QuizOptions.module.css'

export default function QuizOptions({
    text = '',
    img = '',
    width = '',
    height = '',
    smalltext = ''
}) {
    return (
        <>
            <div className={styles.buttonContainer}>
                <div className={styles.container}>
                    <Image className={styles.graphicImage} src={img} width={width} height={height} />
                    <p>{text}</p>
                    <p className={styles.smallText}>{smalltext}</p>
                </div>
            </div>
        </>
    )
}