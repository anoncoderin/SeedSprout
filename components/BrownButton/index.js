import Link from 'next/link'
import styles from '@/components/BrownButton/BrownButton.module.css'

export default function GreenButton({
    link='',
    text=''
}){
    
    return(
        <>
        <Link className={styles.linkContainer} href={link} style={{ textDecoration: 'none'}}>
        <div className={styles.buttonContainer}>
            <p>{text}</p>
        </div>
        </Link>
        </>
    )
}