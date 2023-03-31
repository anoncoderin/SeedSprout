import Link from 'next/link'
import styles from '@/components/BrownButton/BrownButton.module.css'

export default function BrownButton({
   link = '',
    text = '',
    img = '',
    width = '',
    height = '',
    smalltext = ''
}) {

    return (
        <>
            <Link className={styles.linkContainer} href={link} style={{ textDecoration: 'none' }}>
                <div className={styles.buttonContainer}>
                    {img === '' ? '' : <Image className={styles.graphicImage} src={img} width={width} height={height} />}
                    <p>{text}</p>
                    {smalltext === '' ? '' : <p className={styles.smallText}>{smalltext}</p>}
                </div>
            </Link>
        </>
    )
}