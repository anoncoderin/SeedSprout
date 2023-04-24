 import Link from "next/link"
import Image from "next/image"
import styles from '@/components/ResultsItems/ResultsItems.module.css'
import ResultsInfo from "../ResultsInfo"
export default function ResultsItems({
    img = '',
    text = '',
    color = '',
    link = ''
}) {

    

    return (
        <>
           <Link className={styles.link} href={{ pathname: '/ProduceInfo', query: { text } }}>
                <div className={styles.mainContainer} style={{ backgroundImage: `url(${img})`, borderRadius: '6px' }}>
                    <div className={styles.overlay}>
                        <div className={styles.textContainer}>
                            <h3>{text}</h3>
                        </div>
                        <div className={styles.arrowContainer} style={{ backgroundColor: `rgba(${color}, 0.7)` }}>
                            <Image src='/icons/sideArrow.svg' width={30} height={30} />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}