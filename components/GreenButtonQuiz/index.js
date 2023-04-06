import Image from 'next/image'
import styles from '@/components/GreenButtonQuiz/GreenButtonQuiz.module.css'

export default function GreenButtonQuiz({
    text = '',
    img = '',
    width = '',
    height = '',
    smalltext = ''
}) {
    return (
        <>
            <button className={styles.buttonContainer}>
                <div className={styles.container}>
                    <Image className={styles.graphicImage} src={img} width={width} height={height} />
                    <p>{text}</p>
                    <p className={styles.smallText}>{smalltext}</p>
                </div>
            </button>
        </>
    )
}