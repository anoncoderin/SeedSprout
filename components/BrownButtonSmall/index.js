import Link from 'next/link'
import styles from '@/components/BrownButtonSmall/BrownButtonSmall.module.css'

export default function BrownButtonSmall({
   link = '',
    text = '',
    img = '',
    width = '',
    height = '',
}) {

    return (
        <>
            <Link className={styles.linkContainer} href={link} style={{ textDecoration: 'none' }}>
                <div className={styles.buttonContainer}>
                    {img === '' ? '' : <Image className={styles.graphicImage} src={img} width={width} height={height} />}
                    <p>{text}</p>
                </div>
            </Link>
        </>
    )
}