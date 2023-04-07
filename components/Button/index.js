import Link from 'next/link'
import styles from '@/components/Button/Button.module.css'

export default function Button({
    link = '',
    text = '',
    size,
    color
}) {

    return (
        <>
            {
                link.length > 0 ?   <Link className={styles.linkContainer} href={link} style={{ textDecoration: 'none', backgroundColor: `${color}` }}>
                                        <div className={styles.buttonContainer} style={{width: size[0], height: size[1]}}>
                                            <span>{text}</span>
                                        </div>
                                    </Link> :   <div className={styles.linkContainer} style={{ textDecoration: 'none', backgroundColor: `${color}` }}>
                                                    <div className={styles.buttonContainer} style={{width: size[0], height: size[1]}}>
                                                        <span>{text}</span>
                                                    </div>
                                                </div>
            }
            
        </>
    )
}